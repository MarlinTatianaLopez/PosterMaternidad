/**
 * @file checklistService.js
 * @description Lógica de negocio (Dominio/Servicio) para las listas de verificación.
 * Cumple con Clean Architecture y Single Responsibility Principle.
 */

export class ChecklistService {
  /**
   * @param {import('./storageService.js').StorageService} storageService
   * @param {Array} checklistGroups
   */
  constructor(storageService, checklistGroups) {
    this.storage = storageService;
    this.groups = checklistGroups;
    this.storageKey = 'checklists_state';
    this.state = this.storage.get(this.storageKey, {});
    this.listeners = [];
  }

  /**
   * Suscribe observadores para reaccionar a cambios
   * @param {Function} callback 
   */
  subscribe(callback) {
    this.listeners.push(callback);
  }

  /**
   * Notifica a todos los suscriptores
   */
  notify() {
    const stats = this.getGlobalStats();
    this.listeners.forEach(fn => fn(this.state, stats));
  }

  /**
   * Alterna el estado de un elemento
   * @param {string} itemId 
   * @returns {boolean} Nuevo estado
   */
  toggleItem(itemId) {
    const currentState = !!this.state[itemId];
    this.state[itemId] = !currentState;
    this.storage.set(this.storageKey, this.state);
    this.notify();
    return this.state[itemId];
  }

  /**
   * Verifica si un ítem está marcado
   * @param {string} itemId 
   * @returns {boolean}
   */
  isChecked(itemId) {
    return !!this.state[itemId];
  }

  /**
   * Reinicia todos los ítems
   */
  resetAll() {
    this.state = {};
    this.storage.remove(this.storageKey);
    this.notify();
  }

  /**
   * Calcula estadísticas de completitud
   * @returns {{ total: number, completed: number, percentage: number }}
   */
  getGlobalStats() {
    let total = 0;
    let completed = 0;

    this.groups.forEach(group => {
      group.items.forEach(item => {
        total++;
        if (this.state[item.id]) {
          completed++;
        }
      });
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percentage };
  }
}
