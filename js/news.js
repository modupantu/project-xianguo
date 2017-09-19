$(function () {
    $('.newsBorder li').click(function () {
        var $_li = $(this).index();
        $('.new_article').css({
            display: 'block'
        });
        $('.article_content .wenZhang').eq($_li).css({
            display: 'block'
        });
        $('.newClose img').click(function () {
            $('.new_article').css({
                display: 'none'
            });
            $('.article_content .wenZhang').eq($_li).css({
                display: 'none'
            });
        });
    });
});