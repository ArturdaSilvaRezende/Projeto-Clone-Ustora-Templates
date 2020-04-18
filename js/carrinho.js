/**
 * Projeto Ustora Clone versão 1.1
 * @author Artur da Silva Rezende
 */

 //O bloco de código abaixo faz o calculo do total da quantidade dos produtos na tabela do arquivo (carrinho.html)

(function calc_total() {

    const table_produto = document.querySelector(".table-produtos");
    table_produto.addEventListener("input", calc_total);

    const qtd = Number(document.querySelector(".cQtd").value.replace(",", "."));
    tot = qtd * 1999,99;
    document.querySelector(".total").value = "R$ " + tot;
})();


$(function(){

    $('.cQtd').niceNumber();
  
});
