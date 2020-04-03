/**
 * Projeto Ustora Clone versão 1.1
 * @author Artur da Silva Rezende
 */

//O bloco de código abaixo controla o efeito hover na box carrinho de compras do header

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

//O bloco de código abaixo controla o show e hide do 'calcular remessa' do arquivo (carrinho.html)

$(document).ready(function(){

    var calc_remessa = $('.title-remessa');
    $('.area-remessa').css('display', 'none');

    calc_remessa.click(function(){
        $('.area-remessa').slideToggle(1000);
        return false;
    });

});

//O bloco de código abaixo controla a mudança de imagem do container 'single-product-container' do arquivo produtis-unicos.html

$(document).ready(function(){

    
    var img_main = $('.img-main');
    var img_galery_01 = $('.img-galery-01');
    var img_galery_02 = $('.img-galery-02');
    var img_galery_03 = $('.img-galery-03');
    var img_galery_04 = $('.img-galery-04');
    
    //img-galery-01
    img_galery_01.mouseenter(function(){
        img_main.attr('src', '../img/iphone11-a.jpg');
    });

    img_galery_01.mouseleave(function(){
        img_main.attr('src', '../img/iphone-11-pro-no-white.png');
    });

    //img-galery-02
    img_galery_02.mouseenter(function(){
        img_main.attr('src', '../img/iphone11-b.jpg');
    });

    img_galery_02.mouseleave(function(){
        img_main.attr('src', '../img/iphone-11-pro-no-white.png')
    });

    //img-galery-03
    img_galery_03.mouseenter(function(){
        img_main.attr('src', '../img/iphone11-c.jpg');
    });

    img_galery_03.mouseleave(function(){
        img_main.attr('src', '../img/iphone-11-pro-no-white.png')
    });

     //img-galery-04
     img_galery_04.mouseenter(function(){
        img_main.attr('src', '../img/iphone11-d.jpg');
    });

    img_galery_04.mouseleave(function(){
        img_main.attr('src', '../img/iphone-11-pro-no-white.png')
    });
    
});

