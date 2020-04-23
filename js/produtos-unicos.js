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