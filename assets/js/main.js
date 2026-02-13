console.log("EcoBuild Plus loaded");


  
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const beforeWrapper = document.getElementById("beforeWrapper");
  const divider = document.getElementById("divider");

  let isDragging = false;

  function moveSlider(x) {
    const rect = slider.getBoundingClientRect();
    let offset = x - rect.left;

    if (offset < 0) offset = 0;
    if (offset > rect.width) offset = rect.width;

    const percent = (offset / rect.width) * 100;

    beforeWrapper.style.width = percent + "%";
    divider.style.left = percent + "%";
  }

  slider.addEventListener("mousedown", () => isDragging = true);
  window.addEventListener("mouseup", () => isDragging = false);

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    moveSlider(e.clientX);
  });

  // Mobile Support
  slider.addEventListener("touchstart", () => isDragging = true);
  window.addEventListener("touchend", () => isDragging = false);

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    moveSlider(e.touches[0].clientX);
  });
});
 

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll("[data-slider]");

  sliders.forEach(slider => {
    const slides = slider.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let index = 0;

    function updateSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateSlide();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateSlide();
    });
  });
});


 
