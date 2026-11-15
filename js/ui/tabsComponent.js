/**
 * @file tabsComponent.js
 * @description Gestión accesible de pestañas para las etapas del embarazo.
 */

export class TabsComponent {
  /**
   * @param {string} navSelector Selector del contenedor de botones
   * @param {string} paneSelector Selector de los paneles de contenido
   */
  constructor(navSelector = '.tabs-nav', paneSelector = '.tab-pane') {
    this.navContainer = document.querySelector(navSelector);
    this.panes = document.querySelectorAll(paneSelector);
  }

  init() {
    if (!this.navContainer) return;

    this.buttons = this.navContainer.querySelectorAll('.tab-btn');
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.tab;
        this.switchTab(targetId);
      });
    });
  }

  switchTab(targetId) {
    this.buttons.forEach(b => {
      const isTarget = b.dataset.tab === targetId;
      b.classList.toggle('active', isTarget);
      b.setAttribute('aria-selected', isTarget);
    });

    this.panes.forEach(pane => {
      const isTarget = pane.id === targetId;
      pane.classList.toggle('active', isTarget);
      if (isTarget) {
        pane.removeAttribute('hidden');
      } else {
        pane.setAttribute('hidden', 'true');
      }
    });
  }
}
