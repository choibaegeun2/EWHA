$(function () {
    $('.site-wrap').on('click', 'a', function () {
        $('a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    var subMenu = $(".gnb-wrap .gnb .gnb-ul li .sub-box, .gnb-wrap .gnb .gnb-ul li .gnb-bg");
    $(".gnb-wrap .gnb .gnb-ul .menu").on({
        mouseenter: function () {
            subMenu.stop();
            subMenu.css("display", "none");
            $(this).find('.sub-box, .gnb-bg').slideDown(300);
        },
        mouseleave: function () {
            subMenu.stop();
            subMenu.slideUp(300);
        },
    });
});

$(document).ready(function () {
    $('.top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    })
});


