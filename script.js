$(window).on("load", function() {
    $(".loading-screen div").fadeIn(3000)
    $(".loading-screen").delay(3000).slideUp(1500)
})

$(document).ready(function() {
    $(".hamburger").on("click", function() {
        $(".toogle-block").fadeToggle(800)
        $("html, body").toggleClass("overflow-hidden")

        let hamburger = $(".hamburger")
        let image = $(".hamburger img")

        if (hamburger.hasClass("hamburger-cross")) {
            hamburger.removeClass("hamburger-cross")
            image.fadeOut(400)
            setTimeout(function(){
                 image.attr("src", "images/cross.png")
            },400);
            image.fadeIn(400)
        } else {
            hamburger.addClass("hamburger-cross")
            image.fadeOut(400)
            setTimeout(function(){
                 image.attr("src", "images/hamburger.png")
            },400);
            image.fadeIn(400)
        }
    })

    window.onscroll = function() {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop + window.innerHeight
            - ($('.main-block')[0].scrollHeight + $('.about')[0].scrollHeight + $('#roadmapHeader')[0].scrollHeight + 250);

        let blockHeight = $('#roadmapItems')[0].scrollHeight
        let scrolled = (windowScroll / blockHeight) * 100;


        if (scrolled >= 0 && scrolled <= 100) {
            document.getElementById("progressBar").style.height = scrolled + "%";
        }  else if(scrolled < 0) {
            document.getElementById("progressBar").style.height = 0 + "%";
        } else if(scrolled > 100) {
            document.getElementById("progressBar").style.height = 100 + "%";
        }

    };
})