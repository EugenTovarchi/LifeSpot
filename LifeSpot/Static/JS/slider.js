function addImageToSlide(){

    const images = ['../Pictures/london.jpg', '../Pictures/ny.jpg', '../Pictures/spb.jpg'];
    const galleryContainer = document.querySelector('#gallery-container');
    if (!galleryContainer) {
        console.error('galleryContainer не найден!');
        return;
    }

    galleryContainer.innerHTML= ""; //очистили от предыдущих на будущее

    images.forEach(imgPath => {
        const img = document.createElement('img');
        img.src = /*"../Pictures/"*/imgPath;
        img.loading= 'lazy';
        img.classList.add('slider-image');
        document.body.appendChild(img);
    });}
document.addEventListener('DOMContentLoaded', addImageToSlide);