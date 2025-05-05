// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Add mobile menu toggle (if needed)
// const menuToggle = document.createElement('button');
// menuToggle.innerText = 'Menu';
// menuToggle.classList.add('menu-toggle');
// document.querySelector('nav').prepend(menuToggle);
// menuToggle.addEventListener('click', () => {
//     document.querySelector('nav ul').classList.toggle('show');
// });
