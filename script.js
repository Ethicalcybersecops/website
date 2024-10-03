
$(document).ready(function () {
    // Sticky Navbar on scroll
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    // Smooth scroll for menu items
    $(".navbar .menu li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
    });

    // Typing Text Animation for dynamic professions
    var typed = new Typed("#text", {
        strings: [
            "Cybersecurity Services",
            "IT Consulting",
            "Cloud Solutions",
            "Web Development",
            "Custom Solutions"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Day/Night Mode Toggle (for fun interaction)
    let banner = document.querySelector('.banner');
    let daynight = document.querySelector('.dayNight');
    daynight.onclick = function () {
        banner.classList.toggle('night');
    }
});
