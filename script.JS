function revelarMensagem() {
    document.getElementById("mensagem").innerText = "Olá, você alterou a mensagem chamnedo uma função JS"
}

function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").ariaValueMax;

    document.getElementById("resultadoNome").innerText = "Bem-vindo, " + nome + "!"
}
