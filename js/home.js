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


    TweenMax.from(".home_container", 2, {
        delay: 1.4,
        width: '0',
        opacity: 1,
        ease: Expo.easeInOut,
    });


    TweenMax.from(".pink_container_overlay", 3, {
        delay: 1.7,
        width: '100%',
        ease: Expo.easeInOut,
    });


    TweenMax.from(".home_content_container h1", 3, {
        y: 70,
        ease: "power4.out",
        delay: 4.2,
        skewY: 5,
        opacity: 0,
        stagger: {
            amount: 0.3,
        },
    });

    TweenMax.from(".home_content_container h2", 3, {
        y: 70,
        ease: "power4.out",
        delay: 4.1,
        skewY: 5,
        opacity: 0,
        stagger: {
            amount: 0.3,
        },
    });

    TweenMax.from(".home_content_container p", 3, {
        y: 70,
        ease: "power4.out",
        delay: 4.3,
        skewY: 5,
        opacity: 0,
        stagger: {
            amount: 0.3,
        },
    });


    TweenMax.from(".circle-container", 3, {
        delay: 4.9,
        opacity: 0,
        ease: Expo.easeInOut,
    });

    TweenMax.to("nav", 3, {
        delay: 1.4,
        opacity: 1,
        ease: Expo.easeInOut,
    });


    gsap.to('.home_content_container', {
        scrollTrigger: {
            trigger: ".home_container",
            start: "top top",
            scrub: 2,
        },
        top: '-1px'
    })

    gsap.to('.pink_container', {
        scrollTrigger: {
            trigger: ".home_container",
            start: "top top",
            scrub: 2,
        },
        bottom: '-500px'
    })
});










const ourWrok = gsap.timeline({
    scrollTrigger: {
        trigger: ".ourWork_container",
        start: "top center",
    }
});

ourWrok.staggerFrom('.hidden-text', 1.5, {
    y: "100%",
    ease: Power4.easeOut
}, 0.15);

// ourWrok.from(".work-cards__item",{
//     duration: 1,
//     height: "0",
//     ease: Expo.easeInOut
// });

// ourWrok.to(".portfolio_container", {
//     duration: 1,
//     width: "700px",
//     ease: Expo.easeInOut
// });



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutus_container",
    }
});

tl.to(".aboutus_container", {
    duration: 2,
    width: "100%",
    ease: Expo.easeInOut
});


tl.to(".aboutus_content", {
    duration: 1,
    opacity: 1,
    ease: Expo.easeInOut
});

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".section");


gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".wrapper").offsetWidth
    }
});

gsap.to('.section_heading', {
    scrollTrigger: {
        trigger: ".section1",
        start: "top center",
        scrub: 2,
    },
    left: '200px'
})




gsap.to('.mobile_section', {
    scrollTrigger: {
        trigger: ".section1",
        start: "top center",
        scrub: 2,
    },
    left: '50px'
})



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