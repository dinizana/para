function abrirCarta() {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('carta').classList.remove('hidden');
}

function fecharCarta() {
    document.getElementById('carta').classList.add('hidden');
    document.getElementById('inicio').classList.remove('hidden');
}