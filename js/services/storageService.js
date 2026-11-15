/**
 * @file storageService.js
 * @description Principio de Responsabilidad Única (SRP): Gestiona la persistencia
 * desacoplada de la interfaz gráfica, permitiendo cambios futuros de almacenamiento.
 */

export class StorageService {
  /**
   * @param {string} prefix Prefijo para evitar colisiones de llaves
   */
  constructor(prefix = 'mama_segura_') {
    this.prefix = prefix;
  }

  /**
   * Obtiene un valor parseado de localStorage
   * @param {string} key 
   * @param {any} defaultValue 
   * @returns {any}
   */
  get(key, defaultValue = null) {
    try {
      const serialized = localStorage.getItem(this.prefix + key);
      return serialized !== null ? JSON.parse(serialized) : defaultValue;
    } catch (e) {
      console.warn(`[StorageService] Error al leer la clave ${key}:`, e);
      return defaultValue;
    }
  }

  /**
   * Guarda un valor serializado en localStorage
   * @param {string} key 
   * @param {any} value 
   */
  set(key, value) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn(`[StorageService] Error al guardar la clave ${key}:`, e);
      return false;
    }
  }

  /**
   * Elimina una clave
   * @param {string} key 
   */
  remove(key) {
    try {
      localStorage.removeItem(this.prefix + key);
    } catch (e) {
      console.warn(`[StorageService] Error al eliminar la clave ${key}:`, e);
    }
  }

  /**
   * Limpia todos los registros con el prefijo de la app
   */
  clearAll() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith(this.prefix))
        .forEach(k => localStorage.removeItem(k));
    } catch (e) {
      console.warn('[StorageService] Error al limpiar registros:', e);
    }
  }
}
