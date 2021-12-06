
let myCarousel = document.querySelector('#myCarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
})

const tl = gsap.timeline({defaults: {duration: 1.5}});

// gsap.from(".header", {duration: 2, y: "-100%", ease: "power1"});
// gsap.from(".mainmenu", {duration: 3, y:"-100%", ease: "back", delay: 3});
// gsap.from(".menuItem", {duration: 2, opacity: 0, delay: 2, stagger: 0.2});

tl.from(".header", {y: "-100%", ease: "power1"});
tl.from(".menuItem", {opacity: 0, stagger: 0.2});