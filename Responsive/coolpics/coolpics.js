const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
});
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-button');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        modalImage.src = 'images-full.jpg';
        modalImage.alt = img.alt;
        modal.showModal();
    });
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});