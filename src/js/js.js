"use strict";

//current year for futter

let objCurrentYear = document.querySelector("#current-year");
const currentYaer = new Date();
objCurrentYear.innerText = currentYaer.getFullYear();

// pictures in high quality

const sliderImgs = document.querySelector(".slider__box-imgs");

function replacePictures(entries, observe) {
  if (!entries[0].isIntersecting) return;

  for (let i = 0; i < entries[0].target.children.length; i++) {
    entries[0].target.children[i].src =
      entries[0].target.children[i].dataset.src;
  }

  observe.unobserve(entries[0].target);
}

const observer = new IntersectionObserver(replacePictures, { threshold: 0.1 });
observer.observe(sliderImgs);
