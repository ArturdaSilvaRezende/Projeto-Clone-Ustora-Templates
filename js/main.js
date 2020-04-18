/**
 * Projeto Ustora Clone versão 1.1
 * @author Artur da Silva Rezende
 */

//O bloco de código abaixo controla o efeito hover na box carrinho de compras do header

(function cart_efeito_hover() {

    const area_cart = $('.area-cart'); //Essa variável manipula o container do carrinho
    const area_cart_link = $('.card-link'); //Essa variável manipula o link dentro do h4
    const area_cart_span = $('.card-span'); //Essa variável manipula o span dentro do link do h4
    const area_cart_circle = $('.circle'); //Essa variável manipula a área dos pedidos (circle)

    area_cart.mouseenter(function () {
        $(this).css('background-color', '#5a88ca');
        $(this).css('transition', 'all 1s');
        $(area_cart_link).css('color', '#fff').css('textDecoration', 'none');
        $(area_cart_span).css('color', '#fff');
        $(area_cart_circle).css('background-color', '#000');
    });

    area_cart.mouseleave(function () {
        $(this).css('background-color', '#fff');
        $(this).css('transition', 'all 1s');
        $(area_cart_link).css('color', '#439943').css('textDecoration', 'underline');
        $(area_cart_span).css('color', '#5a88ca');
        $(area_cart_circle).css('background-color', '#5a88ca');
    });

})();

//O bloco de código abaixo controla o show e hide do 'calcular remessa' do arquivo (carrinho.html)

$(document).ready(function () {

    const calc_remessa = $('.title-remessa');

    $('.area-remessa').css('display', 'none');

    calc_remessa.click(function () {
        $('.area-remessa').slideToggle(1000);
        return false;
    });

});

//O bloco de código abaixo controla a mudança de imagem do container 'single-product-container' do arquivo produtis-unicos.html

(function galeria_imagens() {

    const img_main = document.querySelector(".img-main");
    const img_galery_01 = document.querySelector(".img-galery-01");
    const img_galery_02 = document.querySelector(".img-galery-02");
    const img_galery_03 = document.querySelector(".img-galery-03");
    const img_galery_04 = document.querySelector(".img-galery-04");

    img_galery_01.addEventListener("mouseenter", troca_imagem_1);
    img_galery_01.addEventListener("mouseout", troca_imagem_main);

    img_galery_02.addEventListener("mouseenter", troca_imagem_2);
    img_galery_02.addEventListener("mouseout", troca_imagem_main);

    img_galery_03.addEventListener("mouseenter", troca_imagem_3);
    img_galery_03.addEventListener("mouseout", troca_imagem_main);

    img_galery_04.addEventListener("mouseenter", troca_imagem_4);
    img_galery_04.addEventListener("mouseout", troca_imagem_main);

    function troca_imagem_1() {
        img_main.src = 'img/iphone11-a.jpg';
    }

    function troca_imagem_2() {
        img_main.src = 'img/iphone11-b.jpg';
    }

    function troca_imagem_3() {
        img_main.src = 'img/iphone11-c.jpg';
    }

    function troca_imagem_4() {
        img_main.src = 'img/iphone11-d.jpg';
    }

    function troca_imagem_main() {
        img_main.src = 'img/iphone-11-pro-no-white.png';
    }

})();

// A function abaixo ativa o plugin jquery nice number do arquivo produtos-unicos.html
$(function(){

    $('input[type="number"]').niceNumber();
  
});



