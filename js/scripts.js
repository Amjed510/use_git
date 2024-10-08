// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    }

    showTestimonial(current);
    setInterval(nextTestimonial, 5000); // تغيير الشهادة كل 5 ثواني
});
