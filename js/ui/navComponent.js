/**
 * @file navComponent.js
 * @description Gestión de navegación: menú hamburguesa móvil, scroll suave y enlaces activos.
 */

export class NavComponent {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.mobileToggle = document.querySelector('.mobile-menu-toggle');
    this.mainNav = document.querySelector('.main-nav');
    this.navLinks = document.querySelectorAll('.nav-links a');
    this.sections = document.querySelectorAll('section[id]');
  }

  init() {
    this.bindEvents();
    this.setupScrollSpy();
  }

  bindEvents() {
    // Toggle menú móvil
    if (this.mobileToggle && this.mainNav) {
      this.mobileToggle.addEventListener('click', () => {
        const isOpen = this.mainNav.classList.toggle('open');
        this.mobileToggle.setAttribute('aria-expanded', isOpen);
        this.mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      });

      // Cerrar al hacer clic en un link
      this.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.mainNav.classList.remove('open');
          if (this.mobileToggle) {
            this.mobileToggle.setAttribute('aria-expanded', 'false');
            this.mobileToggle.innerHTML = '☰';
          }
        });
      });
    }

    // Scroll header shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        this.header?.classList.add('scrolled');
      } else {
        this.header?.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  setupScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          this.navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    this.sections.forEach(sec => observer.observe(sec));
  }
}
