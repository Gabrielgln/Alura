var botaoAdicionar = document.querySelector("#adicionar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    //Objeto que faz requisições Http, que faz o transporte de dados
    var xmlHttpRequest = new XMLHttpRequest();
    
    //Função que abre a conexão, passa qual tipo de requisição "GET" e para qual endereço
    var enderecoHttp = "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json";
    xmlHttpRequest.open("GET", enderecoHttp);

    //Função para enviar requisição
    xmlHttpRequest.send();

    //escutador para quando a resposta for carregada
    xmlHttpRequest.addEventListener("load", function(){
        //pegando a tag que contem o span de erro para requisição
        var erroAjax = document.querySelector("#erro-ajax");

        //verificando se o request foi bem sucedida
        if(xmlHttpRequest.status == 200){
            //adicionando a classe do css que deixa a tag invisivel
            erroAjax.classList.add("invisivel");

            var resposta = xmlHttpRequest.responseText; //pegando a resposta carregada e guardando numa variavel

            var pacientes = JSON.parse(resposta); //convertendo a resposta "JSON" em um objeto JavaScript array

            //foreach passando paciente por paciente
            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente); //adicionando cada paciente na tabela
        });
        }else{
            //removendo a classe css que deixa invisivel para deixar a tag do span indicando que teve um erro
            erroAjax.classList.remove("invisivel");
        }
    });
    
});