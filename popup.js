<style> 
   /*! CSS Used from: Embedded */
        .eapp-popup-button-component{
            overflow:hidden;
            box-sizing:border-box;
            -webkit-justify-content:center;
            justify-content:center;
            -webkit-align-items:center;
            align-items:center;
            width:100%;
            padding:0 12px;
            outline:none;
            white-space:nowrap;
            text-overflow:ellipsis;
            font-weight:700;
            line-height:1;
            transition-property:border-color, background-color, color;
            transition-duration:0.2s;
            transition-timing-function:ease;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-control-close-component{
            padding:4px;
            outline:none;
        }
        .eapp-popup-control-close-icon{
            display:block;
            width:10px;
            height:10px;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-modal-overlay-component{
            opacity:0;
            background-repeat:no-repeat;
            background-size:cover;
            background-position:center;
            transition:opacity 0.2s ease;
            transition-delay:0.15s;
        }
        .eapp-popup-modal-overlay-component.eapp-popup-modal-overlay-component-transition-entered{
            opacity:1;
            transition-delay:0s;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-block-variation-button-component{
            padding-top:12px;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-block-variation-coupon-component{
            padding-top:12px;
        }
        .eapp-popup-block-variation-coupon-area{
            position:relative;
            box-sizing:border-box;
            -webkit-justify-content:center;
            justify-content:center;
            -webkit-align-items:center;
            align-items:center;
            width:100%;
            padding:0 12px;
            border:1px dashed;
            outline:none;
            white-space:nowrap;
            text-overflow:ellipsis;
            line-height:1;
            transition:background-color 0.2s ease;
        }
        .eapp-popup-block-variation-coupon-tooltip{
            position:absolute;
            z-index:1;
            visibility:hidden;
            top:0;
            right:0;
            bottom:50%;
            left:0;
            text-align:center;
            font-size:8px;
            line-height:1.5;
            opacity:0;
            transition:visibility 0.2s linear, opacity 0.2s ease-in-out;
        }
        .eapp-popup-block-variation-coupon-area:hover .eapp-popup-block-variation-coupon-tooltip{
            visibility:visible;
            opacity:1;
        }
        .eapp-popup-block-variation-coupon-code{
            position:relative;
            z-index:3;
            font-weight:700;
            -webkit-transform:translate3d(0, 0, 0);
            transform:translate3d(0, 0, 0);
            transition:-webkit-transform 0.2s ease-in-out;
            transition:transform 0.2s ease-in-out;
            transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
        }
        .eapp-popup-block-variation-coupon-component:not(.eapp-popup-block-variation-coupon-copied) .eapp-popup-block-variation-coupon-area:hover .eapp-popup-block-variation-coupon-code{
            -webkit-transform:translate3d(0, 4px, 0);
            transform:translate3d(0, 4px, 0);
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-block-variation-text-component{
            line-height:1.38;
        }
        .eapp-popup-block-variation-text-text{
            line-height:inherit;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-block-variation-image-component{
            content:'';
        }
        .eapp-popup-block-variation-image-img{
            display:block;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-block-variation-spacing-component{
            content:'';
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-block-variation-title-component{
            line-height:1.1;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-content-blocks-container-component.eapp-popup-content-blocks-container-paddings-medium{
            padding:40px;
        }
        .eapp-popup-content-blocks-container-paddings-medium .eapp-popup-content-blocks-container-item:not(:first-child){
            margin-top:16px;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-content-component{
            position:relative;
            height:100%;
        }
        .eapp-popup-content-main{
            height:100%;
        }
        .eapp-popup-content-outer{
            display:-webkit-flex;
            display:flex;
            position:relative;
            -webkit-flex:1 0 auto;
            flex:1 0 auto;
            -webkit-align-items:center;
            align-items:center;
            min-height:200px;
            background-repeat:no-repeat;
            background-size:cover;
            background-position:center;
        }
        .eapp-popup-content-outer-image-overlay{
            position:absolute;
            z-index:1;
            top:0;
            right:0;
            bottom:0;
            left:0;
        }
        .eapp-popup-content-inner{
            position:relative;
            z-index:2;
            -webkit-flex-grow:1;
            flex-grow:1;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-layout-variation-modal-component{
            padding:10px;
            transition:visibility 0.3s linear;
        }
        .eapp-popup-layout-variation-modal-content-container{
            overflow:hidden;
            opacity:0;
            -webkit-transform:translate3d(0, 20px, 0);
            transform:translate3d(0, 20px, 0);
            transition:opacity 0.3s ease, -webkit-transform 0.4s ease;
            transition:opacity 0.3s ease, transform 0.4s ease;
            transition:opacity 0.3s ease, transform 0.4s ease, -webkit-transform 0.4s ease;
            margin:auto;
        }
        .eapp-popup-layout-variation-modal-content-container.eapp-popup-layout-variation-modal-content-container-transition-entered{
            opacity:1;
            -webkit-transform:translate3d(0, 0, 0);
            transform:translate3d(0, 0, 0);
            transition-delay:0.1s;
        }
        /*! CSS Used from: Embedded */
        .eapp-popup-control-close-component.jsx-2881417189{
            top:12px;
            right:12px;
        }
        .eapp-popup-control-close-component.jsx-2881417189 path{
            fill:rgba(255, 255, 255, 0.7);
        }
        .eapp-popup-block-variation-image-img.jsx-3400482160{
            max-width:56%;
        }
        .eapp-popup-block-variation-spacing-component.jsx-651102099{
            height:16px;
        }
        .eapp-popup-block-variation-title-component.jsx-711716781{
            text-align:center;
            font-weight:700;
            font-size:28px;
            color:rgb(255, 255, 255);
        }
        .eapp-popup-block-variation-title-component.jsx-952473858{
            text-align:center;
            font-weight:700;
            font-size:50px;
            color:rgb(255, 255, 255);
        }
        .eapp-popup-block-variation-text-text.jsx-2715126705{
            text-align:center;
            font-size:20px;
            color:rgb(255, 255, 255);
        }
        .eapp-popup-block-variation-coupon-area.jsx-2749092036{
            height:48px;
            border-color:rgba(255, 255, 255, 0.5);
            background-color:rgba(255, 255, 255, 0.05);
            font-size:16px;
            color:rgb(255, 255, 255);
        }
        .eapp-popup-block-variation-coupon-area.jsx-2749092036:hover,.eapp-popup-block-variation-coupon-area.jsx-2749092036:focus{
            background-color:rgba(255, 255, 255, 0.08);
        }
        .eapp-popup-block-variation-coupon-tooltip.jsx-2749092036{
            background-image:linear-gradient(rgba(17, 17, 17, 0.5), transparent);
        }
        .eapp-popup-button-component.jsx-3403832932{
            height:48px;
            border-color:rgb(255, 255, 255);
            background-color:rgb(255, 38, 67);
            font-size:16px;
            color:rgb(255, 255, 255);
        }
        .eapp-popup-button-component.jsx-3403832932:hover{
            border-color:rgb(255, 255, 255);
            background-color:rgb(255, 60, 86);
            color:rgb(255, 255, 255);
        }
        /*! CSS Used from: Embedded */
        .bhCgZe{
            display:inline-flex;
            cursor:pointer;
        }
        .dRKFRl{
            display:flex;
        }
        .jyfuVZ{
            flex-direction:column;
            display:flex;
        }
        .fWQEQp{
            -webkit-box-pack:center;
            justify-content:center;
            display:flex;
        }
        .enfMWB{
            -webkit-box-align:center;
            align-items:center;
            -webkit-box-pack:center;
            justify-content:center;
            display:flex;
        }
        .jBExIs{
            flex-basis:0px;
            -webkit-box-flex:1;
            flex-grow:1;
            min-width:0px;
        }
        .cDvFSS{
            min-width:0px;
        }
        .epHMcu{
            align-items:flex-start;
            -webkit-box-pack:center;
            justify-content:center;
            display:flex;
            position:fixed;
            visibility:visible;
            z-index:2000000000;
            pointer-events:none;
            top:0px;
            right:0px;
            bottom:0px;
            left:0px;
        }
        .envSuS{
            position:fixed;
            z-index:1;
            pointer-events:all;
            top:0px;
            right:0px;
            bottom:0px;
            left:0px;
        }
        .bzgeF{
            flex-basis:420px;
            min-width:0px;
            position:relative;
            z-index:2;
            pointer-events:all;
        }
        .cLmiHt{
            position:absolute;
            z-index:3;
            pointer-events:all;
        }
        </style>
<!-- Popup -->

<div id="MrAminBen_popup"
    class="FlexContainer-lh6d3k-0 ModalWindow__Window-sc-1rlc96w-0 epHMcu eapp-popup-layout-variation-modal-component eapp-popup-layout-variation-modal-component-enter-done"
    role="dialog" tabindex="-1" aria-modal="true" style="pointer-events: all;display:none;">
    <div class="ModalBackdrop__Backdrop-sc-873age-0 envSuS eapp-popup-modal-overlay-component eapp-popup-modal-overlay-component-transition-entered"
        style="background-color: rgba(17, 17, 17, 0.7);"></div>
  
  
    <div class="FlexItem-rdg44b-0 ModalContent__Content-sc-1lyzazn-0 bzgeF eapp-popup-layout-variation-modal-content-container eapp-popup-layout-variation-modal-content-container-transition-entered"
        role="document">
        <div class="FlexContainer-lh6d3k-0 dRKFRl eapp-popup-content-component">
            <div onclick="MrAminBen_popup()"
                class="Button__Block-sc-1c0eo6i-0 bhCgZe ModalControl__Control-sc-1dl29es-0 cLmiHt jsx-2881417189 eapp-popup-control-close-component transition-exited"
                tabindex="0" role="button">
                <svg viewBox="0 0 10 10" class="eapp-popup-control-close-icon">
                    <path fill-rule="nonzero"
                        d="M6.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414L5 6.414 1.707 9.707A1 1 0 1 1 .293 8.293L3.586 5 .293 1.707A1 1 0 0 1 1.707.293L5 3.586 8.293.293a1 1 0 0 1 1.414 1.414L6.414 5z">
                    </path>
                </svg>
            </div>
            <div class="FlexItem-rdg44b-0 jBExIs">
                <div class="FlexContainer-lh6d3k-0 jyfuVZ eapp-popup-content-main">
                    <div class="FlexItem-rdg44b-0 cDvFSS eapp-popup-content-outer"
                        style="background-image: url('https://i.imgur.com/P5X93wx.png');">
                        <div class="eapp-popup-content-outer-image-overlay"
                            style="background-color: rgba(17, 17, 17, 0.6);"></div>
                        <div class="eapp-popup-content-inner">
                            <div
                                class="eapp-popup-content-blocks-container-component eapp-popup-content-blocks-container-paddings-medium">
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div
                                        class="FlexContainer-lh6d3k-0 fWQEQp eapp-popup-block-variation-image-component">
                                        <div class="FlexContainer-lh6d3k-0 enfMWB">
                                            <img src="https://files.elfsight.com/storage/4bc9e068-6999-4781-ad0c-ab83bceba5ea/84590d74-76f1-4519-8a17-553116fd9de7.png"
                                                alt="" class="jsx-3400482160 eapp-popup-block-variation-image-img" />
                                        </div>
                                    </div>
                                </div>
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div class="jsx-651102099 eapp-popup-block-variation-spacing-component"></div>
                                </div>
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div class="jsx-711716781 eapp-popup-block-variation-title-component"> عروض موسم الصيف                                   !</div>
                                </div>
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div class="jsx-952473858 eapp-popup-block-variation-title-component"> تخفيضات تصل
                                        الى 50%-</div>
                                </div>
                              
                              
                              
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div class="jsx-2715126705 eapp-popup-block-variation-text-component">
                                        <div class="jsx-2715126705 eapp-popup-block-variation-text-text">رقم القسيمة
                                            :<br /></div>
                                    </div>
                                </div>
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div class="jsx-2749092036 eapp-popup-block-variation-coupon-component">
                                        <div class="Button__Block-sc-1c0eo6i-0 bhCgZe jsx-2749092036 eapp-popup-block-variation-coupon-area"
                                            tabindex="0" role="button">
                                            <div class="jsx-2749092036 eapp-popup-block-variation-coupon-tooltip">قم
                                                بنسخ الرمز</div>
                                            <div class="eapp-popup-block-variation-coupon-code">GET50</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="eapp-popup-content-blocks-container-item">
                                    <div class="eapp-popup-block-variation-button-component">
                                        <div></div>
                                        >
                                            <a class="Button__Block-sc-1c0eo6i-0 bhCgZe jsx-3403832932 eapp-popup-button-component"
    tabindex="0" role="button" href="javascript:void(0);" onclick="closePopup()">ابدأ التسوق</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Popup  || Coded By MrAminBen -->
<script> function MrAminBen_popup(){
    document.getElementById("MrAminBen_popup").style.display='none';
}

function setCookie( c_name, value, exdays ) {
	var c_value = escape(value);
	if (exdays) {
		var exdate = new Date();
		exdate.setDate( exdate.getDate() + exdays );
		c_value += '; expires=' + exdate.toUTCString();
	}
	document.cookie = c_name + '=' + c_value;
}

function getCookie( c_name ) {
	var i, x, y, cookies = document.cookie.split( ';' );

	for ( i = 0; i < cookies.length; i++ ) {
		x = cookies[i].substr( 0, cookies[i].indexOf( '=') );
		y = cookies[i].substr( cookies[i].indexOf( '=') + 1 );
		x = x.replace( /^\s+|\s+$/g, '' );

		if ( x === c_name ) {
			return unescape( y );
		}
	}
}
window.setTimeout(function(){ 
	// When the cookie exists, do not show the popup!
	if (getCookie('Popupdisplayed')) {
		return;
	}

	    document.getElementById("MrAminBen_popup").style.display='flex';
// The popup was displayed. Set the cookie for 1 day.
	setCookie('Popupdisplayed', 'yes', 1);
}, 3000);

if ( window.location.pathname == '/' ){
 $('section').first().css({background: "center 0 no-repeat url(https://i.ifdbb.co/BjNFkbw/my.png)"});
 $('.categories-style-1').css("grid-template-columns", "repeat(2,1fr)");
 $('.category-details').css("border-top", "0");
$('.review-details').css("height", "160px");
}
function closePopup() {
    var popup = document.getElementById("MrAminBen_popup");
    if (popup) {
        popup.style.display = "none";
    }
}

</script>