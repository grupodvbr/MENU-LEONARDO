// config.js

// === Endpoints dos seus Apps Scripts (preencha os /exec reais) ===
// Dica: pode deixar algum vazio por enquanto; só preencha o que já existe.
window.API_URLS = {
  // Autenticação (login/me) — o mesmo Web App que valida token
  login: "https://script.google.com/macros/s/AKfycby4G9i4Ohgps-xcyUQmyxrjxNmRTlr3lI8qPRZxeU6dpj2sSGhUYneQBs79wltn2vcW_g/exec",

  // Dados de cada painel:
  travas: "https://script.google.com/macros/s/AKfycbyDGQ-srD7OFMORoRo7ZH2BDaz_tJVVlsqjdlLTI0OpkEKv3tQ5Ny02h3blo7GKjsFEIw/exec",
  abcVendas: "https://script.google.com/macros/s/SEU_ID_ABC/exec",
  metas: "https://script.google.com/macros/s/SEU_ID_METAS/exec",
  cancelamentos: "https://script.google.com/macros/s/SEU_ID_CANCELAMENTOS/exec",
  resumoFinanceiro: "https://script.google.com/macros/s/SEU_ID_RESUMO/exec",
  delivery: "https://script.google.com/macros/s/SEU_ID_DELIVERY/exec",
  conciliacao: "https://script.google.com/macros/s/SEU_ID_CONCILIACAO/exec",
  avaliacoes: "https://script.google.com/macros/s/SEU_ID_AVALIACOES/exec"
};

// (opcionais)
window.SYSTEM_NAME = "Painel Grupo DV";
window.MANTER_CONECTADO_PADRAO = true;
