
    var process=1;
   
    $('.tabs ul li').click(function(){
      var elem=$(this);
      if(elem.hasClass("active")){
        return
      }

      
      if(process){
      $('.jobWpr > div.active').animate({left:700+'px'},500,function(){
        $(this).removeClass('active').css('left','-700px');
        process=1;
      })

      $('.jobWpr').height($('#'+elem.data('role')).height())

      $('.jobWpr').find('#'+elem.data('role')).animate({left:0+"px"},500,function(){
          $(this).addClass('active');
          process=1;
      })
       elem.addClass('active').siblings().removeClass('active');       
      }
      process=0;
    })

    $('#jobHolder').on('show.bs.modal',function(){
      $(this).addClass('jobPopUp')

    })
    if(screen.width<768){
    $('.jobWpr > div').width(screen.width-33)    
    }
    $('.jobWpr').height($('#job1').height())

    var mVisible=1;
    $('.siteNav').click(function(){
      if(mVisible){
        $('.tabNav').animate({left:0},100,function(){
            mVisible=0
        }) 
          
      }

      else{
         $('.tabNav').animate({left:-500+'px'},100,function(){
            mVisible=1
        })
         
      }
     
    })


$('#profilePopUp').on('show.bs.modal',function(obj){  
$(this).addClass('piller');      
 $('#profilePopUp').find('.item').removeClass('active').eq($('.profileHolder a').index(obj.relatedTarget)).addClass('active');

})



$('#benefitPopUp').on('show.bs.modal',function(obj){
      $(this).addClass('piller');      
      $('#benefitPopUp').find('.item').removeClass('active').eq(parseInt($(obj.relatedTarget).data('role')-1)).addClass('active');
})


$('.carousel').carousel({
 interval: false
})


window.onscroll=function(){
  var scrollY= (document.documentElement || document.body.parentNode || document.body).scrollTop,
  nav= document.getElementById('flexNav'),
  navPos=nav.offsetTop + nav.clientHeight;
  if(scrollY > navPos){
    $('.navHeight').addClass('fixed');    
    if(scrollY > navPos + 40){
      $('.navHeight').addClass('in');    
    } 
    else{
      $('.navHeight').removeClass('in');    
    }   
  }
  else{
    $('.navHeight').removeClass('fixed')    
  }

}

function animate(elem,style,to,time) {
        var start= new Date().getTime();

        timer = setInterval(function() {            
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },time);
    elem.style[style] = from+unit;
}