// Galeria de imagens

$(document).ready(function () {
    $('.card img').click(function () {
        $('.bg').animate({ 'opacity': '.6' }, 300, 'linear');
        $('.bg, .lb').css('display', 'block');

        var big = $(this).attr('src');

        $('.lb img').attr('src', big);
        $('.lb img').animate({ 'opacity': '1' }, 600, 'linear');
    });

    $('.close').click(function () {
        $('.bg, .lb').css('display', 'none');
        $('.lb img').css('opacity', '0');
    });

    $(document).mouseup(function (e) {
        var container = $('.lb');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
            $('.bg, .lb').css('display', 'none');
            $('.lb img').css('opacity', '0');
        }
    });
});