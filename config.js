// config.js
// Centraliza endpoints e constantes usadas pelos painéis do Grupo DV.
// Uso nas páginas:
//   const WEBAPP = CONFIG.WEBAPP;
//   fetch(CONFIG.URLS.ENTRADAS)
//   fetch(`${CONFIG.URLS.METAS}?` + new URLSearchParams({...}))
//   // etc.

(function (global) {
  const CONFIG = {
    // ===== Autenticação (Apps Script do login) =====
    WEBAPP: 'https://script.google.com/macros/s/AKfycbxmF23nDe_XI7RQ87rFS_a8KDgATYUCqvNrw3fnK0nLvJEdzYIWPa3HYVyOfkRPznnJlg/exec',

    // (Opcional) Origens permitidas no CORS — útil p/ conferência
    ORIGINS: ['https://grupodvbr.github.io', 'http://localhost:5500'],

    // (Opcional) Lista única de empresas para os painéis que precisarem
    EMPRESAS: [
      'MERCATTO DELICIA',
      'DELICIA GOURMET',
      'VILLA GOURMET',
      'M. KIDS',
      'PADARIA DELICIA'
    ],

    // ===== Endpoints de dados dos painéis =====
    URLS: {
      // Painel de TRAVAS
      TRAVAS: 'https://script.google.com/macros/s/AKfycbyDGQ-srD7OFMORoRo7ZH2BDaz_tJVVlsqjdlLTI0OpkEKv3tQ5Ny02h3blo7GKjsFEIw/exec',

      // Resumo de ENTRADAS
      ENTRADAS: 'https://script.google.com/macros/s/AKfycbz9GQLrIB4oiX0jBQ7yaDO_IiMz3ER7lQT094sp5y2VUGgQWBaz3G1fa7s4ZbiWli_O/exec',

      // METAS de Receita
      METAS: 'https://script.google.com/macros/s/AKfycbzyiL6yNCj_FYWiQ2PS88mthToCvWM1wJ0q7CQy8asyg-59L8YezKzFY6d-lgQU0ni3/exec',

      // VENDAS Delivery
      DELIVERY: 'https://script.google.com/macros/s/AKfycby3tGjtsUXcak51bcWG175VU4SWT2RV6pA9vJLyQxlMXSt3bGJFoi2R0YmDmuwzbcbOnw/exec',

      // CONCILIAÇÕES
      CONCILIACOES: 'https://script.google.com/macros/s/AKfycbypZ0ibLQGEbGLQNr-UdmmSn-fbde-nz4KUt6RFUjp0lZbHmGTxcHvKVZmmFxL5b5roLA/exec',

      // CANCELAMENTOS
      CANCELAMENTOS: 'https://script.google.com/macros/s/AKfycby6kNirWdyaFymip0MFrqTNoItMgqkXJrzwf41Qxe2P1j8BoBILtnyws8o4f5sUdg-T3w/exec',

      // AVALIAÇÕES (pesquisa de satisfação)
      AVALIACOES: 'https://script.google.com/macros/s/AKfycbyK3A5CDn_EgA3pbRVToh87_qKWvbIry886OkR1AdkJi7RyvSgcwY0BmRqhbKQnEKwgrA/exec',

      // ABC de VENDAS
      ABC: 'https://script.google.com/macros/s/AKfycbz8NEPUpDI0_JZKeqQLrV4JwinN1RVGDs7-a0Rc3lWidxJa4GRin4csMkceAs5XjVOpOg/exec'
    }
  };

  // Deixa global
  global.CONFIG = CONFIG;
})(window);

/* ===== Exemplos rápidos (copiar/colar nas páginas) =====

1) Autenticação (guard)
(async ()=>{
  const WEBAPP = CONFIG.WEBAPP;
  function goLogin(){ location.href = 'login.html?next='+encodeURIComponent(location.pathname.split('/').pop()); }
  const token = localStorage.getItem('auth_token'); if(!token){ goLogin(); return; }
  try{
    const url = `${WEBAPP}?fn=me&origin=${encodeURIComponent(location.origin)}`;
    const r = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({})});
    const j = await r.json();
    if(!j.ok){ localStorage.clear(); goLogin(); return; }
    window.AUTH_USER = j.user;
  }catch{ goLogin(); }
})();

2) Fetch de dados:
const url = CONFIG.URLS.ENTRADAS;              // ou METAS / DELIVERY / CONCILIACOES / CANCELAMENTOS / AVALIACOES / ABC / TRAVAS
const res = await fetch(url);
const data = await res.json();

3) Travas: empresas centralizadas
const EMPRESAS = CONFIG.EMPRESAS;

========================================================= */
