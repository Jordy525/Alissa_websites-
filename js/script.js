/**
 * Main JavaScript for Alissa IA site
 * Handles smooth scrolling, Bootstrap tooltips, WhatsApp button, and form validation
 */
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Scroll smoothly to the target element
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize Bootstrap tooltips for elements with data-bs-toggle="tooltip"
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    /**
     * Function to open WhatsApp chat in a new tab
     * Currently not bound to any event in the homepage
     */
    function openWhatsApp() {
        window.open('https://wa.me/+24106000000?text=Bonjour Alissa IA', '_blank');
    }

    // Form validation for contact form with id 'contactForm'
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            contactForm.classList.add('was-validated');
        }, false);
    }

    // Form validation for community form with id 'communityForm'
    var communityForm = document.getElementById('communityForm');
    if (communityForm) {
        communityForm.addEventListener('submit', function (event) {
            if (!communityForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            communityForm.classList.add('was-validated');
        }, false);
    }
});
