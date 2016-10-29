
; /* Start:"a:4:{s:4:"full";s:102:"/bitrix/templates/prostroy_default/components/bitrix/sale.basket.basket/gopro/script.js?14756748891152";s:6:"source";s:87:"/bitrix/templates/prostroy_default/components/bitrix/sale.basket.basket/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_BasketTimeoutID = 0;

$(document).ready(function(){
	
	$(document).on('click','.clearitems',function(){
		$('.js-element .checkbox input').each(function(){
			$(this).removeAttr("checked");
		});
		$(this).parents('.part').find('label').trigger('click');
		$(this).parents('form').find('.hiddensubmit').trigger('click');
		return false;
	});

	$(document).on('click','.clearsolo',function(){
		$(this).parents('form').find('.hiddensubmit').trigger('click');
		return false;
	});
	
	$(document).on('submit','#basket_form',function(){
		$('html').addClass('hidedefaultwaitwindow');
		RSGoPro_Area2Darken( $('#basket_form'), 'animashka' );
	});
	$(document).on('click','#basket_form a.delay, #basket_form a.delete, #basket_form a.add',function(){
		$('html').addClass('hidedefaultwaitwindow');
		RSGoPro_Area2Darken( $('#basket_form'), 'animashka' );
	});
	
	$(document).on('click','#basket_form .js-plus, #basket_form .js-minus',function(){
		var $link = $(this);
		clearTimeout(RSGoPro_BasketTimeoutID);
		RSGoPro_BasketTimeoutID = setTimeout(function(){
			$link.parents('form').find('.hiddensubmit').trigger('click');
		},1200);
	});
	
});
/* End */
;; /* /bitrix/templates/prostroy_default/components/bitrix/sale.basket.basket/gopro/script.js?14756748891152*/
