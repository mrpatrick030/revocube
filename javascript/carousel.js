const carousel = document.querySelector('.testimonialsCarousel');
const items = document.querySelectorAll('.testimonialsCarouselItem');

let currentIndex = 0;
const numItems = items.length;
const itemWidth = items[0].offsetWidth;

function updateCarousel() {
    const translateXValue = currentIndex * -itemWidth;
    carousel.style.transform = `translateX(${translateXValue}px)`;
}

// Clone the first div and append it to the end
//const firstItemClone = items[0].cloneNode(true);
//carousel.appendChild(firstItemClone);

// Auto-slide to the next item every 3 seconds
setInterval(() => {
    currentIndex++;
    if (currentIndex >= numItems) {
        currentIndex = 0;
        carousel.style.transition = 'none'; // Disable transition for a smooth loop
    } else {
        carousel.style.transition = 'transform 0.5s ease-in-out';
    }
    updateCarousel();
}, 3000);
