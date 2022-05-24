/* Anotações:
 * Variáveis são fracamente tipadas
 * var = Variável global, usada em várias funções e classes
 * let = Variável interna, chamada dentro de uma função/classe
 * Case Sensitive = reconhece letras maiusculas e minusculas
 * por Tag: getElementByTagName()
 * por Id: getElementById()
 * por Nome: getElementsByName()
 * por Classe: getElementsByClassName()
 * por Seletor: querySelector() 
 * ` ` ao invés de " " quando tiver que quebrar um texto pra formatar o código bem 
 fofolete se estiver trabalhando com 'String'
*/

/* 'window.document.querySelector(#nome)' é outra forma de fazer a variável abaixo,
 * chamando algo qualquer (classe, id ou outro atributo), mais usada.
 * 'window' não é necessário para a síntaxe desta função. 
*/

/* Usando essa variável para manipular o input de 'nome' */

var nome = window.document.getElementById("nome")
nome.style.width = '380px'

var nomeOk = false
/* 'boolean' que começa sem nada(false) e/ou inválido. */

var email = window.document.querySelector("#email")
email.style.width = '380px'

var emailOk = false

var assunto = window.document.querySelector("#assunto")
var assuntoOk = false

var mapa = document.querySelector("#mapa")

/* Primeira validação fofolete que é se colocou o nome certo ou não. */
function validarNome() {
    let txtNome = document.querySelector("#txtNome")

    if(nome.value.length < 2) {
        /* 'innerHTML' transforma uma tag em texto, neste caso, a 'div' */
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else if(nome.value.length >= 2){
        txtNome.innerHTML = "Belo nome!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
    else if(nome.value.length < 1){
        txtNome.innerHTML = "Insira algo"
        nomeOk = false
    }
}

/* Validando o e-mail inserido pelo usuário através de caracteres inseridos. */
function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = 'red'
        emailOk = false
    }
    else if (email.value.length < 1){
        txtEmail.innerHTML = "Insira algo"
        emailOk = false
    }
    else {
        txtEmail.innerHTML = "E-mail fofolete!"
        txtEmail.style.color = 'green'
        emailOk = true
    }
    
}

function validarAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length <= 4) {
        txtAssunto.innerHTML = "Detalha mais esse assunto aí (Min 5 caracteres)!"
        txtAssunto.style.color = 'red'
        assuntoOk = false
    }
    else if(assunto.value.length >= 5 && assunto.value.length < 100){
        txtAssunto.innerHTML = "Esse assunto é importante!"
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
    else if(assunto.value.length >= 100){
        txtAssunto.innerHTML = `Tá me escrevendo um livro? Detalha menos isso daí! 
                                                              (Max 100 caracteres)`
        txtAssunto.style.color = 'orange'
        assuntoOk = false
    }
    else if(assunto.value.length < 1) {
        txtAssunto.innerHTML = "Insira algo"
        assuntoOk = false
    }
}

/* Validando a função acima pra mandar um alerta se não houver nome, assunto 
 * ou e-mail ou se um deles for inválido. */
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("CAIU NO CONTO!")
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
    else if(nomeOk == false && emailOk == true && assuntoOk == true){
        alert("Mensagem não enviada! Preencha o seu nome corretamente antes!")
    }
    else if(nomeOk == true && emailOk == false && assuntoOk == true) {
        alert("Mensagem não enviada! Preencha o seu e-mail corretamente antes!")
    }
    else if(nomeOk == true && emailOk == true && assuntoOk == false) {
        alert("Mensagem não enviada! Detalha esse assunto melhor antes!")
    }
    else if(nomeOk == false && emailOk == false && assuntoOk == true) {
        alert("Mensagem não enviada! Preencha o seu nome e e-mail corretamente antes!")
    }
    else if(nomeOk == true && emailOk == false && assuntoOk == false) {
        alert("Mensagem não enviada! Preencha o seu e-mail corretamente e detalha esse assunto antes!")
    }
    else if(nomeOk == false && emailOk == true && assuntoOk == false) {
        alert("Mensagem não enviada! Preencha o seu nome corretamente e detalha esse assunto antes!")
    }
    else {
        alert("Mensagem não enviada! Preencha seu e-mail e nome corretamente e detalha esse assunto aí!")
    }
}

function mapaZoom() {
    mapa.style.width  = '800px'
    mapa.style.height = '600px'
 }
 
 function mapaNormal() {
    mapa.style.width  = '575px'
    mapa.style.height = '475px'
 }