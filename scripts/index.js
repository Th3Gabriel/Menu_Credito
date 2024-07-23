var box = window.document.getElementById("box_lado_direito");
var loginForm = window.document.getElementById('login_form');
var registerForm = window.document.getElementById('register_form');
let link_EsqueceuSenha = window.document.getElementById('link_EsqueceuSenha');

function entrar(event) {
    event.preventDefault();  

    box.style = 'width:100%; transition-duration: 1.5s;';
    loginForm.style = 'display:none';
    link_EsqueceuSenha.style = 'display:none';

    anima = setTimeout(() => {
        box.style = 'width:0%; transition-duration: 1.5s;';
    }, 900);

    setTimeout(() => {
        window.location.href = 'tela_inicial.html'; 
    }, 1800);
}

function mostrarRegistro() {
    loginForm.classList.add('hidden');
    setTimeout(() => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        registerForm.classList.remove('hidden');
    }, 500); 
}

function mostrarLogin() {
    registerForm.classList.add('hidden');
    setTimeout(() => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
        loginForm.classList.remove('hidden');
    }, 500); 
}

function registrar(event) {
    event.preventDefault();  

    

    alert('Usuário registrado com sucesso!');
    mostrarLogin();
}
