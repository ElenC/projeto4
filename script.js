document.getElementById('submit').addEventListener('click', function () {
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("CAMPOS FALTANDO")
    }
})

function validForm(element) {
    var nome = document.forms["work_us"]["nomeFun"].value
    var nascimento = document.forms["work_us"]["dataNasc"].value
    var estCivil = document.forms["work_us"]["est_civil"].value
    var cpf = document.forms["work_us"]["cpf"].value
    var rg = document.forms["work_us"]["rg"].value
    var cnh = document.forms["work_us"]["cnh-tipo"].value
    var cep = document.forms["work_us"]["cep"].value
    var rua = document.forms["work_us"]["rua"].value
    var num = document.forms["work_us"]["numero"].value
    var compl = document.forms["work_us"]["complement"].value
    var bairro = document.forms["work_us"]["bairro"].value
    var city = document.forms["work_us"]["city"].value
    var uf = document.forms["work_us"]["estado"].value


    if (nome == "") {
        alert('Nome inválido')
        return false
    }
    if (nascimento == "" || nascimento.length < 10) {
        alert('Data de nascimento inválido ou incompleto')
        return false
    }
    if (estCivil.selectedIndex = 0) {
        alert('Estado Cívil Inválido')
        return false
    }
    if (cpf == "" || cpf.length < 14) {
        alert('CPF inválido ou incompleto')
        return false
    }
    if (rg == "" || rg.length < 12) {
        alert("RG inválido ou incompleto")
        return false
    }
    if (cnh == "") {
        alert('CNH inválido')
        return false
    }
    if (cep == "" || cep.length < 10) {
        alert('CEP inválido ou incompleto')
        return false
    }
    if (rua == "") {
        alert('Rua inválida')
        return false
    }
    if (num == "" || num.length < 2) {
        alert('Número inválido ou incompleto')
        return false
    }
    if (compl == "") {
        alert('Complemento inválido')
        return false
    }
    if (bairro == "") {
        alert('Bairro inválido')
        return false
    }
    if (city == "") {
        alert('Cidade inválida')
        return false
    }
    if (uf.selectedIndex = 0) {
        alert('Estado inválido')
        return false
    }
}


function getComplCep(cep){

    let x = new XMLHttpRequest

    x.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/unicode', true)

    x.onreadystatechange = function(){
        if(x.readyState == 4 && x.status ==200){
            let dadosJSONText = x.responseText
            let dadosJSONObj = JSON.parse(dadosJSONText)

            document.getElementById('rua').value = dadosJSONObj.logradouro
            document.getElementById('bairro').value = dadosJSONObj.bairro
            document.getElementById('city').value = dadosJSONObj.localidade
            document.getElementById('estado').value = dadosJSONObj.uf
            
        }
    }

    x.send()
}

function saveC(){

    
    const nome = document.getElementById('nomeFun')
    const nascimento = document.getElementById('dataNasc')
    const estCivil = document.getElementById('est_civil')
    const cpf = document.getElementById('cpf')
    const rg = document.getElementById('rg')
    const cnh = document.getElementById('cnh-tipo')
    const cep = document.getElementById('cep')
    const rua = document.getElementById('rua')
    const num = document.getElementById('numero')
    const compl = document.getElementById('complement')
    const bairro = document.getElementById('bairro')
    const city = document.getElementById('city')
    const uf = document.getElementById('estado')

  
   const saveF = {
       nome: nome.value,
       CPF: cpf.value,
       RG: rg.value,
       data_nasc: nascimento.value,
       tipo_cnh: cnh.value,
       estado_civil: estCivil.value,
       CEP: cep.value,
       rua: rua.value,
       bairro: bairro.value,
       cidade: city.value,
       estado: uf.value,
       numero: num.value,
       complemento: compl.value
   };
   

   var form_json = JSON.stringify(saveF);

   const req = new XMLHttpRequest();

   req.open('POST', 'https://beginner-api.herokuapp.com/save', false);

   req.setRequestHeader('Content-Type', 'application/json');
  
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var saveJson = JSON.parse(req.responseText)
            if(saveJson.Sucesso != undefined){
                alert('Cadastrado Realizado')
            }else{
                alert('ERRO! Tente Novamente..')
            }
        
        }
    }
    req.send(form_json);
}