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


// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // سلايدر الشهادات
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // عرض الشهادة الأولى عند تحميل الصفحة
    showTestimonial(currentTestimonial);
    // تغيير الشهادة كل 5 ثواني
    setInterval(nextTestimonial, 5000);
});
