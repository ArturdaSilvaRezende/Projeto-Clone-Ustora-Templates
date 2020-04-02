//O bloco de código abaixo faz o controle de slides da área de produtos mais recentes

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

//O bloco de código abaixo faz o controle de slides da área das marcas dos produtos

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