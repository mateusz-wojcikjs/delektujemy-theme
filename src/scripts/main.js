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
    navigation: {
      nextEl: ".slider-nav .swiper-button-next",
      prevEl: ".swiper-button-prev"
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

  new Swiper("#tagsSlider", {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".slider-nav--tags .swiper-button-next",
      prevEl: ".slider-nav--tags .swiper-button-prev"
    },
    breakpoints: {
      550: {
        slidesPerView: 4
      },
      799: {
        slidesPerView: 6
      },
      1350: {
        slidesPerView: 8
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
      navigation: {
        nextEl: `#${slider} .button-arrow-next`,
        prevEl: `#${slider} .button-arrow-prev`
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
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const parent = dropdown.parentElement;
  parent.addEventListener("mouseenter", () => {
    dropdown.style.display = "flex";
  });
  parent.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });
});

const blueimpLinks = document.getElementById("links");
if (blueimpLinks) {
  blueimpLinks.onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    var link = target.src ? target.parentNode : target;
    var options = { index: link, event: event };
    var links = this.getElementsByTagName("a");
    blueimp.Gallery(links, options);
  };
}
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const closeBtn = document.getElementById("close");
const searchModal = document.getElementById("searchModal");

closeBtn.addEventListener("click", () => {
  if (!searchModal.classList.contains("active")) return;
  searchModal.classList.remove("active");
});

const openModalButtonCollection = document.querySelectorAll(
  '[data-modal="open-modal"]'
);

openModalButtonCollection.forEach((btn) =>
  btn.addEventListener("click", () => {
    searchModal.classList.add("active");
  })
);
