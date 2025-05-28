document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    this.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });

  // Close menu when clicking on links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.mobile-menu-button')) {
      closeMenu();
    }
  });

  // Close menu on resize (if desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  function closeMenu() {
    mobileMenuButton.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  }
});