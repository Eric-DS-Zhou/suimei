const images = [
    "images/suimei1.jpg",
    "images/suimei2.jpg",
    "images/suimei3.jpg"
];

let currentIndex = 0;

const slideshow = document.getElementById("slideshow");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

setInterval(changeImage, 3000);



const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 点击下一张
nextBtn.addEventListener("click", function () {
    changeImage();
});

// 点击上一张
prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slideshow.src = images[currentIndex];
});
