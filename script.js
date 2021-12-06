$(window).on("load", function() {
    $(".loading-screen div").fadeIn(3000)
    $(".loading-screen").delay(3000).slideUp(1500)
})

function menuToggle() {
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
}

$(document).ready(function() {
    $(".hamburger").on("click", function() {
        menuToggle()
    })

    let confettiAppear = true;
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

        if (scrolled >= 100 && scrolled <= 110) {
            if (confettiAppear) {
                confetti({
                    particleCount: 300,
                    origin: {
                        x: 0.5,
                        y: 0.75,
                    },
                    spread: 90,
                    gravity: 0.7
                })
                confettiAppear = false;
            }
        }

    };

    $(".faqBlockOpener").on("click", function () {
        let $target = $($(this).data('target'))
        let $button = $($(this).data('button'))

        $($target).slideToggle()
        $($button).toggleClass("transform-rotate-45deg", 500)
    })

    $(".main-menu-items a").on("click", function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 700);
    })

    $(".toogle-menu-items a").on("click", function(event) {
        event.preventDefault();
        menuToggle()

         $('html, body').delay(400).animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 700);
    })

    $(".logo a").on("click", function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 700);
    })

    $("#gooey-button").on("click", function() {
        console.log(1)
        window.open('https://discord.gg/NnhNfuMAPg', '_blank')
    })

})
