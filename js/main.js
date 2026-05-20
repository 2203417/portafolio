document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const btnTop  = document.getElementById('btn-top-fixed');

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('main [id]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link =>
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        );
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));

  // Back-to-top visibility
  window.addEventListener('scroll', () => {
    if (btnTop) btnTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
