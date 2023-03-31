//pega a tag que contem o input com a classe dele
var campoFiltro = document.querySelector("#filtrar-tabela");
//adicionando um evento do tipo "digitando"
campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente"); // pegandos todos os pacientes pela classe

    if(campoFiltro.value.length > 0){ //se tem algo digitado
        for(var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i]; //paciente vai receber todos os pacientes por vez

            //com o paciente da vez, acesse o nome desse paciente
            var tdNome = paciente.querySelector(".info-nome"); 
            var nome = tdNome.textContent; //varivel vai receber o nome do paciente da vez

            // RegExp recebe o 2 dados| 1 - o que você quer q busque e, 2 - se "sensitive" ou "insensitive"
            // o "i" significa que ele vai buscar tanto maiusculo como minusculo
            var expressao = new RegExp(campoFiltro.value,"i"); 

            // vai testar se tem pelo menos um dado do filtro no "nome"
            // se não achar - esconde
            if(!expressao.test(nome)){
                //se for diferente, esconde esse paciente
                paciente.classList.add("invisivel");
            }
            else{
                //se for igual, retira  a classe que esconde o paciente
                paciente.classList.remove("invisivel");
            }
        }
    }
    else{ // se não tem nada digitado
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; // pega todos os pacientes por vez
            paciente.classList.remove("invisivel") // retira a classe que esconde o cada paciente
        }
    }
});