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

//A estrutura abaixo faz o controle do modal de login

($(document).ready(function(){

    const login_ustora = $('.login-ustora');
    const modal_content = $('.modal-login');
    const btn_closer_modal = $('.btn-closer, .btn-fechar');

    login_ustora.click(function(e){
        e.stopPropagation();
        modal_content.fadeIn(1000);
    })

    btn_closer_modal.click(function(){
        modal_content.fadeOut(1000);
    })

}));

//A estrutura abaixo faz o controle do scrool do botão voltar ao top

(function voltar_top(){

    const back_top = document.querySelector(".btn-voltar-top");
    const back_top_mensseger = document.querySelector(".back_top_mensseger")

    back_top.addEventListener("mouseenter", open_mensseger);
    back_top.addEventListener("mouseout", close_mensseger);
    back_top.addEventListener("click", backToTop);

    window.onscroll = function() {
        scrool();
    }

    function open_mensseger() {
        back_top_mensseger.style.opacity = '1';
    }

    function close_mensseger() {
        back_top_mensseger.style.opacity = '0';
    }

    function scrool() {
        if(document.documentElement.scrollTop > 300) {
            back_top.style.opacity = '1';
        } else {
            back_top.style.opacity = '0';
        }
    }

    function backToTop(){
        document.documentElement.scrollTop = 0;
    }

})();