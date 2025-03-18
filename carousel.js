const container = document.querySelector(".carousel-container");
const images = document.querySelector(".project-images");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let scrollAmount = 0;
const step = 40;

nextButton.addEventListener("click", () => {
    const maxScroll = images.scrollWidth - container.clientWidth;
    scrollAmount = Math.min(scrollAmount + step * 16, maxScroll);
    images.style.transform = `translateX(-${scrollAmount}px)`;
});

prevButton.addEventListener("click", () => {
    scrollAmount = Math.max(scrollAmount - step * 16, 0);
    images.style.transform = `translateX(-${scrollAmount}px)`;
});
