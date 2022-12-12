paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
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



    TweenMax.from(".image__", 5.6, {
        delay: 0.5,
        width: '0',
        padding: '0',
        opacity: '0',
        ease: Expo.easeInOut,
    });


    TweenMax.staggerFrom('.case_study', 4.7, {
        y: "100%",
        ease: Power4.easeOut
    }, 0.15);


    TweenMax.from('.hidden-text', 5.9, {
        top: "100px",
        ease: Expo.easeInOut,
    }, 0.12);


    const ourWrok = gsap.timeline({
        scrollTrigger: {
            trigger: ".container1",
            start: "top center",

        }
    });

    ourWrok.to(".overlay_", {
        duration: 1.3,
        width: "0px",
        ease: Expo.easeInOut,

    });


    const image1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".image_container1",
            start: "top center+=250px",
        }
    });

    image1.from(".image_container1", {
        duration: 1.3,
        width: "0px",
        ease: Expo.easeInOut,
    });


    const image2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".image_container2",
            start: "top center+=150px",
        }
    });

    image2.from(".image_container2 div", {
        duration: 1.3,
        paddingTop: "0%",
        ease: Expo.easeInOut,
    });


    const ourWrok2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container2",
            start: "top center",
        }
    });

    ourWrok2.to(".overlay__", {
        duration: 1.3,
        width: "0px",
        ease: Expo.easeInOut,
    });

    const image3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".image_container3",
            start: "top center",
        }
    });

    image3.from(".image_container3 div", {
        duration: 1.3,
        paddingTop: "0%",
        ease: Expo.easeInOut,
    });

    const colorPallet_heading = gsap.timeline({
        scrollTrigger: {
            trigger: ".colorPallet_heading",
            start: "top center",
        }
    });

    colorPallet_heading.to(".overlay___", {
        duration: 1.3,
        width: "0px",
        ease: Expo.easeInOut,
    });


    const image_container_color_pallet = gsap.timeline({
        scrollTrigger: {
            trigger: ".image_container_color_pallet",
            start: "top center+=140px",
        }
    });

    image_container_color_pallet.from(".image_container_color_pallet div", {
        duration: 1.3,
        paddingTop: "0%",
        ease: Expo.easeInOut,
    });


    const font_heading = gsap.timeline({
        scrollTrigger: {
            trigger: ".font_heading",
            start: "top center+=150px",
        }
    });

    font_heading.to(".overlay____", {
        duration: 1.3,
        width: "0px",
        ease: Expo.easeInOut,
    });


    const image_container_font = gsap.timeline({
        scrollTrigger: {
            trigger: ".image_container_font",
            start: "top center+=140px",
        }
    });

    image_container_font.from(".image_container_font div", {
        duration: 1.3,
        paddingTop: "0%",
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