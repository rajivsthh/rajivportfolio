// Small UI helpers for the static portfolio
document.addEventListener('DOMContentLoaded', function () {
  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile sidebar toggle
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      sidebar.style.display = expanded ? '' : 'block';
    });

    // ensure sidebar visibility resets on resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        sidebar.style.display = '';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
