async function carregarCotacao() {
  const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const cotacao = dados.USDBRL;

    document.getElementById("valor-atual").textContent = `R$ ${parseFloat(cotacao.bid).toFixed(2)}`;
    document.getElementById("maior-valor").textContent = `R$ ${parseFloat(cotacao.high).toFixed(2)}`;
    document.getElementById("menor-valor").textContent = `R$ ${parseFloat(cotacao.low).toFixed(2)}`;

    const data = new Date();
    document.getElementById("atualizado-em").textContent = `Atualizado em: ${data.toLocaleString()}`;
  } catch (erro) {
    console.error("Erro ao carregar cotação:", erro);
    alert("Não foi possível obter a cotação. Tente novamente mais tarde.");
  }
}

document.getElementById("atualizar").addEventListener("click", carregarCotacao);
carregarCotacao();
