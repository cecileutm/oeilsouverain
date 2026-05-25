const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-section').forEach((section) => {
    observer.observe(section);
});

document.querySelectorAll('.book-index').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const img = item.querySelector('.hover-image');
        // On calcule la position de la souris à l'intérieur de l'élément
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        
        // On fait suivre l'image légèrement
        img.style.left = `${x}px`;
    });
});