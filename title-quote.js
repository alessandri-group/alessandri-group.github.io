// title-quote.js
document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      "Computational Molecular Engineering",
      "Molecular Engineering of Soft Materials",
      "Multiscale Soft Materials",
      "Multiscale Modeling of Materials",
      "Multiscale Modeling of Soft Materials",
      "Multiscale Modeling of Soft Matter",
      "Multiscale Molecular Engineering",
      "Multiscale Soft Materials",
      "Physics-Based and AI-Driven Soft Materials",
      "Soft Materials Design & Engineering",
      "Multiscale Soft Materials Engineering"
    ];
    
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quoteElement = document.createElement('div');
      quoteElement.style.fontSize = '0.8em';
      quoteElement.style.fontStyle = 'italic';
      quoteElement.style.paddingRight = '10px';  // Add padding
      quoteElement.style.marginRight = '10px';    // Add margin
      quoteElement.textContent = quotes[randomIndex];
      navbarBrand.appendChild(quoteElement);
    }
  });