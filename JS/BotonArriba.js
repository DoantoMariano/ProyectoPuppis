$(document).ready(function() {

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '650rem'
        }, 800);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 650) {
            $('.ir-arriba').slideDown(500);
        } else {
            $('.ir-arriba').slideUp(500);
        }
    });

});