$(window).on("load", function() {
    $(".loading-screen div").fadeIn(3000)
    $(".loading-screen").delay(3000).slideUp(1500)
})

$(document).ready(function() {
    $(".hamburger").on("click", function() {
        $(".toogle-block").fadeToggle(800)
        $("html, body").toggleClass("over")

        let hamburger = $(".hamburger")
        let image = $(".hamburger img")

        if (hamburger.hasClass("hamburger-cross")) {
            hamburger.removeClass("hamburger-cross")
            image.fadeOut(1000)
            setTimeout(function(){
                 image.attr("src", "images/cross.png")
            },1000);
            image.fadeIn(1000)
        } else {
            hamburger.addClass("hamburger-cross")
            image.fadeOut(1000)
            setTimeout(function(){
                 image.attr("src", "images/hamburger.png")
            },1000);
            image.fadeIn(1000)
        }


    })
})