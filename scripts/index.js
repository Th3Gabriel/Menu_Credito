var box = window.document.getElementById("box_lado_direito")
var InputEmail = window.document.getElementById('ipt_email')
var InputSenha = window.document.getElementById('ipt_password')
var botao = window.document.getElementById('botao_login')
var esqueceu_Senha = window.document.getElementById('link_EsqueceuSenha')
var logo = window.document.getElementById('lg_Sicoob')

function entrar() {
    box.style = 'width:100%; transition-duration: 0.9s;';
    InputEmail.style = 'display:none';
    InputSenha.style = 'display:none';
    botao.style = 'display:none';
    esqueceu_Senha.style = 'display:none';
    logo.style = 'display:none';

    anima = setTimeout(() => {
        box.style = 'width:0%; transition-duration: 0.9s;'
    }, 900);

    setTimeout(() => {
        window.location.href = 'tela_inicial.html'; // Caminho relativo para a pasta raiz
    }, anima);
    
}

