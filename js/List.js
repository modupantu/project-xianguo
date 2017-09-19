$(function(){
    $('.Select div').click(function(){
        var index=$(this).parent().index();
        $('.Select div').find('i').css({
            'background':'url("./images/list/jia.png") top/100% auto no-repeat'
        }); 
        $('.Select div').parent().children('li').slideUp();
        $(this).find('i').css({
            'background':'url("./images/list/jian.png") top/100% auto no-repeat'
        }); 
        $(this).parent().children('li').slideDown();
        $('.showNav div').eq(index).addClass('oneShow').siblings().removeClass('oneShow');
    });
    $('.Select').on('click',' ul>li',function(){
        var uls=$(this).parent().index();
        var lis=$(this).index()-1;
        $('.showNav ul').children('li').removeClass('oneShow');
        $('.showNav ul').eq(uls).children('li').eq(lis).addClass('oneShow');
    })
});