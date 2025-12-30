// Navbar scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll animations
const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animateElements.forEach(el => observer.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu (hamburger)
(function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.mobile-menu');
    const navEl = document.querySelector('nav');
    if (!toggle || !menu) return;

    function syncNavHeightVar() {
        if (!navEl) return;
        const h = Math.ceil(navEl.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--nav-h', `${h}px`);
    }

    // Run once early and again after layout settles
    syncNavHeightVar();
    window.addEventListener('resize', syncNavHeightVar);
    window.addEventListener('load', syncNavHeightVar);

    function openMenu() {
        toggle.classList.add('active');
        menu.classList.add('open');
        document.body.classList.add('menu-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
    }

    function closeMenu() {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
    }

    function isOpen() {
        return menu.classList.contains('open');
    }

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        syncNavHeightVar();
        if (isOpen()) closeMenu();
        else openMenu();
    });

    // Close when a link is clicked
    menu.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', () => closeMenu());
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!isOpen()) return;
        if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) closeMenu();
    });

    // If the viewport becomes desktop-sized, ensure menu is closed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) closeMenu();
    });
})();