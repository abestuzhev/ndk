
; /* Start:"a:4:{s:4:"full";s:100:"/bitrix/templates/prostroy_default/components/bitrix/catalog.element/gopro/script.js?147567488911327";s:6:"source";s:84:"/bitrix/templates/prostroy_default/components/bitrix/catalog.element/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_DetailBuy1Click = false,
	RSGoPro_DetailCheaper = false,
	RSGoPro_AfterLoading = false;

function RSGoPro_str_replace(search, replace, subject) {
	return subject.split(search).join(replace);
}

function RSGoPro_OnOfferChangeDetail($elementObj) {
	var finedOfferID = $elementObj.find('.js-add2basketpid').val();
	var element_id = $elementObj.data('elementid');
	if( finedOfferID>0 ) {
		// images
		$elementObj.find('.changeimage.imgoffer').hide().removeClass('scrollitem');
		$elementObj.find('.changeimage.imgofferid'+finedOfferID).show().addClass('scrollitem');
		$elementObj.find('.changeimage.imgofferid'+finedOfferID).filter(':first').trigger('click');
		RSGoPro_ScrollReinit('.d_jscrollpane');
		RSGoPro_ScrollReinit('.popd_jscrollpane');
		RSGoPro_ScrollReinit('.prs_jscrollpane');
		setTimeout(function(){
			$elementObj.find('.changeimage:visible:first').trigger('click');
		},50);
	}
}

function RSGoPro_DetailJScrollPaneReinitialize() {
	setTimeout(function(){ // fix for slow shit
		// images
		var pane2api;
		$('.d_jscrollpane').parents('.picslider').removeClass('jspHasScroll');
		$('.d_jscrollpane').each(function(i){
			pane2api = $(this).data('jsp');
			pane2api.reinitialise();
			if( $(this).hasClass('jspScrollable') ) {
				$(this).parents('.picslider').addClass('jspHasScroll');
			}
		});
		// images in fancy
		var pane2api;
		$('.popd_jscrollpane').parents('.picslider').removeClass('jspHasScroll');
		$('.popd_jscrollpane').each(function(i){
			pane2api = $(this).data('jsp');
			pane2api.reinitialise();
			if( $(this).hasClass('jspScrollable') ) {
				$(this).parents('.picslider').addClass('jspHasScroll');
			}
		});
		// prices
		var pane2api;
		$('.prs_jscrollpane').parents('.prices').removeClass('jspHasScroll');
		$('.prs_jscrollpane').each(function(i){
			pane2api = $(this).data('jsp');
			pane2api.reinitialise();
			if( $(this).hasClass('jspScrollable') ) {
				$(this).parents('.prices').addClass('jspHasScroll');
			}
		});
	},50);
}

function RSGoPro_FancyImagesOnUpdate() {
	setTimeout(function(){ // fix for slow shit
		$('.fancygallery').find('.image .max').css('maxHeight', parseInt($('.fancygallery').parents('.fancybox-inner').height())-5 );
		$('.fancygallery').find('.slider .max').css('height', parseInt($('.fancygallery').parents('.fancybox-inner').height())-5-60 );
	},50);
}
function RSGoPro_FancyChangeImageFix() {
	var genImageUrl = $('.fancybox-inner').find('.genimage').attr('src');
	$('.fancybox-inner').find('.changeimage').removeClass('selected');
	$('.fancybox-inner').find('.changeimage').each(function(i){
		if( genImageUrl==$(this).find('img').data('bigimage') ) {
			$(this).addClass('selected');
			RSGoPro_ScrollGoToElement( $(this) );
			return false;
		}
	});
}

function RSGoPro_ScrollToSelector(selector) {
	var scrollTopPos = $( selector ).offset().top + 'px';
	if(!RSDevFunc_PHONETABLET) {
		$('html,body').animate({
			scrollTop: scrollTopPos
		},500);
	} else {
		$('html,body').scrollTop( scrollTopPos )
	}
}

$(document).ready(function(){
	
	// zoom
	if(RSDevFunc_PHONETABLET) {
		$('.elementdetail').find('.zoom').hide();
	}
	
	// add this element to viewed list
	$(window).load(function(){
		setTimeout(function(){
			var viewedUrl = '/bitrix/components/bitrix/catalog.element/ajax.php';
			var viewedData = {
				AJAX		: 'Y',
				SITE_ID		: SITE_ID,
				PARENT_ID	: $('.elementdetail').data('elementid'),
				PRODUCT_ID	: $('.elementdetail').find('.js-add2basketpid').val()
			};
			$.ajax({
				type: 'POST',
				url: viewedUrl,
				data: viewedData
			}).done(function(response){
				console.warn( 'Element add to viewed' );
			}).fail(function(){
				console.warn( 'Element can\'t add to viewed' );
			});
		},500);
	});
	
	// change general image
	$(document).on('click','a.changeimage', function(){
		var $curLink = $(this);
		if( $curLink.parents('.d_jscrollpane').length>0 ) {
			var $jscrollpane = $curLink.parents('.d_jscrollpane');
		} else {
			var $jscrollpane = $curLink.parents('.popd_jscrollpane');
		}
		$jscrollpane.find('a.changeimage').removeClass('selected');
		var bigimage = $curLink.addClass('selected').find('img').data('bigimage');
		if( bigimage!='undefined' && bigimage!='' ) {
			$curLink.parents('.changegenimage').find('.genimage').attr('src', bigimage );
			RSGoPro_ScrollGoToElement( $curLink );
		}
		return false;
	});
	// set selected on general image
	var genImageUrl = $('.elementdetail').find('.genimage').attr('src');
	$('.elementdetail').find('.sliderin').find('.changeimage').removeClass('selected');
	$('.elementdetail').find('.sliderin').find('.changeimage').each(function(i){
		if( genImageUrl==$(this).find('img').data('bigimage') ) {
			$(this).addClass('selected');
			return false;
		}
	});
	
	// jScrollPane -> images and prices
	RSGoPro_ScrollInit('.d_jscrollpane');
	RSGoPro_ScrollInit('.popd_jscrollpane');
	RSGoPro_ScrollInit('.prs_jscrollpane');
	$(window).resize(function(){
		RSGoPro_ScrollReinit('.d_jscrollpane');
		RSGoPro_ScrollReinit('.popd_jscrollpane');
		RSGoPro_ScrollReinit('.prs_jscrollpane');
	});
	
	// Fancybox -> gallery
	if(!RSDevFunc_PHONETABLET) {
		$(document).on('click','.glass_lupa',function(){
			$.fancybox.open(
				$('.fancyimages'),
				{
					type			: 'inline',
					width			: '100%',
					height			: '100%',
					autoSize		: false,
					padding			: 20,
					tpl				: {
						closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="icon pngicons"></i></a>',
					},
					helpers			: {
						title : {
							type : 'inside',
							position : 'top'
						}
					},
					beforeShow		: function(){ RSGoPro_FancyImagesOnUpdate(); },
					afterShow		: function(){ RSGoPro_DetailJScrollPaneReinitialize();RSGoPro_FancyChangeImageFix(); },
					onUpdate		: function(){ RSGoPro_FancyImagesOnUpdate();RSGoPro_DetailJScrollPaneReinitialize(); }
				}
			);
			
			return false;
		});
		
		// stores
		$('.genamount:not(.cantopen)').fancybox({
			maxWidth		: 800,
			maxHeight		: 600,
			minHeight		: 25,
			fitToView		: false,
			openEffect		: 'none',
			closeEffect		: 'none',
			padding			: 20,
			tpl				: {
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="icon pngicons"></i></a>',
			},
			helpers			: {
				title : {
					type : 'inside',
					position : 'top'
				}
			}
		});
	} else {
		$(document).on('click','.genamount:not(.cantopen)',function(){
			var id = $(this).attr('href');
			$(id).toggleClass('noned').removeAttr('style');
			return false;
		});
	}
	
	// tabs
	$(document).on('click','.tabs .switcher',function(){
		var $switcher = $(this);
		var $tabs = $switcher.parents('.tabs');
		var id = $switcher.attr('href');
		$tabs.find('.switcher').removeClass('selected');
		$tabs.find('.content').removeClass('selected');
		$tabs.find('.switcher[href="'+id+'"]').addClass('selected');
		$tabs.find(id).addClass('selected');
		if(RSGoPro_AfterLoading) {
			if(RSDevFunc_PHONETABLET && $switcher.parent().hasClass('headers')==false) {
				setTimeout(function(){ // fix for slow shit
					var scrollTop = $switcher.offset().top - 8;
					$('html,body').scrollTop(scrollTop);
				},50);
			}
			$(document).trigger('detaltabchange');
			var scrollV = document.body.scrollTop;
	        var scrollH = document.body.scrollLeft;
			document.location.hash = RSGoPro_str_replace('#','',id);
			document.body.scrollTop = scrollV;
	        document.body.scrollLeft = scrollH;
	    }
		return false;
	});
	$(document).on('click','.anchor .switcher',function(){
		RSGoPro_ScrollToSelector( '.contents .switcher[href="'+$(this).attr('href')+'"]' );
		$(document).trigger('detaltabchange');
		return false;
	});
	$(window).load(function(){
		var r = RSDevFunc_GetUrlVars()['result'];
		if( r ) {
			r = r.substr(0,r.indexOf('#'));
		}
        
        $('.detailtabs.tabs').each(function() {
            var $tabs = $(this);
            if( window.location.hash=='#postform' || (r && r=='reply')	) {
                $tabs.find('.switcher[href="#review"]').trigger('click');
            } else if( $tabs.find('.switcher[href="'+window.location.hash+'"]').length>0 ) {
                $tabs.find('.switcher[href="'+window.location.hash+'"]').trigger('click');
            } else {
                $tabs.find('.switcher:first').trigger('click');
            }
        });
        
		$('.detailtabs.anchor').find('.switcher:first').addClass('selected');
		RSGoPro_AfterLoading = true;
	});
	$(window).on('hashchange', function(){
		if(RSGoPro_AfterLoading) {
			$('.detailtabs.tabs').find('.switcher[href="'+window.location.hash+'"]').trigger('click');
		}
	});
	// tabs -> add review
	$(document).on('click','.add2review',function(e){
		e.stopPropagation();
		$('#detailreviews').find('.reviewform').toggleClass('noned');
		return false;
	});
	
	// change offer
	$(document).on('RSGoProOnOfferChange',function(e,elementObj){
		RSGoPro_OnOfferChangeDetail(elementObj);
		if( $('.elementdetail').find('.soloprice').length>0 ) {
			if( $('.elementdetail').find('.soloprice').find('.discount').html()=='' ) {
				$('.elementdetail').find('.soloprice').find('.hideifzero').hide();
			} else {
				$('.elementdetail').find('.soloprice').find('.hideifzero').show();
			}
		}
	});
	
	// buy1click
	$(document).on('click','.buy1click.detail',function(e){
		RSGoPro_DetailBuy1Click = true;
	});
	// buy1click - put data to form
	$(document).on('RSGoProOnFancyBeforeShow',function(){
		if(RSGoPro_DetailBuy1Click) {
			var value = '';
			value = BX.message("RSGoPro_DETAIL_PROD_ID") + ': ' + $('.elementdetail').find('.js-add2basketpid').val() + '\n' +
				BX.message("RSGoPro_DETAIL_PROD_NAME") + ': ' + $('.elementdetail').data('elementname') + '\n' +
				BX.message("RSGoPro_DETAIL_PROD_LINK") + ': ' + window.location.href + '\n' +
				'-----------------------------------------------------';
			$('.fancybox-inner').find('textarea[name="RS_AUTHOR_ORDER_LIST"]').text( value );
		}
		RSGoPro_DetailBuy1Click = false;
	});
	
	// cheaper
	$(document).on('click','.cheaper.detail',function(e){
		RSGoPro_DetailCheaper = true;
	});
	// cheaper - put data to form
	$(document).on('RSGoProOnFancyBeforeShow',function(){
		if(RSGoPro_DetailCheaper) {
			var value = '';
			value = BX.message("RSGoPro_DETAIL_CHEAPER_TITLE") + '\n' +
				+ '\n' +
				BX.message("RSGoPro_DETAIL_PROD_ID") + ': ' + $('.elementdetail').find('.js-add2basketpid').val() + '\n' +
				BX.message("RSGoPro_DETAIL_PROD_NAME") + ': ' + $('.elementdetail').data('elementname') + '\n' +
				BX.message("RSGoPro_DETAIL_PROD_LINK") + ': ' + window.location.href + '\n' +
				'-----------------------------------------------------';
			$('.fancybox-inner').find('textarea[name="RS_AUTHOR_COMMENT"]').text( value );
		}
		RSGoPro_DetailCheaper = false;
	});
	
	$(document).on('click','.go2detailfrompreview',function(){
		$('.detailtabs.tabs').find('.switcher[href="#detailtext"]').trigger('click');
		RSGoPro_ScrollToSelector( '.switcher[href="#detailtext"]' );
		return false;
	});
	
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
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/prostroy_default/components/bitrix/forum.topic.reviews/gopro/script.js?14756748891822";s:6:"source";s:88:"/bitrix/templates/prostroy_default/components/bitrix/forum.topic.reviews/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_Separator = ":SEPARATOR:";

function RSGoPro_SummComment(forma)
{
	var $reviewform = $(forma);
	var newVal = $reviewform.find('input[name="REVIEW_TEXT_rate"]').val() + RSGoPro_Separator + 
		$reviewform.find('textarea[name="REVIEW_TEXT_plus"]').val() + RSGoPro_Separator + 
		$reviewform.find('textarea[name="REVIEW_TEXT_minus"]').val() + RSGoPro_Separator + 
		$reviewform.find('textarea[name="REVIEW_TEXT_comment"]').val();
	if($reviewform.find('textarea[name="REVIEW_TEXT_comment"]').val()=="")
		newVal = '';
	$reviewform.find('textarea[name="REVIEW_TEXT"]').val( newVal );
	if( trim($('textarea[name="REVIEW_TEXT_comment"]').val()) )
	{
		return true;
	} else {
		$reviewform.find('textarea[name="REVIEW_TEXT_comment"]').css('border','1px solid red');
		setTimeout(function(){
			$reviewform.find('textarea[name="REVIEW_TEXT_comment"]').css('border','');
		},1200);
		return false;
	}
}

function trim(s) {
	return s.replace(/(^\s*)|(\s*$)/,"");
}

$(document).ready(function(){
	
	// rating - click
	$(document).on('click','.rating a',function(){
		var $thisA = $(this);
		var this_id = $thisA.data('id');
		$thisA.parents('.rating').find('a').each(function(index){
			$(this).removeClass('selected');
			if( $(this).data('id')<=this_id )
			{
				$(this).addClass('selected');
			}
		});
		$thisA.parents('.rating').find('input[name="REVIEW_TEXT_rate"]').val( this_id );
		return false;
	});
	// rating - hover
	$(document).on('mouseenter','.rating a',function(){
		var $thisA = $(this);
		var this_id = $thisA.data('id');
		$thisA.parents('.rating').find('a').removeClass('hover').each(function(index){
			if( $(this).data('id')<=this_id )
			{
				$(this).addClass('hover');
			}
		});
	}).on('mouseleave','.rating a',function(){
		$(this).parents('.rating').find('a').removeClass('hover');
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
;; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.element/gopro/script.js?147567488911327*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.product.subscribe/gopro/script.js?147567488927339*/
; /* /bitrix/templates/prostroy_default/components/bitrix/forum.topic.reviews/gopro/script.js?14756748891822*/
; /* /bitrix/templates/prostroy_default/components/redsign/catalog.sorter/gopro/script.js?14756748893196*/
; /* /bitrix/templates/prostroy_default/components/bitrix/catalog.section/gopro/script.js?14756748891333*/
