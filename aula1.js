/*
function Clicar() {

    if (document.body.style.background === "rgb(210, 142, 25)" || document.body.style.background === "") {
        document.body.style.background = "#143d59";
        document.body.style.color = "white"; 

       // Dentro da função Clicar, depois de mudar a cor de fundo e a cor do cabeçalho, usamos localStorage.setItem para salvar a cor do fundo e a cor do cabeçalho.

        localStorage.setItem('backgroundColor', "#143d59");

    } else {
        document.body.style.background = "#d28e19"; 
        document.body.style.color = "black";


        // Salvar a cor no armazenamento local  
        localStorage.setItem('backgroundColor', "#d28e19");
    }
}


//A função window.onload é utilizada para recuperar as cores do armazenamento local assim que a página é carregada. 
//Se as cores estiverem salvas, elas são aplicadas ao corpo e ao cabeçalho.
// Recuperar as cores do armazenamento local ao carregar a página
window.onload = function() {
    const telaOriginal = localStorage.getItem('backgroundColor');

    if (telaOriginal) {
        document.body.style.background = telaOriginal;
    }

}

