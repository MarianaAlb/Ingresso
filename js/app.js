function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    if (quantidade < 0) {
        alert('Erro! Números negativos não são válidos')
        quantidade = '';
        return;
    }
    let qtdTipo = document.getElementById(`qtd-${tipoIngresso}`).textContent;
    let disponivel = qtdTipo - quantidade;
    console.log(quantidade);
    if (quantidade > qtdTipo) {
        alert('Desculpe, mas essa quantidade está indisponível!');
    } else {
        document.getElementById(`qtd-${tipoIngresso}`).textContent = disponivel;
        alert('Compra efeituada com sucesso!');
    }
}