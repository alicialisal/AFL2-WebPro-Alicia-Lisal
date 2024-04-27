window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    
    // Check if user has scrolled down
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });