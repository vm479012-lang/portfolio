var typed = new Typed(".typing", {
    strings: [
        "AI Student",
        "Machine Learning Enthusiast",
        "Web Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

AOS.init();

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        size: {
            value: 3
        }
    }
});