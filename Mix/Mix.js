//
// Start everything about navbar
//
jQuery(function($){
    
    // toggle navbar 

    $(".navbar .collapse-nav").click(function(){
        var src = $(this).attr('data-toggle');
        $(src).toggle(300)
    })
    $('.navbar-direction .collapse-nav').click(function(){
        var src = $(this).attr('data-toggle');
        $(src).toggleClass('active')
    })
    $('.navbar-direction .nav-item').click(function(){
        $(this).removeClass('active')
    })
    $('.navbar-direction .nav-item > ul').click(function(e){
        e.stopPropagation();
    })
    $(".nav-item div.item a").click(function(e){
        e.preventDefault();
        var src = $(this).attr("data-src");
        $(".mix-section").removeClass('active');
        $(".mix-section"+`${src}`).addClass('active');
        // $('.navbar-direction .nav-item').removeClass('active')
    })
    // link dropdown menu 
    // $('.dropdown-menu a').click(function(){
    //     $('.')
    // })

})