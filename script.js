// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to dishes
    const dishes = document.querySelectorAll('.dish');
    dishes.forEach(dish => {
        dish.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        dish.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add animation to hero button
    const orderButton = document.querySelector('#hero button');
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
});