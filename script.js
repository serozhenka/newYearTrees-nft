var $html = $("html, body");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(window).on("load", function() {

    $html.addClass("overflow-hidden")
    $(".loading-screen div").fadeIn(3000)
    $(".loading-screen").delay(3000).slideUp(1500)
    setTimeout(function(){
         $html.removeClass("overflow-hidden")
    },4500);
})

var $hamburger = $(".hamburger")
var $image = $(".hamburger img")

function changeAttr(image, src) {
    image.fadeOut(400)

    setTimeout(function(){
         image.attr("src", `images/${src}.gif`)
    }, 400);

    image.fadeIn(400)
}

function menuToggle() {
    $(".toogle-block").fadeToggle(800)
        $html.toggleClass("overflow-hidden")

        if ($hamburger.hasClass("hamburger-cross")) {
            $hamburger.removeClass("hamburger-cross")
            changeAttr($image, 'cross');
        } else {
            $hamburger.addClass("hamburger-cross")
            changeAttr($image, 'hamburger');
        }
}

$(document).ready(function() {

    $hamburger.on("click", function() {
        menuToggle()
    })

    let confettiAppear = true;

    window.onscroll = function() {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop + window.innerHeight
            - ($('.main-block')[0].scrollHeight + $('.about')[0].scrollHeight + $('#roadmapHeader')[0].scrollHeight + 250);

        let blockHeight = $('#roadmapItems')[0].scrollHeight
        let scrolled = (windowScroll / blockHeight) * 100;

        let $element = document.getElementById("progressBar")

        if (scrolled >= 0 && scrolled <= 100) {
            $element.style.height = scrolled + "%";
        }  else if(scrolled < 0) {
            $element.style.height = 0 + "%";
        } else if(scrolled > 100) {
           $element.style.height = 100 + "%";
        }

        if (scrolled >= 100 && scrolled <= 110) {
            if (confettiAppear) {
                confetti({
                    particleCount: 50,
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

        $target.slideToggle()
        $button.toggleClass("transform-rotate-45deg", 500)
    })

    $(".main-menu-items a, .toogle-menu-items a").on("click", function(event) {
        event.preventDefault();
        let delay = 0;

        if ($(this).hasClass("toogle-item")) {
            delay = 400;
            menuToggle()
        }

        $html.delay(delay).animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 700);
    })


    $(".logo a").on("click", function(event) {
        event.preventDefault();
        $html.animate({
            scrollTop: $html.offset().top
        }, 700);
    })

    $("#gooey-button").on("click", function() {
        window.open('https://discord.gg/NnhNfuMAPg', '_blank')
    })

})
