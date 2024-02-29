// Add your JavaScript functionality here
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you can add code to handle form submission, like sending data to a server
      const name = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const message = document.querySelector('textarea').value;
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      // You can perform an AJAX request or other actions here
      // For demonstration purposes, it logs the form data to the console
    });
  });
  