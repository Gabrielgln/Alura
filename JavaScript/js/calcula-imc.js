//"document" é a ponta que permite o js acessar os dados do html
console.log(document);
//"var" é uma varivel que salva dados do tipo html também
//"querySelector" é a função que permite filtrar o dado html que deseja buscar (e só tras 1 elemento)
var titulo = document.querySelector(".titulo");
//as tags que tem conteudo de texto, para pegar o texto utilizamos textContent
titulo.textContent = "Aparecida Nutricionista";
//paciente vai receber o primeiro paciente da lista
var paciente = document.querySelector("#primeiro-paciente");
//"querySelectorAll" é a função que pega todos os elementos que tenha a mesma classe ou id
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length; i++){
    //paciente vai receber cada paciente por vez de cada linha (tr)
    var paciente = pacientes[i]
    //para acessar as (td) do (tr), eu uso a variavel que contem o tr "paciente+queryselector"
    var tdPeso = paciente.querySelector(".info-peso");
    //pegando o texto que está na varivel tdPeso que pegou do html
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //validação do imc
    //------------------------------------------------------------------------
    var pesoValido = validaPeso(peso); //true ou false
    var alturaValida = validaAltura(altura); //true ou false
    var tdImc = paciente.querySelector(".info-imc"); //a variavel tdImc vai pegar o campo do html que tem o imc

    if(!pesoValido){
        pesoValido = false; //se o peso não for valido, recebe "false"
        tdImc.textContent = "Peso inválido"; // atribuindo o dado para esse elemento

        //adicionando uma nova classe nessa (tr), que serve para o css reconhecer e aplicar estilos
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        alturaValida = false; //se o peso não for valido, recebe "false"
        tdImc.textContent = "Altura inválida"; //atribuindo o dado para esse elemento

        //adicionando uma nova classe nessa (tr), que serve para o css reconhecer e aplicar estilos gerais
        paciente.classList.add("paciente-invalido");
        
    }

    //se o peso e altura for valido
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura); //usando a função para calcular o imc
        tdImc.textContent = imc; //para exibir o valor do imc no campo da lista que é referente ao imc
    }
    //------------------------------------------------------------------------
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }
    else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    //definir só duas casas decimais para o imc
    return imc.toFixed(2);
}

    




