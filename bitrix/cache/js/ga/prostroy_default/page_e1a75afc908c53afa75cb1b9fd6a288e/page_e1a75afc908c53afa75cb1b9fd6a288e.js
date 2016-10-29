
; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/prostroy_default/components/bitrix/menu/catalog_left/script.js?1476360634587";s:6:"source";s:80:"/bitrix/templates/prostroy_default/components/bitrix/menu/catalog_left/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

$(document).ready(function(){
	$("#tree").treeview({
		collapsed: true,
		animated: "fast",
		control:"#sidetreecontrol",
		prerendered: true,
		persist: "location"
	});
})	;	

var a=false
  function linkchange(obj) {
   if  (a){
	obj=document.getElementById('collapseAll'); 
	obj.style.display='none';
	
	obj=document.getElementById('expandAll'); 
	obj.style.display='inline';	
   } else {
	   
	obj=document.getElementById('expandAll'); 
	obj.style.display='none';
	
	obj=document.getElementById('collapseAll'); 
	obj.style.display='inline';	
   }
  a=!a
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/templates/prostroy_default/components/bitrix/catalog.smart.filter/gopro/script.js?147567488929414";s:6:"source";s:89:"/bitrix/templates/prostroy_default/components/bitrix/catalog.smart.filter/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/***********************************************************************/
/******************************* custom ********************************/
/***********************************************************************/
var RSGoPro_tamautID = 0,
	RSGoPro_timeoutDelay = 1200,
	RSGoPro_inputter,
	RSGoPro_modef_delay_hide = 4000,
	RSGoPro_modef_posFix = 0;
var RSGoPro_filtren,
	RSGoPro_offsetTopFilter = 0,
	RSGoPro_offsetTopFilterH = 0,
	RSGoPro_content,
	RSGoPro_offsetTopContent = 0,
	RSGoPro_offsetTopContentH = 0;

function RSGoPro_priceGoupClick() {
	if( $('.filtren').hasClass('ajaxfilter') ) {
		RSGoPro_FilterAjax();
	}
}

function RSGoPro_SeachProp($inputObj) {
	var value = $inputObj.val();
	var $lvl1 = $inputObj.parents('.lvl1');
	
	if(value.length<1) {
		$lvl1.find('.lvl2').css('display','block');
	} else {
		$lvl1.find('.lvl2').each(function(){
			var p_value = $(this).find('.val').html().substr(0,value.length);
			if( value.toLowerCase()==p_value.toLowerCase() ) {
				$(this).css('display','block');
			} else {
				$(this).css('display','none');
			}
		});
	}
	
	// reinitialize jScrollPane
	if($inputObj.parents('.lvl1').hasClass('scrolable')) {
		RSGoPro_FilterJScrollPaneReinitialize();
	}
}

function RSGoPro_FilterSetPropHide() {
	// main
	if( $.cookie(BX_COOKIE_PREFIX+'RSGOPRO_SMARTFILTER_SHOW_ALL')=='Y' ) {
		$('.filtren').addClass('opened');
	}
}

function RSGoPro_FilterJScrollPaneReinitialize() {
	var pane2api;
	$('.f_jscrollpane').each(function(i){
		pane2api = $(this).data('jsp');
		pane2api.reinitialise();
	});
}


function RSGoPro_FixedFilterWinScroll() {
	if( RSGoPro_filtren && RSGoPro_filtren.length>0 ) {
		RSGoPro_offsetTopFilterH = RSGoPro_offsetTopFilter + RSGoPro_filtren.outerHeight(true);
		RSGoPro_offsetTopContentH = RSGoPro_content.offset().top + RSGoPro_content.outerHeight(true)
		if( window.pageYOffset > RSGoPro_offsetTopFilter ) {
			RSGoPro_filtren.addClass('fixed');
		} else {
			RSGoPro_filtren.removeClass('fixed');
		}
		if( window.pageYOffset + RSGoPro_filtren.outerHeight(true) > RSGoPro_content.offset().top + RSGoPro_content.outerHeight(true) ) {
			RSGoPro_filtren.addClass('stop').css('top',(RSGoPro_offsetTopContentH - RSGoPro_offsetTopFilterH)+'px');
		} else {
			RSGoPro_filtren.removeClass('stop').css('top','0px');
		}
	}
}
function RSGoPro_FixedFilter() {
	if( RSGoPro_filtren && RSGoPro_filtren.length>0 ) 	{
		RSGoPro_offsetTopFilter = RSGoPro_filtren.offset().top;
		RSGoPro_offsetTopFilterH = RSGoPro_offsetTopFilter + RSGoPro_filtren.outerHeight(true);
		RSGoPro_offsetTopContent = RSGoPro_content.offset().top;
		RSGoPro_offsetTopContentH = RSGoPro_offsetTopContent + RSGoPro_content.outerHeight(true);
		window.onscroll = RSGoPro_FixedFilterWinScroll;
	}
}

function RSGoPro_FilterAjax() {
	clearTimeout(RSGoPro_tamautID);
	RSGoPro_tamautID = setTimeout(function(){
		RSGoPro_Area2Darken( $('#catalog'), 'animashka' );
		var $formObj = $('form.smartfilter');
		var seriData = $formObj.serialize(),
			url = $formObj.attr('action');
		if(url.indexOf("?")<1) 		{
			url = url + '?' + seriData + '&AJAX_CALL=Y&get=catalog&set_filter=Y';
		} else {
			url = url + '&' + seriData + '&AJAX_CALL=Y&get=catalog&set_filter=Y';
		}
		BX.ajax({
			url				: url,
			method			: 'GET',
			dataType		: 'html',
			scriptsRunFirst	: false,
			emulateOnload	: false,
			start			: true,
			cache			: false,
			onsuccess: function(data){
				$('#catalog').html( data );
				RSGoPro_ScrollInit('.prices_jscrollpane');
				RSGoPro_Area2Darken( $('#catalog') );
				RSGoPro_FilterOnDocumentReady();
			},
			onfailure: function(){
				RSGoPro_Area2Darken( $('#catalog') );
				RSGoPro_FilterOnDocumentReady();
				console.warn( 'FILTER -> ajax load failed' );
			}
		});
	},RSGoPro_timeoutDelay);
}

function RSGoPro_FilterOnDocumentReady() {
	RSGoPro_FilterSetPropHide();
	
	// shiw/hide filter
	$(document).off('click','.filtren .title a.shhi');
	$(document).on('click','.filtren .title a.shhi',function(e){
		if($('.filtren').hasClass('opened')) { // was opened
			$.removeCookie(BX_COOKIE_PREFIX+'RSGOPRO_SMARTFILTER_SHOW_ALL');
			$('.filtren').removeClass('opened');
		} else { // was closed
			$.cookie(BX_COOKIE_PREFIX+'RSGOPRO_SMARTFILTER_SHOW_ALL','Y','/');
			$('.filtren').addClass('opened');
		}
		RSGoPro_FilterJScrollPaneReinitialize();
		RSGoPro_FixedFilterWinScroll();
		return false;
	});
	
	// shiw/hide property
	$(document).off('click','.filtren .showchild');
	$(document).on('click','.filtren .showchild',function(){
		console.log( 'filtren -> showchild' );
		var $li = $(this).parents('li.lvl1');
		var propcode = $li.data('propcode');
		if($li.hasClass('closed')) { // was closed
			$li.removeClass('closed');
		} else { // was opened
			$li.addClass('closed');
		}
		RSGoPro_FilterJScrollPaneReinitialize();
		RSGoPro_FixedFilterWinScroll();
		return false;
	});
	
	// disable click on disabled property
	$(document).off('click','.lvl2 .disabled input, .lvl2 .disabled label');
	$(document).on('click', '.lvl2 .disabled input, .lvl2 .disabled label', function(e){
		e.stopPropagation();
		return false;
	});
	
	// jScrollPane
	$('.f_jscrollpane').jScrollPane();
	RSGoPro_FilterJScrollPaneReinitialize();
	$(window).resize(function(){
		RSGoPro_FilterJScrollPaneReinitialize();
	});
	
	// search
	$(document).off('click','.f_search');
	$(document).on('keyup', '.f_search', function(){
		var $inputObj = $(this);
		RSGoPro_SeachProp($inputObj);
	});
	
	// buttons setFilter and resetFilter
	/*$(document).off('click','.filtren .buttons .set_filter, .filtren .buttons .del_filter');
	$(document).on('click','.filtren .buttons .set_filter, .filtren .buttons .del_filter',function(){
		if($(this).hasClass('set_filter')) 		{
			$("#set_filter").click();
		} else {
			$("#del_filter").click();
		}
		return false;
	});*/
	
	// modef link click
	$(document).off('click','#modef a');
	$(document).on('click','#modef a',function(){
		$("#set_filter").click();
		return false;
	});
	// fixed filter on scrolling
	if(!RSDevFunc_PHONETABLET)
	{
		RSGoPro_filtren = $('.filtren.filterfixed'),
		RSGoPro_offsetTopFilter = 0,
		RSGoPro_offsetTopFilterH = 0,
		RSGoPro_content = $('.content'),
		RSGoPro_offsetTopContent = 0,
		RSGoPro_offsetTopContentH = 0;
		
		RSGoPro_FixedFilter();
	}
}

/* bitrix */
function JCSmartFilter(ajaxURL, params)
{
	this.ajaxURL = ajaxURL;
	this.form = null;
	this.timer = null;
	this.cacheKey = '';
	this.cache = [];
	this.popups = [];
	if (params && params.SEF_SET_FILTER_URL)
	{
		this.bindUrlToButton('set_filter', params.SEF_SET_FILTER_URL);
		this.sef = true;
	}
	if (params && params.SEF_DEL_FILTER_URL)
	{
		this.bindUrlToButton('del_filter', params.SEF_DEL_FILTER_URL);
	}
}

JCSmartFilter.prototype.keyup = function(input)
{
	$(input).toggleClass('active');
	$(input).parents('div').toggleClass('active');
	if( $('.filtren').hasClass('ajaxfilter') ) {
		RSGoPro_FilterAjax();
	} else {
		if(this.timer)
			clearTimeout(this.timer);
		this.timer = setTimeout(BX.delegate(function(){
			this.reload(input);
		}, this), RSGoPro_timeoutDelay);
	}
}

JCSmartFilter.prototype.click = function(checkbox)
{
	if( $(checkbox).parents('ul.dropdown').length>0 ) {
		var val = $(checkbox).parents('.lvl2').find('.val').html();
		$(checkbox).parents('ul.dd').removeClass('open').find('.name.select').find('span').html( val );
		if( $(checkbox).parents('ul.dd').find('.pic.select').find('span').length>0 ) {
			if( $(checkbox).parents('.lvl2').find('.pic span').hasClass('nopic') ) {
				$(checkbox).parents('ul.dd').find('.pic.select').find('span').addClass('nopic').css( 'backgroundImage', '' );
			} else {
				var pic = $(checkbox).parents('.lvl2').find('.pic span').css('backgroundImage');
				$(checkbox).parents('ul.dd').find('.pic.select').find('span').removeClass('nopic').css( 'backgroundImage', pic );
			}
		}
	}
	if( $('.filtren').hasClass('ajaxfilter') )
	{
		RSGoPro_FilterAjax();
	} else {
		if(this.timer)
			clearTimeout(this.timer);
		this.timer = setTimeout(BX.delegate(function(){
			this.reload(checkbox);
		}, this), RSGoPro_timeoutDelay);
	}
}

JCSmartFilter.prototype.reload = function(input)
{
	if(!RSDevFunc_PHONETABLET) {
		/* GoPro */
		RSGoPro_inputter = input;
		
		var lvl1 = BX.pos(BX.findParent(input, {'class':'property'}), true);
		RSGoPro_Area2Darken( $(input).closest('.filtren'), 'animashka', {'progressTop': lvl1.top + lvl1.height/2});
		
		var values = [];
		this.position = BX.pos(input, true);
		this.form = BX.findParent(input, {'tag':'form'});
		if(this.form) {
			values[0] = {name: 'ajax', value: 'y'};
			this.gatherInputsValues(values, BX.findChildren(this.form, {'tag': new RegExp('^(input|select)$', 'i')}, true));
			this.curFilterinput = input;
			BX.ajax.loadJSON(
				this.ajaxURL,
				this.values2post(values),
				BX.delegate(this.postHandler, this)
			);
		}
	}
}

JCSmartFilter.prototype.updateItem = function (PID, arItem)
{
	if (arItem.PROPERTY_TYPE === 'N' || arItem.PRICE)
	{
		var trackBar = window['trackBar' + PID];
		if (!trackBar && arItem.ENCODED_ID)
			trackBar = window['trackBar' + arItem.ENCODED_ID];

		if (trackBar && arItem.VALUES)
		{
			if (arItem.VALUES.MIN)
			{
				if (arItem.VALUES.MIN.FILTERED_VALUE)
					trackBar.setMinFilteredValue(arItem.VALUES.MIN.FILTERED_VALUE);
				else
					trackBar.setMinFilteredValue(arItem.VALUES.MIN.VALUE);
			}

			if (arItem.VALUES.MAX)
			{
				if (arItem.VALUES.MAX.FILTERED_VALUE)
					trackBar.setMaxFilteredValue(arItem.VALUES.MAX.FILTERED_VALUE);
				else
					trackBar.setMaxFilteredValue(arItem.VALUES.MAX.VALUE);
			}
		}
	}
	else if (arItem.VALUES)
	{
		for (var i in arItem.VALUES)
		{
			if (arItem.VALUES.hasOwnProperty(i))
			{
				var value = arItem.VALUES[i];
				var control = BX(value.CONTROL_ID);
        
				if (!!control)
				{
					var label = document.querySelector('[data-role="label_'+value.CONTROL_ID+'"]');
					if (value.DISABLED)
					{
						if (label)
							BX.addClass(label, 'disabled');
						else
							BX.addClass(control.parentNode, 'disabled');
            /* custom */
            if ($(label).parents('div').length > 0) {
              $(label).parents('div').addClass('disabled');
            }
            /* /custom */
					}
					else
					{
						if (label)
							BX.removeClass(label, 'disabled');
						else
							BX.removeClass(control.parentNode, 'disabled');
            /* custom */
            if ($(label).parents('div').length > 0) {
              $(label).parents('div').removeClass('disabled');
            }
            /* /custom */
					}

					if (value.hasOwnProperty('ELEMENT_COUNT'))
					{
						label = document.querySelector('[data-role="count_'+value.CONTROL_ID+'"]');
						if (label)
							label.innerHTML = value.ELEMENT_COUNT;
					}
				}
			}
		}
	}
};

JCSmartFilter.prototype.postHandler = function (result)
{
	/* custom */ 
	clearInterval(RSGoPro_tamautID);
	RSGoPro_Area2Darken( $('.filtren') );
	/* /custom */
  
  var hrefFILTER, url, curProp;
	var modef = BX('modef');
	var modef_num = BX('modef_num');

	if (!!result && !!result.ITEMS)
	{
		for(var popupId in this.popups)
		{
			if (this.popups.hasOwnProperty(popupId))
			{
				this.popups[popupId].destroy();
			}
		}
		this.popups = [];

		for(var PID in result.ITEMS)
		{
			if (result.ITEMS.hasOwnProperty(PID))
			{
				this.updateItem(PID, result.ITEMS[PID]);
			}
		}

		if (!!modef && !!modef_num)
		{
			modef_num.innerHTML = result.ELEMENT_COUNT;
			hrefFILTER = BX.findChildren(modef, {tag: 'A'}, true);

			if (result.FILTER_URL && hrefFILTER)
			{
				hrefFILTER[0].href = BX.util.htmlspecialcharsback(result.FILTER_URL);
			}

			if (result.FILTER_AJAX_URL && result.COMPONENT_CONTAINER_ID)
			{
				BX.unbindAll(hrefFILTER[0]);
				BX.bind(hrefFILTER[0], 'click', function(e)
				{
					url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
					BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
					return BX.PreventDefault(e);
				});
			}
      // console.log('result.INSTANT_RELOAD = ' + result.INSTANT_RELOAD);
      // console.log('result.COMPONENT_CONTAINER_ID = ' + result.COMPONENT_CONTAINER_ID);
			if (result.INSTANT_RELOAD && result.COMPONENT_CONTAINER_ID)
			{
				url = BX.util.htmlspecialcharsback(result.FILTER_AJAX_URL);
        // console.log('url = ' + url);
				BX.ajax.insertToNode(url, result.COMPONENT_CONTAINER_ID);
			}
			else
			{
				if (modef.style.display === 'none')
				{
					modef.style.display = 'inline-block';
				}
        
        /* custom */
				var NewPoStop = this.position.top;
				if($(RSGoPro_inputter).hasClass('min') || $(RSGoPro_inputter).hasClass('max')) {
					NewPoStop = NewPoStop + RSGoPro_modef_posFix + 1;
				} else if($(RSGoPro_inputter).parents('.f_jscrollpane').length>0) {
					var id = $(RSGoPro_inputter).parents('.f_jscrollpane').attr('id');
					NewPoStop = NewPoStop + RSGoPro_modef_posFix + BX(id).offsetTop - $('#'+id).data('jsp').getContentPositionY();
					if($(RSGoPro_inputter).parents('.cwpal').length>0) {
						NewPoStop = NewPoStop + RSGoPro_modef_posFix + 7;
					}
				} else if($(RSGoPro_inputter).parents('.dropdown').length>0) {
					var id = $(RSGoPro_inputter).parents('li.dropdown').attr('id');
					NewPoStop = NewPoStop + BX(id).offsetTop;
					if( $(RSGoPro_inputter).parents('.dd').hasClass('wpal') ) {
						NewPoStop = NewPoStop + 7;
					}
				} else if($(RSGoPro_inputter).parents('.cwpal').length>0) {
					NewPoStop = NewPoStop + RSGoPro_modef_posFix + 7;
				} else if($(RSGoPro_inputter).parents('.cwp').length>0) {
					NewPoStop = NewPoStop + RSGoPro_modef_posFix + 6;
				} else {
					NewPoStop = NewPoStop + RSGoPro_modef_posFix;
				}
				modef.style.top = NewPoStop + 'px';
				/* /custom */

				if (this.viewMode == "VERTICAL")
				{
					curProp = BX.findChild(BX.findParent(this.curFilterinput, {'class':'bx-filter-parameters-box'}), {'class':'bx-filter-container-modef'}, true, false);
					curProp.appendChild(modef);
				}

				if (result.SEF_SET_FILTER_URL)
				{
          console.log('result.SEF_SET_FILTER_URL = ' + result.SEF_SET_FILTER_URL);
					this.bindUrlToButton('set_filter', result.SEF_SET_FILTER_URL);
				}
			}
		}
	}
};

JCSmartFilter.prototype.bindUrlToButton = function (buttonId, url)
{
	var button = BX(buttonId);
	if (button)
	{
		var proxy = function(j, func)
		{
			return function()
			{
				return func(j);
			}
		};

		if (button.type == 'submit')
			button.type = 'button';

		BX.bind(button, 'click', proxy(url, function(url)
		{
			window.location.href = url;
			return false;
		}));
	}
};

JCSmartFilter.prototype.gatherInputsValues = function (values, elements)
{
	if(elements)
	{
		for(var i = 0; i < elements.length; i++)
		{
			var el = elements[i];
			if (el.disabled || !el.type)
				continue;

			switch(el.type.toLowerCase())
			{
				case 'text':
				case 'textarea':
				case 'password':
				case 'hidden':
				case 'select-one':
					if(el.value.length)
						values[values.length] = {name : el.name, value : el.value};
					break;
				case 'radio':
				case 'checkbox':
					if(el.checked)
						values[values.length] = {name : el.name, value : el.value};
					break;
				case 'select-multiple':
					for (var j = 0; j < el.options.length; j++)
					{
						if (el.options[j].selected)
							values[values.length] = {name : el.name, value : el.options[j].value};
					}
					break;
				default:
					break;
			}
		}
	}
};

JCSmartFilter.prototype.values2post = function (values)
{
	var post = new Array;
	var current = post;
	var i = 0;
	while(i < values.length)
	{
		var p = values[i].name.indexOf('[');
		if(p == -1)
		{
			current[values[i].name] = values[i].value;
			current = post;
			i++;
		}
		else
		{
			var name = values[i].name.substring(0, p);
			var rest = values[i].name.substring(p+1);
			if(!current[name])
				current[name] = new Array;

			var pp = rest.indexOf(']');
			if(pp == -1)
			{
				//Error - not balanced brackets
				current = post;
				i++;
			}
			else if(pp == 0)
			{
				//No index specified - so take the next integer
				current = current[name];
				values[i].name = '' + current.length;
			}
			else
			{
				//Now index name becomes and name and we go deeper into the array
				current = current[name];
				values[i].name = rest.substring(0, pp) + rest.substring(pp+1);
			}
		}
	}
	return post;
}

BX.namespace("BX.Iblock.SmartFilter");
BX.Iblock.SmartFilter = (function()
{
	var SmartFilter = function(arParams)
	{
		if (typeof arParams === 'object')
		{
			this.leftSlider = BX(arParams.leftSlider);
			this.rightSlider = BX(arParams.rightSlider);
			this.tracker = BX(arParams.tracker);
			this.trackerWrap = BX(arParams.trackerWrap);

			this.minInput = BX(arParams.minInputId);
			this.maxInput = BX(arParams.maxInputId);

			this.minPrice = parseFloat(arParams.minPrice);
			this.maxPrice = parseFloat(arParams.maxPrice);

			this.curMinPrice = parseFloat(arParams.curMinPrice);
			this.curMaxPrice = parseFloat(arParams.curMaxPrice);

			this.fltMinPrice = arParams.fltMinPrice ? parseFloat(arParams.fltMinPrice) : parseFloat(arParams.curMinPrice);
			this.fltMaxPrice = arParams.fltMaxPrice ? parseFloat(arParams.fltMaxPrice) : parseFloat(arParams.curMaxPrice);

			this.precision = arParams.precision || 0;

			this.priceDiff = this.maxPrice - this.minPrice;

			this.leftPercent = 0;
			this.rightPercent = 0;

			this.fltMinPercent = 0;
			this.fltMaxPercent = 0;

			this.colorUnavailableActive = BX(arParams.colorUnavailableActive);//gray
			this.colorAvailableActive = BX(arParams.colorAvailableActive);//blue
			this.colorAvailableInactive = BX(arParams.colorAvailableInactive);//light blue

			this.isTouch = false;

			this.init();

			if ('ontouchstart' in document.documentElement)
			{
				this.isTouch = true;

				BX.bind(this.leftSlider, "touchstart", BX.proxy(function(event){
					this.onMoveLeftSlider(event)
				}, this));

				BX.bind(this.rightSlider, "touchstart", BX.proxy(function(event){
					this.onMoveRightSlider(event)
				}, this));
			}
			else
			{
				BX.bind(this.leftSlider, "mousedown", BX.proxy(function(event){
					this.onMoveLeftSlider(event)
				}, this));

				BX.bind(this.rightSlider, "mousedown", BX.proxy(function(event){
					this.onMoveRightSlider(event)
				}, this));
			}

			BX.bind(this.minInput, "keyup", BX.proxy(function(event){
				this.onInputChange();
			}, this));

			BX.bind(this.maxInput, "keyup", BX.proxy(function(event){
				this.onInputChange();
			}, this));
		}
	};

	SmartFilter.prototype.init = function()
	{
		var priceDiff;

		if (this.curMinPrice > this.minPrice)
		{
			priceDiff = this.curMinPrice - this.minPrice;
			this.leftPercent = (priceDiff*100)/this.priceDiff;

			this.leftSlider.style.left = this.leftPercent + "%";
			this.colorUnavailableActive.style.left = this.leftPercent + "%";
		}

		this.setMinFilteredValue(this.fltMinPrice);

		if (this.curMaxPrice < this.maxPrice)
		{
			priceDiff = this.maxPrice - this.curMaxPrice;
			this.rightPercent = (priceDiff*100)/this.priceDiff;

			this.rightSlider.style.right = this.rightPercent + "%";
			this.colorUnavailableActive.style.right = this.rightPercent + "%";
		}

		this.setMaxFilteredValue(this.fltMaxPrice);
	};

	SmartFilter.prototype.setMinFilteredValue = function (fltMinPrice)
	{
		this.fltMinPrice = parseFloat(fltMinPrice);
		if (this.fltMinPrice >= this.minPrice)
		{
			var priceDiff = this.fltMinPrice - this.minPrice;
			this.fltMinPercent = (priceDiff*100)/this.priceDiff;

			if (this.leftPercent > this.fltMinPercent)
				this.colorAvailableActive.style.left = this.leftPercent + "%";
			else
				this.colorAvailableActive.style.left = this.fltMinPercent + "%";

			this.colorAvailableInactive.style.left = this.fltMinPercent + "%";
		}
		else
		{
			this.colorAvailableActive.style.left = "0%";
			this.colorAvailableInactive.style.left = "0%";
		}
	};

	SmartFilter.prototype.setMaxFilteredValue = function (fltMaxPrice)
	{
		this.fltMaxPrice = parseFloat(fltMaxPrice);
		if (this.fltMaxPrice <= this.maxPrice)
		{
			var priceDiff = this.maxPrice - this.fltMaxPrice;
			this.fltMaxPercent = (priceDiff*100)/this.priceDiff;

			if (this.rightPercent > this.fltMaxPercent)
				this.colorAvailableActive.style.right = this.rightPercent + "%";
			else
				this.colorAvailableActive.style.right = this.fltMaxPercent + "%";

			this.colorAvailableInactive.style.right = this.fltMaxPercent + "%";
		}
		else
		{
			this.colorAvailableActive.style.right = "0%";
			this.colorAvailableInactive.style.right = "0%";
		}
	};

	SmartFilter.prototype.getXCoord = function(elem)
	{
		var box = elem.getBoundingClientRect();
		var body = document.body;
		var docElem = document.documentElement;

		var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
		var clientLeft = docElem.clientLeft || body.clientLeft || 0;
		var left = box.left + scrollLeft - clientLeft;

		return Math.round(left);
	};

	SmartFilter.prototype.getPageX = function(e)
	{
		e = e || window.event;
		var pageX = null;

		if (this.isTouch && event.targetTouches[0] != null)
		{
			pageX = e.targetTouches[0].pageX;
		}
		else if (e.pageX != null)
		{
			pageX = e.pageX;
		}
		else if (e.clientX != null)
		{
			var html = document.documentElement;
			var body = document.body;

			pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
			pageX -= html.clientLeft || 0;
		}

		return pageX;
	};

	SmartFilter.prototype.recountMinPrice = function()
	{
		var newMinPrice = (this.priceDiff*this.leftPercent)/100;
		newMinPrice = (this.minPrice + newMinPrice).toFixed(this.precision);

		if (newMinPrice != this.minPrice)
			this.minInput.value = newMinPrice;
		else
			this.minInput.value = "";
		smartFilter.keyup(this.minInput);
	};

	SmartFilter.prototype.recountMaxPrice = function()
	{
		var newMaxPrice = (this.priceDiff*this.rightPercent)/100;
		newMaxPrice = (this.maxPrice - newMaxPrice).toFixed(this.precision);

		if (newMaxPrice != this.maxPrice)
			this.maxInput.value = newMaxPrice;
		else
			this.maxInput.value = "";
		smartFilter.keyup(this.maxInput);
	};

	SmartFilter.prototype.onInputChange = function ()
	{
		var priceDiff;
		if (this.minInput.value)
		{
			var leftInputValue = this.minInput.value;
			if (leftInputValue < this.minPrice)
				leftInputValue = this.minPrice;

			if (leftInputValue > this.maxPrice)
				leftInputValue = this.maxPrice;

			priceDiff = leftInputValue - this.minPrice;
			this.leftPercent = (priceDiff*100)/this.priceDiff;

			this.makeLeftSliderMove(false);
		}

		if (this.maxInput.value)
		{
			var rightInputValue = this.maxInput.value;
			if (rightInputValue < this.minPrice)
				rightInputValue = this.minPrice;

			if (rightInputValue > this.maxPrice)
				rightInputValue = this.maxPrice;

			priceDiff = this.maxPrice - rightInputValue;
			this.rightPercent = (priceDiff*100)/this.priceDiff;

			this.makeRightSliderMove(false);
		}
	};

	SmartFilter.prototype.makeLeftSliderMove = function(recountPrice)
	{
		recountPrice = (recountPrice === false) ? false : true;

		this.leftSlider.style.left = this.leftPercent + "%";
		this.colorUnavailableActive.style.left = this.leftPercent + "%";

		var areBothSlidersMoving = false;
		if (this.leftPercent + this.rightPercent >= 100)
		{
			areBothSlidersMoving = true;
			this.rightPercent = 100 - this.leftPercent;
			this.rightSlider.style.right = this.rightPercent + "%";
			this.colorUnavailableActive.style.right = this.rightPercent + "%";
		}

		if (this.leftPercent >= this.fltMinPercent && this.leftPercent <= (100-this.fltMaxPercent))
		{
			this.colorAvailableActive.style.left = this.leftPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.right = 100 - this.leftPercent + "%";
			}
		}
		else if(this.leftPercent <= this.fltMinPercent)
		{
			this.colorAvailableActive.style.left = this.fltMinPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.right = 100 - this.fltMinPercent + "%";
			}
		}
		else if(this.leftPercent >= this.fltMaxPercent)
		{
			this.colorAvailableActive.style.left = 100-this.fltMaxPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
			}
		}

		if (recountPrice)
		{
			this.recountMinPrice();
			if (areBothSlidersMoving)
				this.recountMaxPrice();
		}
	};

	SmartFilter.prototype.countNewLeft = function(event)
	{
		pageX = this.getPageX(event);

		var trackerXCoord = this.getXCoord(this.trackerWrap);
		var rightEdge = this.trackerWrap.offsetWidth;

		var newLeft = pageX - trackerXCoord;

		if (newLeft < 0)
			newLeft = 0;
		else if (newLeft > rightEdge)
			newLeft = rightEdge;

		return newLeft;
	};

	SmartFilter.prototype.onMoveLeftSlider = function(e)
	{
		if (!this.isTouch)
		{
			this.leftSlider.ondragstart = function() {
				return false;
			};
		}

		if (!this.isTouch)
		{
			document.onmousemove = BX.proxy(function(event) {
				this.leftPercent = ((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
				this.makeLeftSliderMove();
			}, this);

			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
		}
		else
		{
			document.ontouchmove = BX.proxy(function(event) {
				this.leftPercent = ((this.countNewLeft(event)*100)/this.trackerWrap.offsetWidth);
				this.makeLeftSliderMove();
			}, this);

			document.ontouchend = function() {
				document.ontouchmove = document.touchend = null;
			};
		}

		return false;
	};

	SmartFilter.prototype.makeRightSliderMove = function(recountPrice)
	{
		recountPrice = (recountPrice === false) ? false : true;

		this.rightSlider.style.right = this.rightPercent + "%";
		this.colorUnavailableActive.style.right = this.rightPercent + "%";

		var areBothSlidersMoving = false;
		if (this.leftPercent + this.rightPercent >= 100)
		{
			areBothSlidersMoving = true;
			this.leftPercent = 100 - this.rightPercent;
			this.leftSlider.style.left = this.leftPercent + "%";
			this.colorUnavailableActive.style.left = this.leftPercent + "%";
		}

		if ((100-this.rightPercent) >= this.fltMinPercent && this.rightPercent >= this.fltMaxPercent)
		{
			this.colorAvailableActive.style.right = this.rightPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.left = 100 - this.rightPercent + "%";
			}
		}
		else if(this.rightPercent <= this.fltMaxPercent)
		{
			this.colorAvailableActive.style.right = this.fltMaxPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.left = 100 - this.fltMaxPercent + "%";
			}
		}
		else if((100-this.rightPercent) <= this.fltMinPercent)
		{
			this.colorAvailableActive.style.right = 100-this.fltMinPercent + "%";
			if (areBothSlidersMoving)
			{
				this.colorAvailableActive.style.left = this.fltMinPercent + "%";
			}
		}

		if (recountPrice)
		{
			this.recountMaxPrice();
			if (areBothSlidersMoving)
				this.recountMinPrice();
		}
	};

	SmartFilter.prototype.onMoveRightSlider = function(e)
	{
		if (!this.isTouch)
		{
			this.rightSlider.ondragstart = function() {
				return false;
			};
		}

		if (!this.isTouch)
		{
			document.onmousemove = BX.proxy(function(event) {
				this.rightPercent = 100-(((this.countNewLeft(event))*100)/(this.trackerWrap.offsetWidth));
				this.makeRightSliderMove();
			}, this);

			document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null;
			};
		}
		else
		{
			document.ontouchmove = BX.proxy(function(event) {
				this.rightPercent = 100-(((this.countNewLeft(event))*100)/(this.trackerWrap.offsetWidth));
				this.makeRightSliderMove();
			}, this);

			document.ontouchend = function() {
				document.ontouchmove = document.ontouchend = null;
			};
		}

		return false;
	};

	return SmartFilter;
})();

/***********************************************************************/
/******************************* custom ********************************/
/***********************************************************************/
$(document).ready(function(){
	
	RSGoPro_FilterOnDocumentReady();

	$(document).on('click',function(e){
		if( $(e.target).parents('.dd.open').length>0 ) {
			
		} else {
			$('.filtren .dd').removeClass('open');
		}
	});

	$(document).off('click','.filtren label.select');
	$(document).on('click','.filtren label.select',function(){
		$(this).parents('.filtren').find('.dd.open').removeClass('open');
		$(this).parents('.dd').toggleClass('open');
	});
  
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/prostroy_default/components/bitrix/catalog.compare.list/gopro/script.js?1475674889689";s:6:"source";s:89:"/bitrix/templates/prostroy_default/components/bitrix/catalog.compare.list/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function REDSIGNGoPro_CompareShowHideAndCopy(){
	if( $('#compare').find('a').length<1 )
	{
		$('.mix').find('.compareandpaginator').hide();
		$('.smartfilter').find('.filtercompare').hide();
	} else {
		var textForCopy = $('#compare').find('.comparelistinner a').html();
		var linkForCopy = $('#compare').find('.comparelistinner a').attr('href');
		if( $('#compare').find('.comparelistinner').length>0 && $('.smartfilter').find('.filtercompare').length>0 )
		{
			$('.smartfilter').find('.filtercompare a').attr('href', linkForCopy );
			$('.smartfilter').find('.filtercompare a').html( textForCopy );
		}
	}
}

$(document).ready(function(){
	
	REDSIGNGoPro_CompareShowHideAndCopy();
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/prostroy_default/components/redsign/catalog.sorter/gopro/script.js?14756748893196";s:6:"source";s:84:"/bitrix/templates/prostroy_default/components/redsign/catalog.sorter/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGoProSorterGo(ajaxpagesid,$link,isBigdata) {
	if($link) {
		var catalog_selector = '#'+ajaxpagesid,
			url = $link.attr('href');
		RSGoPro_Area2Darken($(catalog_selector),'animashka');
		$link.parent().find('a').removeClass('selected');
		$link.addClass('selected')
		// dropdown
		if( $link.parents('.dropdown').find('.select').length>0 ) {
			$link.parents('.dropdown').find('.select').html( $link.html() );
		}
		// shortsorter
		if( $link.parents('.shortsort').length>0 ) {
			if(url==$link.data('url1')){
				$link.attr('href',$link.data('url2'));
			} else {
				$link.attr('href',$link.data('url1'));
			}
			if($link.find('.icon').hasClass('asc')){
				$link.find('.icon').removeClass('asc').addClass('desc');
			} else {
				$link.find('.icon').removeClass('desc').addClass('asc');
			}
		}
		if(isBigdata!='Y' && url && url!='') {
			url+= '&AJAX_CALL=Y&sorterchange='+ajaxpagesid;
			$.getJSON(url, {}, function(json){
				RSGoPro_PutJSon( json,false,ajaxpagesid );
				setTimeout(function(){
					RSGoPro_ScrollInit('.prices_jscrollpane');
					RSGoPro_TIMER();
					RSGoPro_SetSet();
				},75); // for slow shit
			}).fail(function(json){
				console.warn( 'sorter - change template -> error responsed' );
			}).always(function(){
				RSGoPro_Area2Darken($(catalog_selector),'animashka');
			});
		}
	}
}

$(document).ready(function(){
	
	// ajax sorter -> change (click link)
	$(document).on('click','.catalogsorter .template a, .catalogsorter .output .cool .dropdownin a, .catalogsorter .sort .cool .dropdownin a, .catalogsorter .shortsort .cool a',function(){
		var $link = $(this);
		if( $link.parents('.catalogsorter').length>0 ) {
			var ajaxpagesid = $link.parents('.catalogsorter').data('ajaxpagesid');
			if( ajaxpagesid && ajaxpagesid!='' ) {
				if( $link.parents('.js-bigdata').length>0 ) { // big data
					RSGoProSorterGo(ajaxpagesid,$link,'','Y');
					var $jsBigdata = $link.parents('.js-bigdata');
					BX.ajax({
						url: $jsBigdata.data('url'),
						method: 'POST',
						data: {'parameters':$jsBigdata.data('parameters'), 'template':$jsBigdata.data('template'), 'rcm':'yes', 'view':$link.data('fvalue')},
						dataType: 'html',
						processData: false,
						start: true,
						onsuccess: function (html) {
							var ob = BX.processHTML(html);
							// inject
							BX($jsBigdata.data('injectId')).innerHTML = ob.HTML;
							BX.ajax.processScripts(ob.SCRIPT);
							RSGoPro_ScrollInit('.prices_jscrollpane');
							//RSGoPro_Area2Darken($('#'+ajaxpagesid),'animashka');
							RSGoPro_TIMER();
							RSGoPro_SetSet();
						}
					});
				} else { // normal components
					RSGoProSorterGo(ajaxpagesid,$link,'N');
					if( $link.parents('.dropdown').length>0 ) {
						$link.parents('.dropdown').removeClass('hover');
					}
				}
			}
		}
		return false;
	});
	
	$(document).on('mouseenter','.catalogsorter .dropdown',function(){
		$(this).addClass('hover');
		return false;
	}).on('mouseleave','.catalogsorter .dropdown',function(){
		$(this).removeClass('hover');
		return false;
	}).on('click','.catalogsorter .dropdown',function(){
		$(this).toggleClass('hover');
		return false;
	});
	
	$('.mix .catalogsorter').addClass('used');
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/prostroy_default/components/bitrix/catalog.section/gopro/script.js?14756748891333";s:6:"source";s:84:"/bitrix/templates/prostroy_default/components/bitrix/catalog.section/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_Hider_called = false;
var RSGoPro_BigadataGalleryFlag = true;

function RSGoPro_DetectTable() {
	$('.artables').each(function(i){
		if ($(this).parents('.js-bigdata').length>=1 && RSGoPro_BigadataGalleryFlag) {
			RSGoPro_BigadataGalleryFlag = false;
		} else {
			var $artables = $(this);
			if($artables.outerWidth(true)<$artables.find('.products').outerWidth(true) && !$artables.hasClass('adap'))
			{
				$artables.addClass('adap');
			}
		}
	});
}

// hide filter and sorter when goods is empty
function RSGoPro_Hider() {
	RSGoPro_Hider_called = true;
	$('.sidebar, .mix, .navi, .catalogsorter').hide();
	$('.catalog .prods').css('marginLeft','0px');
}

$(document).ready(function(){
	
	// fix tables if stupid styles didnt work
	RSGoPro_DetectTable();
	$(window).resize(function(){
		RSGoPro_DetectTable();
	});
	
	if( $('.prices_jscrollpane').length>0 ) {
		RSGoPro_ScrollInit('.prices_jscrollpane');
		$(window).resize(function(){
			RSGoPro_ScrollReinit('.prices_jscrollpane');
		});
	}
	
	$(document).on('mouseenter','.showcase .js-element',function(){
		$(this).addClass('hover');
		return false;
	}).on('mouseleave','.showcase .js-element',function(){
		$(this).removeClass('hover');
		return false;
	});
	if(add_hidder == true)
	{
		RSGoPro_Hider();
	}
	if(RSGoPro_Hider_called) {
		RSGoPro_Hider();
	}
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:110:"/bitrix/templates/prostroy_default/components/bitrix/catalog.product.subscribe/gopro/script.js?147567488927339";s:6:"source";s:94:"/bitrix/templates/prostroy_default/components/bitrix/catalog.product.subscribe/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window) {

    if (!!window.JCCatalogProductSubscribe)
    {
        return;
    }

    var subscribeButton = function(params)
    {
        subscribeButton.superclass.constructor.apply(this, arguments);
        this.nameNode = BX.create('span', {
            props : { id : this.id },
            style: typeof(params.style) === 'object' ? params.style : {},
            text: params.text
        });
        this.buttonNode = BX.create('span', {
            attrs: { className: params.className },
            style: { marginBottom: '0', borderBottom: '0 none transparent' },
            children: [this.nameNode],
            events : this.contextEvents
        });
        if (BX.browser.IsIE())
        {
            this.buttonNode.setAttribute("hideFocus", "hidefocus");
        }
    };
    BX.extend(subscribeButton, BX.PopupWindowButton);

    window.JCCatalogProductSubscribe = function(params)
    {
        this.buttonId = params.buttonId;
        this.buttonClass = params.buttonClass;
        this.jsObject = params.jsObject;
        this.ajaxUrl = '/bitrix/components/bitrix/catalog.product.subscribe/ajax.php';
        this.alreadySubscribed = params.alreadySubscribed;
        this.urlListSubscriptions = params.urlListSubscriptions;
        this.listOldItemId = {};

        this.elemButtonSubscribe = null;
        this.elemPopupWin = null;
        this.defaultButtonClass = 'add2subscribe bx-catalog-subscribe-button';

        this._elemButtonSubscribeClickHandler = BX.delegate(this.subscribe, this);
        this._elemHiddenClickHandler = BX.delegate(this.checkSubscribe, this);

        BX.ready(BX.delegate(this.init,this));
    };

    window.JCCatalogProductSubscribe.prototype.init = function()
    {
        if (!!this.buttonId)
        {
            this.elemButtonSubscribe = BX(this.buttonId);
            this.elemHiddenSubscribe = BX(this.buttonId+'_hidden');
        }

        if (!!this.elemButtonSubscribe)
        {
            BX.bind(this.elemButtonSubscribe, 'click', this._elemButtonSubscribeClickHandler);
        }

        if (!!this.elemHiddenSubscribe)
        {
            BX.bind(this.elemHiddenSubscribe, 'click', this._elemHiddenClickHandler);
        }

        this.setButton(this.alreadySubscribed);
    };

    window.JCCatalogProductSubscribe.prototype.checkSubscribe = function()
    {
        if(!this.elemHiddenSubscribe || !this.elemButtonSubscribe) return;

        if(this.listOldItemId.hasOwnProperty(this.elemButtonSubscribe.dataset.item))
        {
            this.setButton(true);
        }
        else
        {
            BX.ajax({
                method: 'POST',
                dataType: 'json',
                url: this.ajaxUrl,
                data: {
                    sessid: BX.bitrix_sessid(),
                    checkSubscribe: 'Y',
                    itemId: this.elemButtonSubscribe.dataset.item
                },
                onsuccess: BX.delegate(function (result) {
                    if(result.subscribe)
                    {
                        this.setButton(true);
                        this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
                    }
                    else
                    {
                        this.setButton(false);
                    }
                }, this)
            });
        }
    };

    window.JCCatalogProductSubscribe.prototype.subscribe = function()
    {
        this.elemButtonSubscribe = BX.proxy_context;
        if(!this.elemButtonSubscribe) return false;

        BX.ajax({
            method: 'POST',
            dataType: 'json',
            url: this.ajaxUrl,
            data: {
                sessid: BX.bitrix_sessid(),
                subscribe: 'Y',
                itemId: this.elemButtonSubscribe.dataset.item,
                siteId: BX.message('SITE_ID')
            },
            onsuccess: BX.delegate(function (result) {
                if(result.success)
                {
                    this.createSuccessPopup(result);
                    this.setButton(true);
                    this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
                }
                else if(result.contactFormSubmit)
                {
                    this.initPopupWindow();
                    this.elemPopupWin.setTitleBar(BX.message('CPST_SUBSCRIBE_POPUP_TITLE'));
                    var form = this.createContentForPopup(result);
                    this.elemPopupWin.setContent(form);
                    this.elemPopupWin.setButtons([
                        new subscribeButton({
                            text: BX.message('CPST_SUBSCRIBE_BUTTON_NAME'),
                            className : 'btn btn-primary btn1',
                            events: {
                                click : BX.delegate(function() {
                                    if(!this.validateContactField(result.contactTypeData))
                                    {
                                        return false;
                                    }
                                    BX.ajax.submitAjax(form, {
                                        method : 'POST',
                                        url: this.ajaxUrl,
                                        processData : true,
                                        onsuccess: BX.delegate(function (resultForm) {
                                          
                                            resultForm = BX.parseJSON(resultForm, {});
                                            if(resultForm.success)
                                            {
                                                this.createSuccessPopup(resultForm);
                                                this.setButton(true);
                                                this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
                                            }
                                            else if(resultForm.error)
                                            {
                                                if(resultForm.hasOwnProperty('setButton'))
                                                {
                                                    this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
                                                    this.setButton(true);
                                                }
                                                var errorMessage = resultForm.message;
                                                if(resultForm.hasOwnProperty('typeName'))
                                                {
                                                    errorMessage = resultForm.message.replace('USER_CONTACT',
                                                        resultForm.typeName);
                                                }
                                                // BX('bx-catalog-subscribe-form-notify').style.color = 'red';
                                                // BX('bx-catalog-subscribe-form-notify').innerHTML = errorMessage;
                                                $('#CatalogSubscribe_'+this.elemButtonSubscribe.id).find('#bx-catalog-subscribe-form-notify').css({color: 'red'}).html(errorMessage);
                                            }
                                        }, this)
                                    });
                                }, this)
                            }
                        })/*,
                        new subscribeButton({
                            text : BX.message('CPST_SUBSCRIBE_BUTTON_CLOSE'),
                            className : 'btn',
                            events : {
                                click : BX.delegate(function() {
                                    this.elemPopupWin.close();
                                }, this)
                            }
                        })*/
                    ]);
                    this.elemPopupWin.show();
                }
                else if(result.error)
                {
                    if(result.hasOwnProperty('setButton'))
                    {
                        this.listOldItemId[this.elemButtonSubscribe.dataset.item] = true;
                        this.setButton(true);
                    }
                    this.showWindowWithAnswer({status: 'error', message: result.message});
                }
            }, this)
        });
    };

    window.JCCatalogProductSubscribe.prototype.validateContactField = function(contactTypeData)
    {
        var inputFields = BX.findChildren(BX('bx-catalog-subscribe-form'),
            {'tag': 'input', 'attribute': {id: 'userContact'}}, true);
        if(!inputFields.length || typeof contactTypeData !== 'object')
        {
            BX('bx-catalog-subscribe-form-notify').style.color = 'red';
            BX('bx-catalog-subscribe-form-notify').innerHTML = BX.message('CPST_SUBSCRIBE_VALIDATE_UNKNOW_ERROR');
            return false;
        }

        var contactTypeId, contactValue, useContact, errors = [], useContactErrors = [];
        for(var k = 0; k < inputFields.length; k++)
        {
            contactTypeId = inputFields[k].getAttribute('data-id');
            contactValue = inputFields[k].value;
            useContact = BX('bx-contact-use-'+contactTypeId);
            if(useContact && useContact.value == 'N')
            {
                useContactErrors.push(true);
                continue;
            }
            if(!contactValue.length)
            {
                errors.push(BX.message('CPST_SUBSCRIBE_VALIDATE_ERROR_EMPTY_FIELD').replace(
                    '#FIELD#', contactTypeData[contactTypeId].contactLable));
            }
        }

        if(inputFields.length == useContactErrors.length)
        {
            BX('bx-catalog-subscribe-form-notify').style.color = 'red';
            BX('bx-catalog-subscribe-form-notify').innerHTML = BX.message('CPST_SUBSCRIBE_VALIDATE_ERROR');
            return false;
        }

        if(errors.length)
        {
            BX('bx-catalog-subscribe-form-notify').style.color = 'red';
            for(var i = 0; i < errors.length; i++)
            {
                BX('bx-catalog-subscribe-form-notify').innerHTML = errors[i];
            }
            return false;
        }

        return true;
    };

    window.JCCatalogProductSubscribe.prototype.reloadCaptcha = function()
    {
        BX.ajax.get(this.ajaxUrl+'?reloadCaptcha=Y', '', function(captchaCode) {
            BX('captcha_sid').value = captchaCode;
            BX('captcha_img').src = '/bitrix/tools/captcha.php?captcha_sid='+captchaCode+'';
        });
    };

    window.JCCatalogProductSubscribe.prototype.createContentForPopup = function(responseData)
    {
        if(!responseData.hasOwnProperty('contactTypeData'))
        {
            return null;
        }

        var contactTypeData = responseData.contactTypeData, contactCount = Object.keys(contactTypeData).length,
            styleInputForm = '', manyContact = 'N', content = document.createDocumentFragment();

        if(contactCount > 1)
        {
            manyContact = 'Y';
            styleInputForm = 'display:none;';
            content.appendChild(BX.create('p', {
                text: BX.message('CPST_SUBSCRIBE_MANY_CONTACT_NOTIFY')
            }));
        }

        content.appendChild(BX.create('p', {
            props: {id: 'bx-catalog-subscribe-form-notify'}
        }));

        for(var k in contactTypeData)
        {
            if(contactCount > 1)
            {
                content.appendChild(BX.create('div', {
                    props: {
                        className: 'bx-catalog-subscribe-form-container'
                    },
                    children: [
                        BX.create('div', {
                            props: {
                                className: 'checkbox'
                            },
                            children: [
                                BX.create('lable', {
                                    props: {
                                        className: 'bx-filter-param-label'
                                    },
                                    attrs: {
                                        onclick: this.jsObject+'.selectContactType('+k+', event);'
                                    },
                                    children: [
                                        BX.create('input', {
                                            props: {
                                                type: 'hidden',
                                                id: 'bx-contact-use-'+k,
                                                name: 'contact['+k+'][use]',
                                                value: 'N'
                                            }
                                        }),
                                        BX.create('input', {
                                            props: {
                                                id: 'bx-contact-checkbox-'+k,
                                                type: 'checkbox'
                                            }
                                        }),
                                        BX.create('span', {
                                            props: {
                                                className: 'bx-filter-param-text'
                                            },
                                            text: contactTypeData[k].contactLable
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }));
            }
            content.appendChild(BX.create('div', {
                props: {
                    id: 'bx-catalog-subscribe-form-container-'+k,
                    className: 'bx-catalog-subscribe-form-container',
                    style: styleInputForm
                },
                children: [
                    BX.create('div', {
                        props: {
                            className: 'bx-catalog-subscribe-form-container-label'
                        },
                        text: BX.message('CPST_SUBSCRIBE_LABLE_CONTACT_INPUT').replace(
                            '#CONTACT#', contactTypeData[k].contactLable)
                    }),
                    BX.create('div', {
                        props: {
                            className: 'bx-catalog-subscribe-form-container-input'
                        },
                        children: [
                            BX.create('input', {
                                props: {
                                    id: 'userContact',
                                    className: '',
                                    type: 'text',
                                    name: 'contact['+k+'][user]'
                                },
                                attrs: {'data-id': k}
                            })
                        ]
                    })
                ]
            }));
        }
        if(responseData.hasOwnProperty('captchaCode'))
        {
            content.appendChild(BX.create('div', {
                props: {
                    className: 'bx-catalog-subscribe-form-container'
                },
                children: [
                    BX.create('span', {props: {className: 'bx-catalog-subscribe-form-star-required'}, text: '*'}),
                    BX.message('CPST_ENTER_WORD_PICTURE'),
                    BX.create('div', {
                        props: {className: 'bx-captcha'},
                        children: [
                            BX.create('input', {
                                props: {
                                    type: 'hidden',
                                    id: 'captcha_sid',
                                    name: 'captcha_sid',
                                    value: responseData.captchaCode
                                }
                            }),
                            BX.create('img', {
                                props: {
                                    id: 'captcha_img',
                                    src: '/bitrix/tools/captcha.php?captcha_sid='+responseData.captchaCode+''
                                },
                                attrs: {
                                    width: '180',
                                    height: '40',
                                    alt: 'captcha',
                                    onclick: this.jsObject+'.reloadCaptcha();'
                                }
                            })
                        ]
                    }),
                    BX.create('div', {
                        props: {className: 'bx-catalog-subscribe-form-container-input'},
                        children: [
                            BX.create('input', {
                                props: {
                                    id: 'captcha_word',
                                    className: '',
                                    type: 'text',
                                    name: 'captcha_word'
                                },
                                attrs: {maxlength: '50'}
                            })
                        ]
                    })
                ]
            }));
        }
        var form = BX.create('form', {
            props: {
                id: 'bx-catalog-subscribe-form'
            },
            children: [
                BX.create('input', {
                    props: {
                        type: 'hidden',
                        name: 'manyContact',
                        value: manyContact
                    }
                }),
                BX.create('input', {
                    props: {
                        type: 'hidden',
                        name: 'sessid',
                        value: BX.bitrix_sessid()
                    }
                }),
                BX.create('input', {
                    props: {
                        type: 'hidden',
                        name: 'itemId',
                        value: this.elemButtonSubscribe.dataset.item
                    }
                }),
                BX.create('input', {
                    props: {
                        type: 'hidden',
                        name: 'siteId',
                        value: BX.message('SITE_ID')
                    }
                }),
                BX.create('input', {
                    props: {
                        type: 'hidden',
                        name: 'contactFormSubmit',
                        value: 'Y'
                    }
                })
            ]
        });

        form.appendChild(content);

        return form;
    };

    window.JCCatalogProductSubscribe.prototype.selectContactType = function(contactTypeId, event)
    {
        var contactInput = BX('bx-catalog-subscribe-form-container-'+contactTypeId), visibility = '',
            checkboxInput = BX('bx-contact-checkbox-'+contactTypeId);
        if(!contactInput)
        {
            return false;
        }

        if(checkboxInput != event.target)
        {
            if(checkboxInput.checked)
            {
                checkboxInput.checked = false;
            }
            else
            {
                checkboxInput.checked = true;
            }
        }

        if (contactInput.currentStyle)
        {
            visibility = contactInput.currentStyle.display;
        }
        else if (window.getComputedStyle)
        {
            var computedStyle = window.getComputedStyle(contactInput, null);
            visibility = computedStyle.getPropertyValue('display');
        }

        if(visibility === 'none')
        {
            BX('bx-contact-use-'+contactTypeId).value = 'Y';
            BX.style(contactInput, 'display', '');
        }
        else
        {
            BX('bx-contact-use-'+contactTypeId).value = 'N';
            BX.style(contactInput, 'display', 'none');
        }
    };

    window.JCCatalogProductSubscribe.prototype.createSuccessPopup = function(result)
    {
        this.initPopupWindow();
        this.elemPopupWin.setTitleBar(BX.message('CPST_SUBSCRIBE_POPUP_TITLE'));
        var content = BX.create('div', {
            props:{
                className: 'bx-catalog-popup-content'
            },
            children: [
                BX.create('p', {
                    props: {
                        className: 'bx-catalog-popup-message'
                    },
                    text: result.message
                })
            ]
        });
        this.elemPopupWin.setContent(content);
        this.elemPopupWin.setButtons([
            new subscribeButton({
                text : BX.message('CPST_SUBSCRIBE_BUTTON_CLOSE'),
                className : 'btn btn-primary btn1',
                events : {
                    click : BX.delegate(function() {
                        this.elemPopupWin.close();
                    }, this)
                }
            })
        ]);
        this.elemPopupWin.show();
    };

    window.JCCatalogProductSubscribe.prototype.initPopupWindow = function()
    {
        if (!!this.elemPopupWin)
        {
            return;
        }
        this.elemPopupWin = BX.PopupWindowManager.create('CatalogSubscribe_'+this.buttonId, null, {
            autoHide: false,
            offsetLeft: 0,
            offsetTop: 0,
            overlay : true,
            closeByEsc: true,
            titleBar: true,
            closeIcon: true,
            contentColor: 'white',
            className: 'gopro-subscribe-window'
        });
    };

    window.JCCatalogProductSubscribe.prototype.setButton = function(statusSubscription)
    {
        this.alreadySubscribed = Boolean(statusSubscription);
        if(this.alreadySubscribed)
        {
            if ($('#'+this.elemButtonSubscribe.id).hasClass('icon')) {
              this.elemButtonSubscribe.className = this.buttonClass+' '+this.defaultButtonClass+' in';
              this.elemButtonSubscribe.title = BX.message('CPST_TITLE_ALREADY_SUBSCRIBED');
              this.elemButtonSubscribe.innerHTML = '<svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-document-edit"></use></svg>';
            } else {
              this.elemButtonSubscribe.className = this.defaultButtonClass+' in';
              this.elemButtonSubscribe.title = '';
              this.elemButtonSubscribe.innerHTML = BX.message('CPST_TITLE_ALREADY_SUBSCRIBED');
            }
            
            BX.unbind(this.elemButtonSubscribe, 'click', this._elemButtonSubscribeClickHandler);
        }
        else
        {
            if ($('#'+this.elemButtonSubscribe.id).hasClass('icon')) {
              this.elemButtonSubscribe.className = this.buttonClass+' '+this.defaultButtonClass;
              this.elemButtonSubscribe.title = BX.message('CPST_SUBSCRIBE_BUTTON_NAME');
              this.elemButtonSubscribe.innerHTML = '<svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-document-edit"></use></svg>';
            } else {
              this.elemButtonSubscribe.className = this.buttonClass+' '+this.defaultButtonClass;
              this.elemButtonSubscribe.title = '';
              this.elemButtonSubscribe.innerHTML = BX.message('CPST_SUBSCRIBE_BUTTON_NAME');
            }
            
            BX.bind(this.elemButtonSubscribe, 'click', this._elemButtonSubscribeClickHandler);
        }
        
    };

    window.JCCatalogProductSubscribe.prototype.showWindowWithAnswer = function(answer)
    {
        answer = answer || {};
        if (!answer.message) {
            if (answer.status == 'success') {
                answer.message = BX.message('CPST_STATUS_SUCCESS');
            } else {
                answer.message = BX.message('CPST_STATUS_ERROR');
            }
        }
        var messageBox = BX.create('div', {
            props: {
                className: 'bx-catalog-subscribe-alert'
            },
            children: [
                BX.create('span', {
                    props: {
                        className: 'bx-catalog-subscribe-aligner'
                    }
                }),
                BX.create('span', {
                    props: {
                        className: 'bx-catalog-subscribe-alert-text'
                    },
                    text: answer.message
                }),
                BX.create('div', {
                    props: {
                        className: 'bx-catalog-subscribe-alert-footer'
                    }
                })
            ]
        });
        var currentPopup = BX.PopupWindowManager.getCurrentPopup();
        if(currentPopup) {
            currentPopup.destroy();
        }
        var idTimeout = setTimeout(function () {
            var w = BX.PopupWindowManager.getCurrentPopup();
            if (!w || w.uniquePopupId != 'bx-catalog-subscribe-status-action') {
                return;
            }
            w.close();
            w.destroy();
        }, 3500);
        var popupConfirm = BX.PopupWindowManager.create('bx-catalog-subscribe-status-action', null, {
            content: messageBox,
            onPopupClose: function () {
                this.destroy();
                clearTimeout(idTimeout);
            },
            autoHide: true,
            zIndex: 2000,
            className: 'bx-catalog-subscribe-alert-popup gopro-subscribe-window'
        });
        popupConfirm.show();
        BX('bx-catalog-subscribe-status-action').onmouseover = function (e) {
            clearTimeout(idTimeout);
        };
        BX('bx-catalog-subscribe-status-action').onmouseout = function (e) {
            idTimeout = setTimeout(function () {
                var w = BX.PopupWindowManager.getCurrentPopup();
                if (!w || w.uniquePopupId != 'bx-catalog-subscribe-status-action') {
                    return;
                }
                w.close();
                w.destroy();
            }, 3500);
        };
    };

})(window);

$(document).ready(function(){
  $(document).on('click', '.popup-window-overlay', function(){
    var id = $(this).attr('id');
    if (id.indexOf('CatalogSubscribe') > 0) {
      var w = BX.PopupWindowManager.getCurrentPopup();
      w.close();
    }
  });
});

/* End */
;; /* /bitrix/templates/prostroy_default/components/bitrix/menu/catalog_left/script.js?1476360634587*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.smart.filter/gopro/script.js?147567488929414*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.compare.list/gopro/script.js?1475674889689*/
; /* /bitrix/templates/prostroy_default/components/redsign/catalog.sorter/gopro/script.js?14756748893196*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.section/gopro/script.js?14756748891333*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.product.subscribe/gopro/script.js?147567488927339*/
