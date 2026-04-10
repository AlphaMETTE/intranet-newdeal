/**
 * Menu Helper - Gestion interactive du menu mobile
 */

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('#header > nav a[href="#menu"]');
  const menu = document.getElementById('menu');
  
  if (!menuToggle || !menu) return;
  
  // Toggle du menu
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('visible');
  });
  
  // Fermer le menu en cliquant en dehors
  document.addEventListener('click', function(e) {
    const isMenuClick = menu.contains(e.target);
    const isToggleClick = menuToggle.contains(e.target);
    
    if (!isMenuClick && !isToggleClick && menu.classList.contains('visible')) {
      menu.classList.remove('visible');
    }
  });
  
  // Fermer le menu en cliquant sur un lien
  const menuLinks = menu.querySelectorAll('.links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menu.classList.remove('visible');
    });
  });
  
  // Fermer le menu avec la touche Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('visible')) {
      menu.classList.remove('visible');
    }
  });
});
