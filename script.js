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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Optional: highlight nav links on scroll (simple approach)
(function(){
  const sections = Array.from(document.querySelectorAll('main section'));
  const navLinks = Array.from(document.querySelectorAll('nav a'));
  const linkMap = new Map(navLinks.map(a=>[a.getAttribute('href'), a]));

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      const id = '#' + entry.target.id;
      const link = linkMap.get(id);
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(l=>l.style.fontWeight='');
        link.style.fontWeight = '700';
      }
    });
  },{threshold:0.4});

  sections.forEach(s=>obs.observe(s));
})();