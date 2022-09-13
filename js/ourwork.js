paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function() {

    $('.preloader_text').delay(500).animate({
        right: '30%',
        opacity: '0'
    }, 3000, $.bez([0.19, 1, 0.22, 1]));


    $('#preloader').delay(1500).animate({
        right: '-100%',
        width: '0'
    }, 3000, $.bez([0.19, 1, 0.22, 1]));



    TweenMax.to("nav", 3, {
        delay: 1.4,
        opacity: 1,
        ease: Expo.easeInOut,
    });

});

gsap.to('.menu_btn', {
    scrollTrigger: {
        trigger: ".ourWork_container",
        start: "start center",
        scrub: true,
    },
    color: "#000"
})

var nav = gsap.timeline({
    paused: "true"
});
nav.to(".menu", {
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});
nav.fromTo(".li", {
    y: "-100%",
    opacity: 0
}, {
    duration: .5,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
nav.fromTo(".social-li", {
        y: "-50%",
        opacity: 0
    }, {
        duration: 0.8,
        opacity: 1,
        stagger: 0.25,
        ease: Expo.easeOut
    },
    "-=0.5");

function toggle() {
    nav.play();
}

function togglec() {
    nav.reverse();
}

AOS.init();