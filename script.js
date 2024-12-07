// Meta fixa
const META = 700000000;

// Função para formatar valores em reais
function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularValores() {
    const totalPago = parseFloat(
        document.getElementById('totalPago').value.replace(/\./g, '').replace(',', '.')
    );
    const numPagamentos = parseInt(document.getElementById('numPagamentos').value);

    if (isNaN(totalPago) || isNaN(numPagamentos) || numPagamentos <= 0) {
        return alert("Por favor, insira valores válidos!");
    }

    // Calcula média por pagamento
    const media = totalPago / numPagamentos;
    document.getElementById('mediaPagamento').textContent = formatarValor(media);

    // Calcula quanto falta para atingir a meta
    const falta = META - totalPago;
    const faltaTexto = falta > 0 
        ? `Falta ${formatarValor(falta)} para pagarmos a Arena Corinthians.` 
        : "Meta atingida!";
    document.getElementById('faltaMeta').textContent = faltaTexto;

    // Calcula percentual
    const percentualPago = (totalPago / META) * 100;
    document.getElementById('percentualPago').textContent = `Já pagamos ${percentualPago.toFixed(2)}% da meta.`;
}
