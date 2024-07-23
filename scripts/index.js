var box = window.document.getElementById("box_lado_direito");
var loginForm = window.document.getElementById('login_form');
var registerForm = window.document.getElementById('register_form');
let link_EsqueceuSenha = window.document.getElementById('link_EsqueceuSenha');

function entrar(event) {
    event.preventDefault();  // Previne o envio do formulário

    box.style = 'width:100%; transition-duration: 1.5s;';
    loginForm.style = 'display:none';
    link_EsqueceuSenha.style = 'display:none';

    anima = setTimeout(() => {
        box.style = 'width:0%; transition-duration: 1.5s;';
    }, 900);

    setTimeout(() => {
        window.location.href = 'tela_inicial.html'; // Caminho relativo para a pasta raiz
    }, 1800); // O tempo deve ser o dobro do tempo da animação
}

function mostrarRegistro() {
    loginForm.classList.add('hidden');
    setTimeout(() => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        registerForm.classList.remove('hidden');
    }, 500); // Duração da animação (deve ser igual ao tempo de transição no CSS)
}

function mostrarLogin() {
    registerForm.classList.add('hidden');
    setTimeout(() => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
        loginForm.classList.remove('hidden');
    }, 500); // Duração da animação (deve ser igual ao tempo de transição no CSS)
}

function registrar(event) {
    event.preventDefault();  // Previne o envio do formulário de registro

    // Aqui você pode adicionar a lógica para registrar o usuário

    alert('Usuário registrado com sucesso!');
    mostrarLogin();
}
