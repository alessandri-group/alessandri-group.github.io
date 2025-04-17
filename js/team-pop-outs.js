document.addEventListener('DOMContentLoaded', function() {
    // Open modal - target any button with data-modal attribute
    document.querySelectorAll('[data-modal]').forEach(function(btn) {
        btn.onclick = function() {
            document.getElementById(this.dataset.modal).style.display = "block";
        }
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }
    
    // Close modal when clicking X
    document.querySelectorAll('.close').forEach(function(elem) {
        elem.onclick = function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = "none";
            }
        }
    });
});