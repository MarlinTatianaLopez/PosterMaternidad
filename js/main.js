/**
 * @file main.js
 * @description Punto de entrada (Bootstrapper) de la aplicación Mamá Segura.
 * Aplica Clean Architecture e Inyección de Dependencias.
 */

import { APP_DATA } from './data.js';
import { StorageService } from './services/storageService.js';
import { ChecklistService } from './services/checklistService.js';
import { NavComponent } from './ui/navComponent.js';
import { TabsComponent } from './ui/tabsComponent.js';
import { SearchComponent } from './ui/searchComponent.js';
import { ChecklistComponent } from './ui/checklistComponent.js';

class App {
  constructor() {
    this.data = APP_DATA;
  }

  init() {
    console.info(`[Mamá Segura] Inicializando v${this.data.meta.version}...`);

    // 1. Capa de Servicios
    const storageService = new StorageService();
    const checklistService = new ChecklistService(storageService, this.data.checklists);

    // 2. Componentes UI
    const nav = new NavComponent();
    nav.init();

    const tabs = new TabsComponent();
    tabs.init();

    const search = new SearchComponent();
    search.init();

    const checklistUI = new ChecklistComponent(checklistService);
    checklistUI.init();

    // 3. Efectos adicionales de UX
    this.setupSmoothScroll();
    console.info('[Mamá Segura] Aplicación lista para el usuario.');
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
