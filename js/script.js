new WOW().init();

let windowWidth = $(window).width();

$(window).scroll( ()=> {

    let sticky = $("header");
    
    if($(window).scrollTop() >= 100 && windowWidth > 799){
        sticky.addClass("fixed");
    } else{
        sticky.removeClass("fixed");
    }
})