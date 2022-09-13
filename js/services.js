// changes
paceOptions = {
     ajax: true,
     document: true,
     eventLag: false
};

Pace.on('done', function() {

    $('.preloader_text').delay(500).animate({right: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    $('#preloader').delay(1500).animate({right: '-100%', width: '0'}, 3000, $.bez([0.19,1,0.22,1]));


    
    
    TweenMax.from(".pink_container_overlay", 3, {
        delay: 2.7,
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
    
    

});


gsap.to('.home_content_container',{
    scrollTrigger: {
        trigger: ".home_container",
        start: "top top",
        scrub: 2,
    },
    top: '-1px',
})

gsap.to('.pink_container',{
    scrollTrigger: {
        trigger: ".home_container",
        start: "top top",
        scrub: 2,
    },
    bottom: '-500px',
})




gsap.to('.about-title',{
    scrollTrigger: {
        trigger: ".about-title",
        start: "top top",
        scrub: 2,
        pin: ".about-title",
        end: '150%',
    },
})


var nav = gsap.timeline({
    paused: "true"
});
nav.to(".menu",{
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});
nav.fromTo(".li",{
    y:"-100%",
    opacity: 0
    },{
    duration: .5,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
nav.fromTo(".social-li",{
    y:"-50%",
    opacity: 0
    },{
    duration:0.8,
    opacity: 1,
    stagger: 0.25,
    ease: Expo.easeOut
    },
    "-=0.5");

function toggle(){
    nav.play();
}
function togglec(){
    nav.reverse();
}

    AOS.init();