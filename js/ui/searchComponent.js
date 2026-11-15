/**
 * @file searchComponent.js
 * @description Filtro en tiempo real para búsqueda rápida de temas en la página.
 */

export class SearchComponent {
  /**
   * @param {string} inputSelector 
   * @param {string} itemSelector 
   */
  constructor(inputSelector = '#topicSearchInput', itemSelector = '.searchable-item') {
    this.input = document.querySelector(inputSelector);
    this.tagButtons = document.querySelectorAll('.search-tag-btn');
    this.itemSelector = itemSelector;
  }

  init() {
    if (!this.input) return;

    this.input.addEventListener('input', (e) => {
      this.filterContent(e.target.value.trim().toLowerCase());
    });

    this.tagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query || '';
        this.input.value = query;
        this.filterContent(query.toLowerCase());
        
        this.tagButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Scroll suave hacia los resultados
        const firstResult = document.querySelector('#guias-cuidado');
        if (firstResult) {
          firstResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  filterContent(term) {
    const items = document.querySelectorAll(this.itemSelector);
    let visibleCount = 0;

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const keywords = item.dataset.keywords ? item.dataset.keywords.toLowerCase() : '';
      const matches = term === '' || text.includes(term) || keywords.includes(term);

      if (matches) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Feedback visual si no hay coincidencias
    const noResultsMsg = document.getElementById('searchNoResults');
    if (noResultsMsg) {
      noResultsMsg.style.display = (visibleCount === 0 && term !== '') ? 'block' : 'none';
    }
  }
}
