var tabela = document.querySelector("table")


tabela.addEventListener("dblclick",function(event){
    //event do parametro serve como um objeto da variavel "tabela"

    var alvoDoEvento = event.target; //TD - pegar o alvo (target) do objeto
    var paiDoAlvoDoEvento = alvoDoEvento.parentNode; //TR - pegar o pai (parentNode) do alvo
    paiDoAlvoDoEvento.classList.add("fadeOut"); //adicionando classe que dá efeito para remoção
   
    setTimeout(function(){
        paiDoAlvoDoEvento.remove(); //remover o pai do alvo depois terminar o efeito
    },500); //500 == 0.5s
    
});
