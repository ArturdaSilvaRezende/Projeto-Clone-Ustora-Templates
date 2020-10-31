(function voltar_top() {

    const back_top = document.querySelector(".btn-voltar-top");
    back_top.addEventListener("click", backToTop);

    window.onscroll = function () {
        scrool();
    }

    function scrool() {
        if (document.documentElement.scrollTop > 300) {
            back_top.style.opacity = '1';
        } else {
            back_top.style.opacity = '0';
        }
    }

    function backToTop() {
        document.documentElement.scrollTop = 0;
    }

})();