document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.addEventListener('animationend', () => {
        logo.classList.add('spin');
    });
});
