document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    // Staggered Fade-in Animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });

    // Console easter egg
    console.log("%c Chemistry 70/70 Hub Initialized! 🚀", "color: #4f46e5; font-size: 20px; font-weight: bold;");
    console.log("Good luck Ishika! You got this. 🥇");
});
