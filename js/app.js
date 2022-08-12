$(document).ready(function(){
    $('.slider').slick({
        arrow:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });


let hamberger = document.querySelector('.hamberger');
let times=decument.querySelector('.times');
let mobileNav=decument.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click', function(){

});

});