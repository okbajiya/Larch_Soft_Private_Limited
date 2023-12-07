$(document).ready(function(){$(".customer-logos").slick({slidesToShow:10,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,arrows:!1,dots:!1,pauseOnHover:!1,responsive:[{breakpoint:768,settings:{slidesToShow:4}},{breakpoint:520,settings:{slidesToShow:3}}]})}),$(document).ready(function(){$("#owl-demo-one").owlCarousel({navigation:!0}),$("#owl-demo-three").owlCarousel({navigation:!0}),$("#home-city-slide").owlCarousel({navigation:!0}),$("#owl-why-us-block").owlCarousel({navigation:!0})}),$(document).ready(function(){$("#main-menu > li:has(ul.sub-menu)").addClass("parent"),$("ul.sub-menu > li:has(ul.sub-menu) > a").addClass("parent"),$("#menu-toggle").click(function(){return $("#main-menu").slideToggle(300),!1}),$(window).resize(function(){$(window).width()>700&&$("#main-menu").removeAttr("style")})}),$(document).ready(function(){$("#owl-demo-featured-ban").owlCarousel({autoPlay:5e3,items:4,navigation:!0}),$("#top-build-log").owlCarousel({autoPlay:5e3,items:8,navigation:!0}),$("#tab-commercial").owlCarousel({autoPlay:5e3,items:4,navigation:!0}),$("#newsapdate-caousal").owlCarousel({autoPlay:5e3,items:4,navigation:!0})}),$(document).ready(function(){$("#testimonial-slider").owlCarousel({items:3,itemsDesktop:[1e3,2],itemsDesktopSmall:[979,2],itemsDesktopSmall:[912,2],itemsTablet:[768,2],itemsMobile:[650,1],pagination:!1,navigation:!0,slideSpeed:1e3,autoPlay:!0})}),$("#abc-1").carousel({interval:4e3,wrap:!0,keyboard:!0}),$("#abc-2").carousel({interval:6e3,wrap:!0,keyboard:!0}),$(".top-brand").owlCarousel({loop:!0,dots:!1,nav:!0,autoplay:!0,slideSpeed:1e3,responsive:{0:{items:1},600:{items:2},992:{items:3},1080:{items:3},1200:{items:5}}}),$(".dadi").owlCarousel({loop:!0,dots:!1,nav:!0,autoplay:!0,slideSpeed:1e3,navText:["<img src='front/images/chevron-right.svg' alt='arrow icon'>","<img src='front/images/chevron-right.svg' alt='arrow icon'>"],responsive:{0:{items:1},600:{items:4},992:{items:3},1080:{items:3},1200:{items:4}}}),$(".news-media").owlCarousel({loop:!0,dots:!1,nav:!0,autoplay:!0,navText:["<img src='front/images/chevron-right.svg' alt='arrow icon'>","<img src='front/images/chevron-right.svg' alt='arrow icon'>"],responsive:{0:{items:1},600:{items:2},992:{items:3},1080:{items:3},1200:{items:3}}}),$(".videotesti").owlCarousel({loop:!0,dots:!1,nav:!0,autoplay:!0,slideSpeed:1e3,navText:["<img src='front/images/chevron-right.svg' alt='arrow icon'>","<img src='front/images/chevron-right.svg' alt='arrow icon'>"],responsive:{0:{items:1},600:{items:2},992:{items:3},1080:{items:3},1200:{items:3}}});
//window.onload = (event) => { initGallery(); }
function initGallery(){var a=gsap.timeline();a.to(".hp-header",{opacity:1,duration:.5},"start"),$(".hp-gallery")[0]&&(a.to('.hp-gallery-item[data-index="0"] img',{scale:1.15,duration:10},"start"),$(".hp-gallery").slick({arrows:!1,autoplay:!0,autoplaySpeed:5e3,infinite:!0,speed:1e3,fade:!0,pauseOnHover:!1,pauseOnFocus:!1,swipe:!1,lazyLoad:"ondemand"}),$(".hp-gallery").on("beforeChange",function(a,b,c,d){var e=$('.slick-slide[data-slick-index="'+d+'"] .hp-gallery-item img');gsap.to(e,{scale:1.15,duration:10,onComplete:function(){gsap.set(".slick-slide .hp-gallery-item img",{scale:1})}})}))}




$(document).ready(function() {   
     setTimeout(function() {initGallery();}, 2500);
     $('.overlay__close, .overlay__close hr, .overlay__scroll').click(hideOverlay);
});


$(document).on('keyup','#token-input-property_search',function(){
    var query = $(this).val();
    var city = $(".search-city").val();
    if(query!="")
    {
        $.ajax({
            type: "GET",
            url: "<?php echo url('api/autocomplete_data'); ?>",
            data: {q:query, city:city},
            beforeSend:function(){ $(".naseemSearch").html('<li class="list-items">Searcing ...</li>'); },
            dataType: 'json',
            success: function(result){
                var html_li = ''; 
                $.each(result.data, function(index, element) {
                    html_li += '<li class="list-items">'+element.title+'</li>';
                });
                if(html_li!="")
                {
                    $(".naseemSearch").html(html_li);
                }else{
                    $(".naseemSearch").html('');
                }
            }
        });
    }else{ $(".naseemSearch").html(''); }
});
$(document).on("click",".list-items",function(){
    //alert($(this).text());
    $("#token-input-property_search").val($(this).text());
    $(".naseemSearch").html('');
});


 function showOverlay(showSub){
	 $('.overlay').addClass('show');
	 $('.overlay__inner__'+showSub).addClass('show');
 }

 function hideOverlay(e){
	 if(event.target == event.currentTarget) {
	 	$('.overlay').removeClass('show');
		$('.overlay__inner').removeClass('show');
	 }
 }
 
  $('.submitYourProperty').click(function(){
    showOverlay('submitProperty'); 
    $("#connectModelHeading").html($(this).attr('heading_text'));
});


function open_profile(ID)
{
    //alert(ID);
    $("#exampleModalCenter").modal('show');
    if(ID)
    {
        $.ajax({
                type: "POST",
                url: "management-profile",
                data: {id:ID, _token:$("[name='_token']").val()},
                beforeSend:function(){ $("#profileContent").html('<br><center><img src="front/images/loading.gif"></center>'); },
                success: function(html_result){
                   $("#profileContent").html(html_result);
                }
            });
    }
}