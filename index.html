<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Painel de Reservas - Mercatto</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f4f4f4;
    }

    header {
      background: #2196F3;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      flex-wrap: wrap;
    }

    header img {
      height: 50px;
      max-width: 100%;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
    }

    nav {
      background: #333;
      color: #fff;
      width: 200px;
      height: 100vh;
      padding: 20px;
      box-sizing: border-box;
    }

    nav h3 {
      margin-top: 0;
    }

    nav a {
      color: #fff;
      display: block;
      margin: 10px 0;
      text-decoration: none;
      cursor: pointer;
    }

    nav a.active {
      font-weight: bold;
      text-decoration: underline;
    }

    .content {
      flex: 1;
      padding: 20px;
    }

    .eye-global {
      cursor: pointer;
      font-size: 20px;
      margin-bottom: 10px;
      display: inline-block;
    }

    .cards {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }

    .card {
      background: #fff;
      padding: 20px;
      flex: 1 1 200px;
      border-radius: 8px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      overflow-x: auto;
    }

    th, td {
      padding: 10px;
      border: 1px solid #ddd;
      text-align: center;
    }

    .btn {
      padding: 6px 12px;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .btn-edit {
      background: #ffc107;
      color: #000;
    }

    .btn-liquidar {
      background: #4CAF50;
      color: #fff;
    }

    .form-panel {
      background: #fff;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
    }

    .form-row {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .form-group {
      flex: 1;
      min-width: 200px;
    }

    label {
      display: block;
      margin: 4px 0;
    }

    input, select, textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      margin: 10px 0;
    }

    #valorAntecipadoDiv {
      display: none;
      margin-top: 10px;
    }

    button {
      background: #2196F3;
      color: #fff;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 4px;
    }

    /* Responsivo */
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      nav {
        width: 100%;
        height: auto;
      }

      .cards {
        flex-direction: column;
      }

      .form-row {
        flex-direction: column;
      }

      .form-group {
        min-width: 100%;
      }

      table {
        font-size: 12px;
      }

      header {
        flex-direction: column;
        text-align: center;
      }
    }
  </style>
</head>
<body>

<header>
  <h1>Painel de Reservas - Mercatto</h1>
  <img src="https://static.wixstatic.com/media/d830b0_207a7b09d8f24ebc97b887c3d4d18691~mv2.png" alt="Logo" />
</header>

<div class="container">
  <nav>
    <h3>Menu</h3>
    <a id="link-dashboard" onclick="showSection('dashboard')">Dashboard</a>
    <a id="link-reserva" class="active" onclick="showSection('reserva')">Nova Reserva</a>
  </nav>

  <div class="content">
    <!-- DASHBOARD -->
    <div id="dashboard" style="display: none;">
      <span class="eye-global" onclick="toggleAll()">🙈 Mostrar/Esconder Totais</span>
      <div class="cards">
        <div class="card"><h3>Total Reservas Hoje</h3><p id="totalReservas">••••••</p></div>
        <div class="card"><h3>Reservas Futuras</h3><p id="totalFuturas">••••••</p></div>
      </div>
      <div class="cards">
        <div class="card"><h3>Pagamentos Antecipados</h3><p id="totalAntecipado">••••••</p></div>
        <div class="card"><h3>Valor Estimado</h3><p id="valorTotal">••••••</p></div>
      </div>

      <h3>Todas as Reservas</h3>
      <table id="tabelaReservas">
        <tr>
          <th>Cliente</th><th>Data</th><th>Hora</th><th>Pessoas</th><th>Mesa</th>
          <th>Valor</th><th>Pag.</th><th>Antecipado</th><th>Ações</th>
        </tr>
      </table>
    </div>

    <!-- NOVA RESERVA -->
    <div id="reserva" style="display: block;">
      <div class="form-panel">
        <h3 id="formTitulo">Nova Reserva</h3>
        <div class="form-row">
          <div class="form-group">
            <label>Cliente:</label>
            <input type="text" id="cliente" />
          </div>
          <div class="form-group">
            <label>Data:</label>
            <input type="date" id="data" />
          </div>
          <div class="form-group">
            <label>Hora:</label>
            <input type="time" id="hora" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Pessoas:</label>
            <input type="number" id="pessoas" min="1" />
          </div>
          <div class="form-group">
            <label>Mesa:</label>
            <input type="text" id="mesa" />
          </div>
          <div class="form-group">
            <label>Valor (R$):</label>
            <input type="text" id="valor" />
          </div>
          <div class="form-group">
            <label>Forma de Pagamento:</label>
            <select id="pagamento">
              <option value="">Selecione</option>
              <option value="Pix">Pix</option>
              <option value="Cartão">Cartão</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </div>
        </div>
        <div class="checkbox-group">
          <label>Pagamento Antecipado</label>
          <input type="checkbox" id="antecipado" onchange="toggleAntecipadoValor()" />
        </div>
        <div id="valorAntecipadoDiv">
          <label>Valor do Pagamento Antecipado (R$):</label>
          <input type="text" id="valorAntecipado" />
        </div>
        <div class="form-group">
          <label>Observações:</label>
          <textarea id="obs"></textarea>
        </div>
        <button onclick="salvarOuEditar()">Salvar</button>
        <p id="msg"></p>
        <input type="hidden" id="clienteOriginal" />
      </div>
    </div>
  </div>
</div>

<script>
  let valoresVisiveis = false;
  let realTotalReservas = 0, realTotalFuturas = 0, realTotalAntecipado = 0, realValorTotal = 0;

  function showSection(section) {
    document.getElementById('dashboard').style.display = (section === 'dashboard') ? 'block' : 'none';
    document.getElementById('reserva').style.display = (section === 'reserva') ? 'block' : 'none';
    document.getElementById('link-dashboard').classList.toggle('active', section === 'dashboard');
    document.getElementById('link-reserva').classList.toggle('active', section === 'reserva');
  }

  function toggleAll() {
    valoresVisiveis = !valoresVisiveis;
    document.getElementById('totalReservas').innerText = valoresVisiveis ? realTotalReservas : '••••••';
    document.getElementById('totalFuturas').innerText = valoresVisiveis ? realTotalFuturas : '••••••';
    document.getElementById('totalAntecipado').innerText = valoresVisiveis ? "R$ " + realTotalAntecipado.toFixed(2) : '••••••';
    document.getElementById('valorTotal').innerText = valoresVisiveis ? "R$ " + realValorTotal.toFixed(2) : '••••••';
  }

  function toggleAntecipadoValor() {
    const div = document.getElementById('valorAntecipadoDiv');
    div.style.display = document.getElementById('antecipado').checked ? 'block' : 'none';
  }

  function salvarOuEditar() {
    const cliente = document.getElementById('cliente').value.trim();
    const data = document.getElementById('data').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const pessoas = document.getElementById('pessoas').value.trim();
    const mesa = document.getElementById('mesa').value.trim();
    const valor = document.getElementById('valor').value.trim().replace(/[^\d,]/g, '').replace(",", ".");
    const pagamento = document.getElementById('pagamento').value.trim();
    const obs = document.getElementById('obs').value.trim();
    const antecipado = document.getElementById('antecipado').checked ? "Sim" : "Não";
    const valorAntecipado = document.getElementById('valorAntecipado').value.trim().replace(/[^\d,]/g, '').replace(",", ".") || "0.00";

    if (!cliente || !data || !hora) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    const dataForm = new URLSearchParams();
    const clienteOriginal = document.getElementById('clienteOriginal').value;

    if (clienteOriginal) {
      dataForm.append('tipoFormulario', 'Editar');
      dataForm.append('ClienteOriginal', clienteOriginal);
    } else {
      dataForm.append('tipoFormulario', 'Reserva');
      dataForm.append('Status', 'Pendente');
    }

    dataForm.append('Cliente', cliente);
    dataForm.append('Data', data);
    dataForm.append('Hora', hora);
    dataForm.append('Pessoas', pessoas);
    dataForm.append('Mesa', mesa);
    dataForm.append('Valor', valor);
    dataForm.append('FormaPagamento', pagamento);
    dataForm.append('Antecipado', antecipado);
    dataForm.append('ValorAntecipado', valorAntecipado);
    dataForm.append('Observacoes', obs);

    fetch('https://script.google.com/macros/s/SEU_ID_SCRIPT/exec', { method: 'POST', body: dataForm })
      .then(r => r.text())
      .then(() => {
        alert(clienteOriginal ? "Reserva editada!" : "Reserva salva!");
        document.getElementById('clienteOriginal').value = '';
        showSection('dashboard');
        listarReservas();
      });
  }

  function liquidarReserva(cliente) {
    const confirmar = confirm(`Deseja liquidar o recebimento da reserva de ${cliente}?`);
    if (!confirmar) return;

    const dataForm = new URLSearchParams();
    dataForm.append('tipoFormulario', 'Liquidar');
    dataForm.append('Cliente', cliente);

    fetch('https://script.google.com/macros/s/SEU_ID_SCRIPT/exec', { method: 'POST', body: dataForm })
      .then(r => r.text())
      .then(() => {
        alert("Reserva liquidada!");
        listarReservas();
      });
  }

  function editarReserva(cliente) {
    const senha = prompt("Digite a senha de edição:");
    if (senha !== "1234") { alert("❌ Senha incorreta!"); return; }

    fetch('https://script.google.com/macros/s/SEU_ID_SCRIPT/exec').then(r => r.json()).then(dados => {
      const reserva = dados.find(row => row[1] === cliente);
      if (reserva) {
        document.getElementById('cliente').value = reserva[1];
        document.getElementById('data').value = reserva[2];
        document.getElementById('hora').value = reserva[3];
        document.getElementById('pessoas').value = reserva[4];
        document.getElementById('mesa').value = reserva[5];
        document.getElementById('valor').value = reserva[6];
        document.getElementById('pagamento').value = reserva[7];
        document.getElementById('antecipado').checked = reserva[8] === "Sim";
        toggleAntecipadoValor();
        if (reserva[8] === "Sim") document.getElementById('valorAntecipado').value = reserva[9];
        document.getElementById('obs').value = reserva[10];
        document.getElementById('clienteOriginal').value = reserva[1];
        document.getElementById('formTitulo').innerText = "Editar Reserva";
        showSection('reserva');
      }
    });
  }

  function listarReservas() {
    const tabela = document.getElementById('tabelaReservas');
    tabela.innerHTML = `<tr>
      <th>Cliente</th><th>Data</th><th>Hora</th><th>Pessoas</th><th>Mesa</th>
      <th>Valor</th><th>Pag.</th><th>Antecipado</th><th>Ações</th>
    </tr>`;
    fetch('https://script.google.com/macros/s/SEU_ID_SCRIPT/exec').then(r => r.json()).then(dados => {
      let totalHoje = 0, totalFuturas = 0, totalAntecipado = 0, valorTotal = 0;
      const hoje = new Date().toISOString().slice(0, 10);
      dados.forEach(row => {
        const tr = tabela.insertRow();
        tr.insertCell(0).innerText = row[1];
        tr.insertCell(1).innerText = row[2];
        tr.insertCell(2).innerText = row[3];
        tr.insertCell(3).innerText = row[4];
        tr.insertCell(4).innerText = row[5];
        tr.insertCell(5).innerText = "R$ " + parseFloat(row[6] || 0).toFixed(2).replace(".", ",");
        tr.insertCell(6).innerText = row[7];
        tr.insertCell(7).innerText = row[8];
        tr.insertCell(8).innerHTML = `<button class="btn btn-edit" onclick="editarReserva('${row[1]}')">Editar</button> <button class="btn btn-liquidar" onclick="liquidarReserva('${row[1]}')">Liquidar</button>`;
        if (row[2] === hoje) totalHoje++; else totalFuturas++;
        valorTotal += parseFloat(row[6] || 0);
        if (row[8] === "Sim") totalAntecipado += parseFloat(row[6] || 0);
      });
      realTotalReservas = totalHoje;
      realTotalFuturas = totalFuturas;
      realTotalAntecipado = totalAntecipado;
      realValorTotal = valorTotal;
      toggleAll();
    });
  }

  listarReservas();
</script>

</body>
</html>
