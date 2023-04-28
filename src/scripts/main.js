const swiper = document.querySelector(".swiper");

if (swiper) {
  const ids = [
    "newRecipesSlider",
    "featuredRecipesSlider",
    "favoriteRecipesSlider",
    "ambassadorsRecipesSlider",
    "instagramRecipesSlider"
  ];

  new Swiper("#categoriesSlider", {
    slidesPerView: 2,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      550: {
        slidesPerView: 3
      },
      799: {
        slidesPerView: 4
      },
      1350: {
        slidesPerView: 6
      }
    }
  });

  ids.forEach((slider) => {
    new Swiper(`#${slider}`, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        899: {
          slidesPerView: 4
        }
      }
    });
  });
}

const containers = [
  ...document.querySelectorAll(".reveal"),
  ...document.querySelectorAll(".reveal-left"),
  ...document.querySelectorAll(".reveal-300"),
  ...document.querySelectorAll(".reveal-600"),
  ...document.querySelectorAll(".reveal-right")
];
const windowHeight = window.innerHeight;

if (containers.length > 0) {
  function reveal() {
    containers.forEach((container) => {
      const containerTop = container.getBoundingClientRect().top;
      if (containerTop < windowHeight) {
        container.classList.add("reveal-show");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  document.addEventListener("DOMContentLoaded", reveal);
}
