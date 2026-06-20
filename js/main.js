// ============================================================
// MiScout Landing Page — main.js
// ============================================================

(function () {
  'use strict';

  // -----------------------------------------------------------
  // 1. NAVBAR: scroll-aware background + hamburger menu
  // -----------------------------------------------------------
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileDrawer = document.getElementById('nav-mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer when a link is clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -----------------------------------------------------------
  // 2. SMOOTH SCROLL for nav links
  // -----------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // -----------------------------------------------------------
  // 3. INTERSECTION OBSERVER — reveal animations
  // -----------------------------------------------------------
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => observer.observe(el));
  }

  // -----------------------------------------------------------
  // 4. PARALLAX on strike-zone grid (hero)
  // -----------------------------------------------------------
  const heroGrid = document.querySelector('.hero-bg-grid');
  if (heroGrid) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroGrid.style.transform = `translateY(${scrolled * 0.08}px)`;
    }, { passive: true });
  }

  // -----------------------------------------------------------
  // 5. FORMSPREE contact form submission
  // -----------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus  = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';

      try {
        const data = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          showStatus('¡Mensaje enviado! Te contactaremos pronto.', 'success');
        } else {
          const json = await response.json();
          const msg = (json.errors || []).map(e => e.message).join(', ') || 'Error al enviar el mensaje.';
          showStatus(msg, 'error');
        }
      } catch {
        showStatus('Error de conexión. Intentá de nuevo.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensaje';
      }
    });

    function showStatus(message, type) {
      if (!formStatus) return;
      formStatus.textContent = message;
      formStatus.className = 'form-status ' + type;
      formStatus.style.display = 'block';
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 6000);
    }
  }

  // -----------------------------------------------------------
  // 6. ANIMATED COUNTERS in hero stats
  // -----------------------------------------------------------
  function animateCounter(el, target, duration = 1600) {
    const start = performance.now();
    const isFloat = String(target).includes('.');
    const suffix = el.dataset.suffix || '';
    const from = 0;

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = from + (target - from) * eased;
      el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-counter]');
  if (counterEls.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.counter);
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterObserver.observe(el));
  }

})();
