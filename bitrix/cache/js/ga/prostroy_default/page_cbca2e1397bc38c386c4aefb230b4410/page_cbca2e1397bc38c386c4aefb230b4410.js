
; /* Start:"a:4:{s:4:"full";s:104:"/bitrix/templates/prostroy_default/components/bitrix/catalog.section.list/gopro/script.js?14756748891228";s:6:"source";s:89:"/bitrix/templates/prostroy_default/components/bitrix/catalog.section.list/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGOPRO_SetHeight()
{
	setTimeout(function(){
		// reset
		$('.sections').find('li.section').css('minHeight',0);
		// in line
		var position = $('.sections').find('li.section:first').offset().top;
		var last_index = 0;
		var max_height = 0;
		$('.sections').find('li.section').each(function(i){
			if( $(this).offset().top!=position )
			{
				if(last_index>0)
				{
					$('.sections').find('li.section:lt('+(i)+'):gt('+last_index+')').css('minHeight',max_height);
				} else {
					$('.sections').find('li.section:lt('+(i)+')').css('minHeight',max_height);
				}
				last_index = (i-1);
				position = $(this).offset().top;
				max_height = $(this).outerHeight(true)+2;
			} else {
				if( $(this).outerHeight(true)>max_height )
					max_height = $(this).outerHeight(true)+2;
			}
		});
		if(last_index>0)
			$('.sections').find('li.section:gt('+last_index+')').css('minHeight',max_height);
		else
			$('.sections').find('li.section').css('minHeight',max_height);
	},100);
}

$(document).ready(function(){
	RSGOPRO_SetHeight();
	$(window).bind('resize', RSGOPRO_SetHeight);
	
	$(window).load(function(){
		RSGOPRO_SetHeight();
		
		setTimeout(function(){ // fix for slow shit
			RSGOPRO_SetHeight();
		},50);
	});
});
/* End */
;; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.section.list/gopro/script.js?14756748891228*/
