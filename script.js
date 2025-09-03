// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Alert when clicking on projects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('This is my Digital Portfolio Project!');
    });
});