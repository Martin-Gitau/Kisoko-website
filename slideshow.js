let slides = document.querySelectorAll(".slideshow img");
let index = 0;

function showSlide() {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  index = (index + 1) % slides.length;
}

showSlide(); // show first
setInterval(showSlide, 5000); // change every 5s
