
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//adicionando um escutador para essa variavel
botaoAdicionar.addEventListener("click",function(event){
    
    event.preventDefault() //previne o comportamento padrão, para poder dá as intruções da função
    
    //pegando o form do html que contem as informações preenchidas pelo usuario
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form); //pegando os valores do form preenchido pelo usuario
    
    var erros = validaPaciente(paciente); //validação do paciente

    //se tiver alguma coisa no erros, exibir os erros
    if(erros.length > 0){
        exibeMensagensErro(erros); // função para exibir as mensagens de erro com span
        return; // return para sair da função
    }

    adicionaPacienteNaTabela(paciente); // função para adicionar o paciente na tabela, passando o paciente
    
    form.reset(); //limpando o form
    
    var ul = document.querySelector("#mensagens-erro"); //pegando a ul que contem as mensagens de erro
    ul.innerHTML = ""; //limpando as mensagens de erro apos incluir o paciente
    
});

function obtemPacienteDoFormulario(form){
    //criando um objeto do tipo paciente:
    var paciente = {
        //acessando o form, pegando o name do "input", para atribuir o "value" desse "input" no atributo do objeto
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function adicionaPacienteNaTabela(paciente){
    //montando uma tr para novo paciente
    var pacienteTr = montaTr(paciente);
    //pegando a tabela com o id "tabela-pacientes"
    var tabela = document.querySelector("#tabela-pacientes");
    //adicionando o pacienteTr na tabela
    tabela.appendChild(pacienteTr);

}

function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr"); //criando uma tag do tipo linha (tr)
    pacienteTr.classList.add("paciente"); //adicionando a classe paciente para essa linha (tr)

    //monta a td passando o "dado" e "classe"
    var nomeTd = montaTd(paciente.nome,"info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso")
    var alturaTd = montaTd(paciente.altura,"info-altura")
    var gorduraTd = montaTd(paciente.gordura,"info-gordura")
    var imcTd = montaTd(paciente.imc,"info-imc")
    var excluirTd = montaTd2("X","info-excluir","botao-excluir");

    //adicionando esses dados (td) na linha (tr)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    pacienteTr.appendChild(excluirTd);

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td"); //criando um tag do tipo "td"
    td.textContent = dado; //atribuindo dado para essa "td"
    td.classList.add(classe); //adicionando a classe dessa "td"

    return td;
}

function montaTd2(dado,classeTd,classeButton){
    var button = document.createElement("button"); //criando uma tag do tipo "button"
    var div = document.createElement("div"); //criando uma tag do tipo "div"
    var td = document.createElement("td"); //criando uma tag do tipo "td"

    button.classList.add(classeButton); //adicionando uma classe para o botão
    button.onclick = excluirPaciente; //adicionando uma função para esse botão
    button.textContent = dado; //adicionando dado para esse botão

    td.classList.add(classeTd); //adicionando uma classe para a td
    div.appendChild(button); //colocando a tag "button" dentro da tag "div"
    td.appendChild(div); //colocando a tag "div" dentro da tag "td"
    
    return td;
}

function validaPaciente(paciente){

    var erros = []; //criando uma lista vazia de erros

    //verificando se tem alguma string no nome do paciente
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!")
    }
    //verificando se tem alguma string no peso do paciente
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco!")
    }
    //verificando se tem alguma string na altura do paciente
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco!")
    }
    //verificando se tem alguma string na gordura do paciente
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!")
    }
    //----------------------------------------------------------------------------------
    if(!validaPeso(paciente.peso)){ // se o peso "NÃO" for valido, ex: -1000
        erros.push("Peso é invalido!");
    }
    
    if(!validaAltura(paciente.altura)){ //se a altura "NÃO" for valido, ex: 4.00
        erros.push("Altura é invalida!");
    }

    return erros;
}

function exibeMensagensErro(erros){
    
    var ul = document.querySelector("#mensagens-erro"); //pega a ul referente as mensagens de erro
    ul.innerHTML = ""; //limpar a "ul" antes de incluir as "li" com erros

    for(var i = 0; i < erros.length; i++)
    {
        var li = document.createElement("li"); //criando uma li
        li.textContent = erros[i]; //atribuindo valor para essa li
        ul.appendChild(li); //colocando a li dentro da ul
    }
}
//função utilizando o conceito bolha do js
function excluirPaciente(){
    var alvo = this; // this é a tag que chamou a função
    var paiDoAlvo = alvo.parentNode; // para pegar o pai do this usamos "parentNode"
    var avoDoAlvo = paiDoAlvo.parentNode; // e assim até o valor que queremos tratar
    var bisavoDoAlvo = avoDoAlvo.parentNode;
    console.log(bisavoDoAlvo);
    bisavoDoAlvo.remove();
}