let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);

    atualizarListaAmigos();
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista para evitar duplicações

    for (let i = 0; i < amigos.length; i++) {
        const item = `<li>${amigos[i]}</li>`;
        lista.innerHTML += item;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
