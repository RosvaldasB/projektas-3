// karuseles 1

var slider = tns({
    container: '.slider',
    items: 4,
    center: true,
    navContainer: true,
    swipeAngle: false,
    speed: 400,
    nav: false,
    fixedWidth: 400,
    autoplayButtonOutput: false,
    autoplay: true,
    controlsContainer: ".controls",
    prevButton: ".prevBtn",
    nextButton: ".nextBtn",
    responsive: {
        980: {
            items: 3
        },
        460: {
            items: 3
        },
    },
});

// kodas pakeisti navigacijos stiliu pasiekus puslapyje tam tikra vieta

// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".introduction");

// const sectionOneOptions = {};

// const sectionOneObserver = new IntersectionObserver
// (function(
//     entries, 
//     sectionOneObserver
//     ) {
//         entries.forEach(entry => {
//             if(!entry.isIntersecting) {
//                 header.classList.add("nav-scrolled");
//             } else {
//                 header.classList.remove("nav-scrolled");
//             }
//         });
//     }, sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

function changeNav() {
    var header = document.querySelector("header");
    var scrollValue = window.scrollY;
    if (scrollValue > 780) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }
};

window.addEventListener('scroll', changeNav);




// rodyti bigmak

function showMenu() {
    var bmz = document.getElementById('mobile-nav');
    if (bmz.style.display == 'none') {
        bmz.style.display = 'block';
    } else {
        bmz.style.display = 'none';
    }
};

// funkcija nuvesti lankytojo vaizda iki tam tikro elemento

function scrollElement() {
    var element = document.getElementById("scrollloc");
    element.scrollIntoView();
};

// pakelti puslapi i virsu

function takeMeToTop() {
    window.scrollTo(0, 0);
};

// karusele 2

var slider2 = tns({
    container: '.slider-people',
    items: 1,
    center: true,
    navContainer: true,
    swipeAngle: false,
    speed: 400,
    nav: false,
    fixedWidth: 500,
    autoplayButtonOutput: false,
    autoplay: true,
    controlsContainer: ".controls1",
    prevButton: ".prevButton",
    nextButton: ".nextButton",
    responsive: {
        '980': {
            items: 2,
            // fixedWidth: 300
        },
        '460': {
            items: 1
            // fixedWidth: 300
        },
    },
});

// var slider2 = tns({
//     container: '.slider-people',
//     items: 1,
//     fixedWidth: 400,
//     center: true,
//     loop: true,
//     swipeAngle: false,
//     speed: 400,
//     nav: false,
//     navContainer: true,
//     controlsContainer: ".controls1",
//     prevButton: ".prevButton",
//     nextButton: ".nextButton",
    // responsive: {
    //     '980': {
    //         items: 2,
    //         fixedWidth: 300,
    //         center: false,
    //         controls: true
    //     },
    //     '460': {
    //         items: 1,
    //         fixedWidth: 300,
    //         center: false,
    //         controls: true
    //     },
    // },
// });