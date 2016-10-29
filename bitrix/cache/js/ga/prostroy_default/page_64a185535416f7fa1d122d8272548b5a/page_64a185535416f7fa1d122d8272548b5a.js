
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
; /* Start:"a:4:{s:4:"full";s:95:"/bitrix/templates/prostroy_default/components/bitrix/news.list/banners/script.js?14756748893244";s:6:"source";s:80:"/bitrix/templates/prostroy_default/components/bitrix/news.list/banners/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	if(parseInt(RSGOPRO_change_speed)<1)
		RSGOPRO_change_speed = 2000;
	if(parseInt(RSGOPRO_change_delay)<0)
		RSGOPRO_change_delay = 8000;
	
	if($('#jssor_slider1').find('.item').length>0)
	{
		var options = {
			$AutoPlay: 1,										//[Optional] Whether to auto play, to enable slideshow, this option must be set to true
			$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
			$AutoPlayInterval: RSGOPRO_change_delay,			//[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing
			$SlideDuration: RSGOPRO_change_speed,               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

			$DirectionNavigatorOptions: {                       //[Optional] Options to specify and enable direction navigator or not
				$Class: $JssorDirectionNavigator$,              //[Requried] Class to create direction navigator instance
				$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
				$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
				$Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
			},
			
			$NavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
				$Class: $JssorNavigator$,                       //[Required] Class to create navigator instance
				$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
				$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
				$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
				$SpacingX: 13,                                  //[Optional] Horizontal space between each item in pixel, default value is 0
				$SpacingY: 13,                                  //[Optional] Vertical space between each item in pixel, default value is 0
				$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
			}
		};
		var jssor_slider1 = new $JssorSlider$("jssor_slider1", options);
		// responsive code begin
		function RSGOPRO_ScaleSlider() 
		{
			var parentWidth = $('#jssor_slider1').parent().width();
			if (parentWidth) {
				if( parentWidth<988 ) {
					jssor_slider1.$SetScaleWidth(parentWidth);
				} else {
					jssor_slider1.$SetScaleWidth(1240);
				}
			} else {
				window.setTimeout(RSGOPRO_ScaleSlider, 30);
			}
		}
		RSGOPRO_ScaleSlider();
		$(window).bind('resize', RSGOPRO_ScaleSlider);
		// responsive code end
	}
	
	// play video
	$('.aroundjssorslider1').find('video').each(function(){
		if( $(this).attr('autoplay')=='autoplay' ) {
			$(this).get(0).play();
		}
	});
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/prostroy_default/components/bitrix/catalog.section.list/main/script.js?14756748891257";s:6:"source";s:88:"/bitrix/templates/prostroy_default/components/bitrix/catalog.section.list/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGOPRO_SetHeight()
{
	setTimeout(function(){
		// reset
		$('.mainsections').find('li.section').css('minHeight',0);
		// in line
		var position = $('.mainsections').find('li.section:first').offset().top;
		var last_index = 0;
		var max_height = 0;
		$('.mainsections').find('li.section').each(function(i){
			if( $(this).offset().top!=position )
			{
				if(last_index>0)
				{
					$('.mainsections').find('li.section:lt('+(i)+'):gt('+last_index+')').css('minHeight',max_height);
				} else {
					$('.mainsections').find('li.section:lt('+(i)+')').css('minHeight',max_height);
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
			$('.mainsections').find('li.section:gt('+last_index+')').css('minHeight',max_height);
		else
			$('.mainsections').find('li.section').css('minHeight',max_height);
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
; /* /bitrix/templates/prostroy_default/components/bitrix/news.list/banners/script.js?14756748893244*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.section.list/main/script.js?14756748891257*/
; /* /bitrix/templates/prostroy_default/components/redsign/catalog.sorter/gopro/script.js?14756748893196*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.section/gopro/script.js?14756748891333*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.product.subscribe/gopro/script.js?147567488927339*/
