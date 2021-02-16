$(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var viajes = this.hash;
            $("html,body").animate({
                scrollTop: $(viajes).offset().top
            }, 800, function () {
                window.location.hash = viajes;
            });
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $(".navbar").addClass("navdark");
        } else {
            $(".navbar").removeClass("navdark");
        }
    });
});;