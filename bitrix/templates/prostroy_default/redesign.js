$(document).ready(function(){

    $('.delivery-tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.delivery-tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('.product-tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.product-tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})