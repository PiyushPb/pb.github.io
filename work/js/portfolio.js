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



const colorPallet = gsap.timeline({
    scrollTrigger: {
        trigger: ".brand_details_content_container",
        start: "top center",
    }
});

colorPallet.to(".overlay___", {
    duration: 1.3,
    width: "0px",
    ease: Expo.easeInOut,
});


});