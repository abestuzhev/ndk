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

// function RSGOPRO_SetHeight(obj)
// {
//     setTimeout(function(){
//         // reset
//         $('.mainsections').find('obj').css('minHeight',0);
//         // in line
//         var position = $('obj').find('li.section:first').offset().top;
//         var last_index = 0;
//         var max_height = 0;
//         $('.mainsections').find('obj').each(function(i){
//             if( $(this).offset().top!=position )
//             {
//                 if(last_index>0)
//                 {
//                     $('.mainsections').find('obj:lt('+(i)+'):gt('+last_index+')').css('minHeight',max_height);
//                 } else {
//                     $('.mainsections').find('obj:lt('+(i)+')').css('minHeight',max_height);
//                 }
//                 last_index = (i-1);
//                 position = $(this).offset().top;
//                 max_height = $(this).outerHeight(true)+2;
//             } else {
//                 if( $(this).outerHeight(true)>max_height )
//                     max_height = $(this).outerHeight(true)+2;
//             }
//         });
//         if(last_index>0)
//             $('.mainsections').find('obj:gt('+last_index+')').css('minHeight',max_height);
//         else
//             $('.mainsections').find('obj').css('minHeight',max_height);
//     },100);
// }
//
// $(document).ready(function(){
//     RSGOPRO_SetHeight(li.section);
//     RSGOPRO_SetHeight(div.section-layout);
//     $(window).bind('resize', RSGOPRO_SetHeight);
//
//     $(window).load(function(){
//         RSGOPRO_SetHeight(li.section);
//         RSGOPRO_SetHeight(div.section-layout);
//
//         setTimeout(function(){ // fix for slow shit
//             RSGOPRO_SetHeight(li.section);
//             RSGOPRO_SetHeight(div.section-layout);
//         },50);
//     });
// });