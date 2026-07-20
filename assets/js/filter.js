// Category filtering for the homepage project grid (no dependencies).
// Uses the View Transitions API for animated reflow where supported.
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !cards.length) return;

  cards.forEach((card, i) => {
    card.style.viewTransitionName = 'card-' + i;
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      const applyFilter = () => {
        filterButtons.forEach((b) => b.classList.toggle('is-active', b === button));

        cards.forEach((card) => {
          const categories = (card.dataset.category || '').split(' ');
          const show = category === 'all' || categories.includes(category);
          card.classList.toggle('is-hidden', !show);
        });
      };

      if (document.startViewTransition) {
        document.startViewTransition(applyFilter);
      } else {
        applyFilter();
      }
    });
  });
});
