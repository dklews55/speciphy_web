// ==========================
// Lightweight JS: smooth interactions, reveal on scroll, simple contact handling
// No frameworks, well-commented for beginners
// ==========================

// Smooth reveal on scroll using IntersectionObserver
(function(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();

// Contact form: opens user's mail client with prefilled subject/body
function handleContact(e){
  e.preventDefault();
  const email = document.getElementById('email').value || '';
  const message = document.getElementById('message').value || '';
  const subject = encodeURIComponent('Consulting inquiry from website');
  const body = encodeURIComponent('Contact: ' + email + '\n\n' + message);
  // Opens mail client; server-backed form can replace this later
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  return false;
}

// Mobile menu toggle
function toggleMenu(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  toggle.classList.toggle('open');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function closeMenu(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  toggle.classList.remove('open');
  menu.style.display = 'none';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if(!toggle.contains(e.target) && !menu.contains(e.target)){
    closeMenu();
  }
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