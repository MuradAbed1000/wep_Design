$(document).ready(function(){
    /* 
// slider height
$('.owl-carousel .item').height($(window).height())
$(window).resize(function(){
    $('.owl-carousel .item').height($(window).height())
})*/
 // owl carousel
 $('.header .owl-carousel').owlCarousel({
    loop:true,

    items:1,
autoplay:true,
animateOut:'fadeOut',
smartSpeed:450,
})
//brand
$('.brand .owl-carousel').owlCarousel({
    loop:true,
autoplay:true,
responsive:{
    0:{items:2},768:{items:4},992:{items:6}}
})

//   side mende 
$('.menu').on('click',function(){
    $('.side-menu').toggleClass('open')
    
})
$('.fa-times').on('click',function(){
    $('.side-menu').removeClass('open')
})

// betwen menu
$(window).scroll(function(){
    if($(this).scrollTop()>=30){
        $('.nav-left').fadeOut(500);
        $('.nav-top').fadeIn(500);
    }else{
        $('.nav-left').fadeIn(500);
        $('.nav-top').fadeOut(500);
    }
})



//gallary

const counters =document.querySelectorAll('.about .num');
const delay=200;
// const delay=202.5;
counters.forEach(counter =>{
    const updateCount=()=>{
const target= counter.getAttribute('data-target')
const count=+counter.innerText;
const speed=target/delay;
if(count < target){
    // counter.innerText=Math.floor(count + speed);
    counter.innerText=count + speed;
    setTimeout(updateCount,1);
}else{
    counter.innerText=target; 
}



    }
    updateCount();
})
// count-down
var content=$('.countaown').html();
$('.countaown').countdown('2022/01/01', function(event) {
    $(this).html(event.strftime(content));
  });







//switch btween mode
var link =$('link[data-color="switch"]'),
logo=$('.logo img' )
$('.fa-adjust').on('click',function(){
if(link.attr('href') =='css/style.css'){
    link.attr('href','css/style-light.css')
    logo.attr('src','images1/logo-dark.png')
}
else{
    link.attr('href','css/style.css') 
}
});






//animate

$(".heading").animate({left: '350px',opacity: 1 ,transition: .3}
,1000);

$(".heading").animate({left: '-70px',opacity: 1}
,1000);


$(".about .count").animate({left: '-600px',opacity: 1}
,1000);
$(".about .count").animate({left: '-45px',opacity: 1}
,1000);


$(".gallary .one").animate({left: '0px',opacity: 1}
,1000);
$(".gallary .one").animate({top: '0px',opacity: 1}
,1000);

$(".gallary .two").animate({left: '0px',opacity: 1}
,1000);
$(".gallary .two").animate({top: '0px',opacity: 1}
,1000);

$(".gallary .margin-neg").animate({left: '0px',opacity: 1}
,1000);
$(".gallary .margin-neg").animate({bottom: '0px',opacity: 1}
,1000);



$(".gallary .four").animate({right: '0px',opacity: 1}
,1000);
$(".gallary .four").animate({top: '0px',opacity: 1}
,1000);

$(".special .offer1").animate({left: '0px',opacity: 1}
,1000);




$(function(){
    $(".list a" ).on('click',function(){
        $("html,body").animate({
            scrollTop:$($.attr(this,'href')).offset().top
        },500);
    });
});




})

