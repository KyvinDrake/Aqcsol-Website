// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    header.classList.toggle('scrolled', currentScroll > 50);
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll for nav links and close menu on click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // If href doesn't start with '#', allow default navigation (e.g., to upcoming.html)
        if (!href.startsWith('#')) {
            window.location.href = href; // Navigate to the external page
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            return;
        }
        // Handle in-page smooth scrolling for hash links
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        // Update active link styling
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
