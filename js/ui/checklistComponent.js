/**
 * @file checklistComponent.js
 * @description Renderiza y coordina la interfaz de listas de verificación interactivas.
 */

export class ChecklistComponent {
  /**
   * @param {import('../services/checklistService.js').ChecklistService} service 
   * @param {string} containerSelector 
   */
  constructor(service, containerSelector = '#checklistContent') {
    this.service = service;
    this.container = document.querySelector(containerSelector);
    this.progressBar = document.getElementById('checklistProgressFill');
    this.progressText = document.getElementById('checklistProgressText');
    this.resetBtn = document.getElementById('checklistResetBtn');
  }

  init() {
    if (!this.container) return;

    this.render();
    this.bindEvents();

    // Suscribirse a cambios del servicio
    this.service.subscribe((_, stats) => {
      this.updateProgressUI(stats);
    });

    // Actualizar estado inicial
    this.updateProgressUI(this.service.getGlobalStats());
  }

  render() {
    this.container.innerHTML = '';

    this.service.groups.forEach(group => {
      const groupEl = document.createElement('div');
      groupEl.className = 'checklist-group';

      const titleEl = document.createElement('h4');
      titleEl.className = 'checklist-group-title';
      titleEl.innerHTML = `<span>📋</span> ${group.title}`;
      groupEl.appendChild(titleEl);

      const itemsGrid = document.createElement('div');
      itemsGrid.className = 'checklist-items';

      group.items.forEach(item => {
        const isChecked = this.service.isChecked(item.id);
        const itemEl = document.createElement('label');
        itemEl.className = `checklist-item ${isChecked ? 'checked' : ''}`;
        itemEl.dataset.id = item.id;

        itemEl.innerHTML = `
          <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''}>
          <span>${item.label}</span>
        `;

        itemEl.querySelector('input').addEventListener('change', () => {
          const checked = this.service.toggleItem(item.id);
          itemEl.classList.toggle('checked', checked);
        });

        itemsGrid.appendChild(itemEl);
      });

      groupEl.appendChild(itemsGrid);
      this.container.appendChild(groupEl);
    });
  }

  bindEvents() {
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        if (confirm('¿Deseas reiniciar todas las casillas de la lista de preparación?')) {
          this.service.resetAll();
          this.render();
        }
      });
    }
  }

  updateProgressUI(stats) {
    if (this.progressBar) {
      this.progressBar.style.width = `${stats.percentage}%`;
    }
    if (this.progressText) {
      this.progressText.textContent = `${stats.completed} de ${stats.total} preparados (${stats.percentage}%)`;
    }
  }
}
