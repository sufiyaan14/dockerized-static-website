// Smooth Scroll Animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal Animation

const revealElements = document.querySelectorAll(
  '.service-card, .project-card, .about-card, .hero-card'
);

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      element.classList.add('show');
    }
  });
});

// Hover Glow Effect

const cards = document.querySelectorAll(
  '.service-card, .project-card, .about-card'
);

cards.forEach(card => {
  card.addEventListener('mousemove', () => {
    card.style.boxShadow = '0 20px 40px rgba(0,255,255,0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});

