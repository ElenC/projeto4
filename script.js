/*function cadFunc(itemform){

    if (itemform.nomeFun.value == ""){
        alert("Digite seu nome")
        return false
    }
    if(itemform.dataNasc.value == ""){
        alert("Digite seu CPF")
        return false
    }
    if(itemform.est_civil.value == ""){
        alert("Estado Cívil Inválido")
    }
    return true
}*/
/*
const nome = document.getElementById('nomeFun')
const nascimento = document.getElementById('dataNasc')
const btn = document.getElementById('submit')

btn.addEventListener('click', function(){
    if(nome.checked && !nascimento.checked){
        alert('Data Nascimento Invalido')
        return
    }
    
})*/

function validForm(){
    var nome  = document.forms["work_us"]["nomeFun"].value
    var nascimento  = document.forms["work_us"]["dataNasc"].value
    var estCivil  = document.forms["work_us"]["est_civil"].value
    var cpf  = document.forms["work_us"]["cpf"].value
    var rg  = document.forms["work_us"]["rg"].value
    var cnh  = document.forms["work_us"]["cnh-tipo"].value
    var cep  = document.forms["work_us"]["cep"].value
    var rua  = document.forms["work_us"]["rua"].value
    var num  = document.forms["work_us"]["numero"].value
    var compl  = document.forms["work_us"]["complement"].value
    var bairro  = document.forms["work_us"]["bairro"].value
    var city  = document.forms["work_us"]["city"].value
    var uf  = document.forms["work_us"]["estado"].value

    if(nome == ""){
        alert('Nome Inválido')
        return false
    }
    if(nascimento == "" || nascimento.length < 9){
        alert('Data de Nascimento Inválido ou Incompleto!')
        return false
    }
    if(estCivil == ""){
        alert ('Estado Cívil Inválido')
        return false
    }
    if(cpf == "" || cpf.length < 13){
        alert('CPF inválido ou incompleto')
        return false
    }
    if(rg == "" || rg.length < 11){
        alert("RG inválido ou incompleto")
        return false
    }
    if(cnh == "" || cnh.length != 1 ){
        alert('CNH inválido ou incompleto')
        return false
    }
    if(cep == "" || cep.length < 9){
        alert('CEP inválido ou incompleto')
        return false
    }
    if(rua == ""){
        alert('Rua inválida')
        return false
    }
    if(num == "" || num.length < 2){
        alert('Número inválido ou incompleto')
        return false
    }
    if(compl == ""){
        alert('Complemento inválido')
        return false
    }
    if(bairro == ""){
        alert('Bairro inválido')
        return false
    }
    if(city == ""){
        alert('Cidade inválida')
        return false
    }
    if(uf == ""){
        alert('Estado inválido')
        return false
    }
}
