ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-left, .home-right', { origin: 'top'});
ScrollReveal().reveal('.card, .portfolio-cards, .contact', { origin: 'bottom'});
ScrollReveal().reveal('.work-left-container, .skills', { origin: 'left'});
ScrollReveal().reveal('.projects, .work-right-container', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Technopreneur', 'UI-UX Designer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});