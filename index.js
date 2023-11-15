$(window).scroll(function(){
    var scrolled  = $(window).scrollTop();
    if(scrolled > 800){
        $("section.content").addClass("background-show");
    }
});
