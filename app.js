(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const SEV = ['No es problema', 'Cosmético', 'Menor', 'Mayor', 'Catástrofe'];
  const SEVC = ['var(--s0)', 'var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)'];

  // ---------- Navegación por pestañas ----------
  const tabs = ['inicio', 'leyes', 'heuristicas', 'flujos', 'metodo'];
  function show() {
    const raw = (location.hash || '#inicio').slice(1);
    const [tab, sub] = raw.split('/');
    const t = tabs.includes(tab) ? tab : 'inicio';
    tabs.forEach((id) => { document.getElementById(id).hidden = id !== t; });
    document.querySelectorAll('.tabs a').forEach((a) => a.classList.toggle('on', a.dataset.tab === t));
    if (t === 'flujos') renderFlow(sub || FLUJOS[0].id);
    if (t === 'heuristicas' && sub) { const el = document.getElementById('h' + sub); if (el) el.scrollIntoView(); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);

  // ---------- Inicio ----------
  const cumple = LEYES.filter((l) => l.estado === 'cumple').length;
  const graves = HEURISTICAS.filter((h) => h.severidad >= 3).length;
  $('#stats').innerHTML = [
    [LEYES.length, 'leyes UX evaluadas'],
    [`${cumple} / ${LEYES.length - cumple}`, 'cumple / rompe'],
    [HEURISTICAS.length, 'heurísticas evaluadas'],
    [graves, 'problemas mayores o catastróficos']
  ].map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join('');

  // ---------- Leyes ----------
  function renderLeyes(f) {
    const list = LEYES.filter((l) => f === 'todas' || l.estado === f);
    const groups = [...new Set(list.map((l) => l.grupo))];
    $('#leyes-grid').innerHTML = groups.map((g) => `
      <h3 class="group-title">${esc(g)}</h3>
      <div class="grid">${list.filter((l) => l.grupo === g).map((l) => `
        <article class="item">
          <img class="shot" loading="lazy" src="${l.captura}" alt="Captura de eDreams: ${esc(l.donde)}" data-cap="${esc(l.ley + ' · ' + l.donde)}">
          <div class="item-body">
            <div class="item-head"><h3>${esc(l.ley)}</h3><span class="badge ${l.estado}">${l.estado === 'cumple' ? '✓ Cumple' : '✕ Rompe'}</span></div>
            <p class="dice">${esc(l.dice)}</p>
            <p class="q">${esc(l.pregunta)}</p>
            <p class="where">📍 ${esc(l.donde)}</p>
            <p class="exp">${esc(l.explicacion)}</p>
          </div>
        </article>`).join('')}
      </div>`).join('');
  }
  document.querySelectorAll('.filters .chip').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('.filters .chip').forEach((x) => x.classList.toggle('on', x === b));
    renderLeyes(b.dataset.f);
  }));
  renderLeyes('todas');

  // ---------- Heurísticas ----------
  const pips = (s) => `<span class="pips">${[1, 2, 3, 4].map((i) => `<i class="pip" style="${i <= s ? 'background:' + SEVC[s] : ''}"></i>`).join('')}</span>`;
  $('#sevchart').innerHTML = HEURISTICAS.map((h) => `
    <div class="sevrow">
      <a href="#heuristicas/${h.n}">${h.n}. ${esc(h.nombre)}</a>
      <div class="sevtrack"><div class="sevfill" style="width:${Math.max(h.severidad, 0.15) * 25}%;background:${SEVC[h.severidad]}"></div></div>
      <span class="sevnum" style="color:${SEVC[h.severidad]}">${h.severidad}</span>
    </div>`).join('');
  $('#heur-list').innerHTML = HEURISTICAS.map((h) => `
    <article class="heur" id="h${h.n}">
      <img class="shot" loading="lazy" src="${h.captura}" alt="Captura de eDreams: ${esc(h.donde)}" data-cap="${esc(h.n + '. ' + h.nombre + ' · ' + h.donde)}">
      <div class="item-body">
        <span class="num">Heurística ${h.n}</span>
        <h3>${esc(h.nombre)}</h3>
        <p class="dice">${esc(h.resumen)}</p>
        <div class="sev" style="color:${SEVC[h.severidad]}">Severidad ${h.severidad} · ${SEV[h.severidad]} ${pips(h.severidad)}</div>
        <p class="where">📍 ${esc(h.donde)}</p>
        <p class="lbl">Qué pasa</p><p>${esc(h.explicacion)}</p>
        <p class="lbl">Impacto en la persona usuaria</p><p>${esc(h.impacto)}</p>
      </div>
    </article>`).join('');

  // ---------- Flujos ----------
  $('#tareas').innerHTML = '<tr><th>Tarea</th><th>Prioridad</th><th>Motivo</th></tr>' +
    TAREAS_LISTADO.map((t) => `<tr><td>${esc(t[0])}</td><td>${esc(t[1])}</td><td>${esc(t[2])}</td></tr>`).join('');
  $('#flowtabs').innerHTML = FLUJOS.map((f) => `<a class="chip" role="tab" data-id="${f.id}" href="#flujos/${f.id}">${f.prioridad}. ${esc(f.titulo)}</a>`).join('');

  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false, securityLevel: 'loose', theme: 'base',
      flowchart: { curve: 'basis', htmlLabels: true, nodeSpacing: 36, rankSpacing: 42 },
      themeVariables: { fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', primaryColor: '#ffffff', primaryBorderColor: '#1c1f26', primaryTextColor: '#1c1f26', lineColor: '#5d6370', edgeLabelBackground: '#fcfbf8' }
    });
  }
  const DOC_STYLE = '\n  classDef doc fill:#f3f1ec,stroke:#6b6f78,stroke-dasharray:5 4,color:#3b3f47';
  let flowSeq = 0;
  async function renderFlow(id) {
    const f = FLUJOS.find((x) => x.id === id) || FLUJOS[0];
    document.querySelectorAll('#flowtabs .chip').forEach((c) => c.classList.toggle('on', c.dataset.id === f.id));
    const last = f.task.length;
    $('#flow-view').innerHTML = `
      <article class="flow">
        <span class="num">Tarea ${f.prioridad}</span>
        <h3>${esc(f.titulo)}</h3>
        <p class="meta"><b>Por qué la priorizamos:</b> ${esc(f.porque)}</p>
        <p class="meta"><b>Fuente:</b> ${esc(f.fuente)}</p>
        <h4>Task flow</h4>
        <ol class="steps">
          <li class="ends"><span>Inicio</span></li>
          ${f.task.map((s) => `<li class="${s.includes('*') ? 'nodoc' : ''}"><span>${esc(s.replace(' *', ''))}</span></li>`).join('')}
          <li class="ends"><span>Fin</span></li>
        </ol>
        <p class="note">Borde punteado = paso documentado, no observado (${f.task.filter((s) => s.includes('*')).length} de ${last}).</p>
        <h4>User flow</h4>
        <div class="mermaidbox" id="mm"></div>
        ${f.nota ? `<p class="note">${esc(f.nota)}</p>` : ''}
        <h4>Problemas detectados en la navegación actual</h4>
        <ul class="probs">${f.problemas.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </article>`;
    if (!window.mermaid) { $('#mm').textContent = 'No se pudo cargar el renderizador de diagramas.'; return; }
    try {
      const { svg } = await mermaid.render('flow' + (++flowSeq), f.user + DOC_STYLE);
      $('#mm').innerHTML = svg;
    } catch (e) { $('#mm').textContent = 'Error al dibujar el diagrama: ' + e.message; }
  }

  // ---------- Lightbox ----------
  const lb = $('#lightbox');
  document.addEventListener('click', (e) => {
    const img = e.target.closest('img.shot');
    if (img) { lb.querySelector('img').src = img.src; lb.querySelector('.cap').textContent = img.dataset.cap || ''; lb.showModal(); }
    if (e.target === lb || e.target.closest('#lightbox .close')) lb.close();
  });

  show();
})();
