// assets/js/filter.js
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const gridElement = document.querySelector('.grid');
    const loadingElement = document.querySelector('.loading');
  
    if (!gridElement.dataset.muuriInitialized) {
  
      grid1.on('layoutStart', () => {
        loadingElement.style.display = 'block';
      });
  
      grid1.on('layoutEnd', () => {
        loadingElement.style.display = 'none';
      });
  
      grid1.layout();
  
      filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const filterCategory = button.dataset.category;
  
          grid1.filter((item) => {
            const itemCategory = item.getElement().dataset.category;
            return filterCategory === 'all' || itemCategory === filterCategory;
          });
        });
      });
  
      gridElement.dataset.muuriInitialized = 'true';
    }
  });