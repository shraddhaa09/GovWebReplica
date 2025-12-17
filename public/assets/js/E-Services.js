document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
});
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  const slideWidth = slides[0].offsetWidth;

  // Function to move the slider
  const moveSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  // Move to next slide
  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 5) { // Show 5 images at a time
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSlider();
  });

  // Move to previous slide
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 5; // Go back to the last set of slides
    }
    moveSlider();
  });

  // Auto-slide functionality
  setInterval(() => {
    nextBtn.click();
  }, 4000); // Adjust the timing (in ms) as needed
});
document.getElementById("skip-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("kd").scrollIntoView({ behavior: "smooth" });
});
