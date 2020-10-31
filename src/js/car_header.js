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