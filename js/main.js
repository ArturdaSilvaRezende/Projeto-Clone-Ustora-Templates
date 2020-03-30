/**
 * Projeto Ustora Clone versão 1.1
 * @author Artur da Silva Rezende
 */

//A estrutura abaixo controla o efeito hover na box carrinho de compras do header

function cart_efeito_hover() {

    var area_cart = $('.area-cart'); //Essa variável manipula o container do carrinho
    var area_cart_link = $('.card-link'); //Essa variável manipula o link dentro do h4
    var area_cart_span = $('.card-span'); //Essa variável manipula o span dentro do link do h4
    var area_cart_circle = $('.circle'); //Essa variável manipula a área dos pedidos (circle)

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

}

cart_efeito_hover();

//A estrutura abaixo faz o controle de slides da área de produtos mais recentes

$(document).ready(function () {

    var owl = $('.produtos-recentes-carousel');

    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        slideTransition: 'linear',
        responsive: {

            //de 0 até 600 eu quero que mostre somente 1
            0: {
                items: 1
            },

            //de 600 até 900 eu quero que mostre somente 2
            600: {
                items: 2
            },

            //de 900 até 1200 eu quero que mostre somente 3
            900: {
                items: 3
            },

            //chegando em 1200 irar mostrar 4 conforme foi previsto antes
            1200: {
                items: 4
            }

        },

    });

    $('#btn-anterior').on('click', function () {
        owl.trigger('prev.owl.carousel');
    });

    $('#btn-proximo').on('click', function () {
        owl.trigger('next.owl.carousel');
    });

});

//A estrutura abaixo faz o controle de slides da área das marcas dos produtos

$(document).ready(function () {

    var owl = $('.carousel-marcas');

    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        slideTransition: 'linear',
        responsive: {

            //de 0 até 600 eu quero que mostre somente 1
            0: {
                items: 1
            },

            //de 600 até 900 eu quero que mostre somente 2
            600: {
                items: 2
            },

            //de 900 até 1200 eu quero que mostre somente 3
            900: {
                items: 3
            },

            //chegando em 1200 irar mostrar 4 conforme foi previsto antes
            1200: {
                items: 4
            }

        },

    });

    $('.btn-prev').on('click', function () {
        owl.trigger('prev.owl.carousel');
    });

    $('.btn-next').on('click', function () {
        owl.trigger('next.owl.carousel');
    });

});


//O bloco de código abaixo faz o calculo do total da quantidade dos produtos na tabela (carrinho.html)

function calc_total() {

    var table_produto = document.querySelector(".table-produtos");
    table_produto.addEventListener("input", calc_total);

    var qtd = Number(document.querySelector(".cQtd").value.replace(",", "."));
    tot = qtd * 2999, 99;
    document.querySelector(".total").value = "R$ " + tot;
}

calc_total();

$(document).ready(function(){

    var calc_remessa = $('.title-remessa');
    $('.area-remessa').css('display', 'none');

    calc_remessa.click(function(){
        $('.area-remessa').slideToggle(1000);
    });

});