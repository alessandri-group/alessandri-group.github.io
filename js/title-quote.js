document.addEventListener('DOMContentLoaded', function() {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    const navbarBrand = document.querySelector('.navbar-brand');
    
    if (isHomePage && navbarBrand) {
        navbarBrand.style.display = 'none';
        // Add empty div to maintain navbar height
        const spacerDiv = document.createElement('div');
        spacerDiv.style.height = '3.6em';  // Adjust this value to match your quote height
        document.querySelector('.navbar').appendChild(spacerDiv);
        return;
    }
    
    const quotes = [
        "Computational Soft Materials Design"
    ];
    
    if (navbarBrand) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quoteElement = document.createElement('div');
        quoteElement.style.fontSize = '0.8em';
        quoteElement.style.fontStyle = 'italic';
        quoteElement.style.whiteSpace = 'normal';
        quoteElement.style.maxWidth = '100%';
        quoteElement.style.lineHeight = '1.2';
        quoteElement.style.paddingRight = '10px';
        quoteElement.textContent = quotes[randomIndex];
        navbarBrand.appendChild(quoteElement);
    }
});