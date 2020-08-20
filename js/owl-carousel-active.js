//O bloco de código abaixo faz o controle dos slides da área de produtos mais recentes do arquivo (index.html)

$(document).ready(function () {

    var owl = $('.produtos-recentes-carousel');

    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        slideTransition: 'linear',
        responsive: {

             //da width de 0px até 600px vai mostrar somente 1
            0: {
                items: 1
            },

            //da width de 600px até 900px vai mostrar somente 2
            600: {
                items: 2
            },

            //da width 900px até 1200px eu quero que mostre somente 3
            900: {
                items: 3
            },

            //chegando em 1200px irar mostrar 4 conforme foi previsto antes
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

//O bloco de código abaixo faz o controle dos slides da área das marcas dos produtos do arquivo (index.html)

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

            //da width de 0px até 600px vai mostrar somente 1
            0: {
                items: 1
            },

            //da width de 600px até 900px vai mostrar somente 2
            600: {
                items: 2
            },

            //da width 900px até 1200px eu quero que mostre somente 3
            900: {
                items: 3
            },

            //chegando em 1200px irar mostrar 4 conforme foi previsto antes
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

//O bloco de código abaixo faz o controle dos slides do carousel do arquivo (produtos-unicos.html)

$(document).ready(function () {

    var owl = $('.produtos-recomendados-carousel');

    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        slideTransition: 'linear',
        responsive: {

             //da width de 0px até 600px vai mostrar somente 1
            0: {
                items: 1
            },

            //da width de 600px até 900px vai mostrar somente 2
            600: {
                items: 2
            },

             //da width 900px até 1200px eu quero que mostre somente 3
            900: {
                items: 3
            },

            //chegando em 1200px irar mostrar 4 conforme foi previsto antes
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