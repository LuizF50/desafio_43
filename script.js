function encontrarGatinho() {
    const n = parseInt(document.getElementById('n').value);
    if (isNaN(n) || n < 1 || n > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    const chaveMagica = [];
    for (let i = 0; i < n; i++) {
        const numero = 3 * Math.pow(i, 2) + 2 * i + 1;
        chaveMagica.push(numero);
    }

    document.getElementById('resultado').innerText = `Chave Mágica: ${chaveMagica.join(', ')}`;
}
