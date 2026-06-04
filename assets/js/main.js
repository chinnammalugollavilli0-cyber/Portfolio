/* ══════════════════════════════════════════════
   DINESH SAI PORTFOLIO — MAIN.JS
══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom Cursor ── */
  const dot     = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  let mouseX = 0, mouseY = 0, outX = 0, outY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top  = `${mouseY}px`;
  });

  function animateOutline() {
    outX += (mouseX - outX) * 0.12;
    outY += (mouseY - outY) * 0.12;
    outline.style.left = `${outX}px`;
    outline.style.top  = `${outY}px`;
    requestAnimationFrame(animateOutline);
  }
  animateOutline();

  document.querySelectorAll('a, button, .tool-card, .soft-tag').forEach(el => {
    el.addEventListener('mouseenter', () => outline.classList.add('hovered'));
    el.addEventListener('mouseleave', () => outline.classList.remove('hovered'));
  });


  /* ── Navbar ── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('show', window.scrollY > 400);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });


  /* ── Active Nav on Scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(n => n.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => navObserver.observe(s));


  /* ── Reveal on Scroll ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ── Skill Bars ── */
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width + '%';
          }, i * 120);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillSection = document.querySelector('.skills');
  if (skillSection) skillObserver.observe(skillSection);


  /* ── Counter Animation ── */
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(el => {
          const target = parseInt(el.dataset.count);
          let cur = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(timer); }
            el.textContent = cur;
          }, 40);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  const statsRow = document.querySelector('.stats-row');
  if (statsRow) counterObserver.observe(statsRow);


  /* ── Typewriter Effect ── */
  const words  = ['Web Apps', 'Modern UIs', 'Clean Code', 'Digital Experiences', 'Creative Solutions'];
  const twEl   = document.getElementById('typewriter');
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word  = words[wi];
    if (!deleting) {
      twEl.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      twEl.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 95);
  }
  setTimeout(type, 1000);


  /* ── Project Filter ── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const cats = card.dataset.category || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.classList.remove('hidden');
          card.style.display = '';
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });


  /* ── Contact Form ── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      btn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
      btn.style.opacity = '0.8';

      setTimeout(() => {
        btn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
        btn.style.opacity = '1';
        form.reset();
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 4000);
      }, 1200);
    });
  }


  /* ── Back to Top ── */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ── Tilt effect on project cards ── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const x     = e.clientX - rect.left;
      const y     = e.clientY - rect.top;
      const cx    = rect.width / 2;
      const cy    = rect.height / 2;
      const rotX  = ((y - cy) / cy) * -4;
      const rotY  = ((x - cx) / cx) *  4;
      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  /* ── Gold particle burst on hero CTA click ── */
  function createSparkle(x, y) {
    for (let i = 0; i < 8; i++) {
      const spark = document.createElement('div');
      const size  = Math.random() * 5 + 2;
      const angle = (i / 8) * Math.PI * 2;
      const dist  = Math.random() * 60 + 30;
      spark.style.cssText = `
        position:fixed; left:${x}px; top:${y}px;
        width:${size}px; height:${size}px;
        background:${Math.random() > 0.5 ? '#D4AF37' : '#fff'};
        border-radius:50%; pointer-events:none; z-index:9999;
        transform:translate(-50%,-50%);
        animation: sparkle-out 0.7s ease forwards;
      `;
      spark.dataset.angle = angle;
      spark.dataset.dist  = dist;
      document.body.appendChild(spark);
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      requestAnimationFrame(() => {
        spark.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
        spark.style.transform  = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`;
        spark.style.opacity    = '0';
      });
      setTimeout(() => spark.remove(), 750);
    }
  }

  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', e => createSparkle(e.clientX, e.clientY));
  });

});
