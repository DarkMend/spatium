import person1 from "./../assets/img/person1.png";
import person2 from "./../assets/img/person2.png";
import person3 from "./../assets/img/person3.png";
import person4 from "./../assets/img/person4.png";

const dropdown = () => {
  const dropdownLists = document.querySelectorAll(".dropdown");

  dropdownLists.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-button");
    const arrow = dropdown.querySelector(".arrow");
    const list = dropdown.querySelector(".dropdown-list");

    button.addEventListener("click", () => {
      arrow.classList.toggle("active");
      list.classList.toggle("active");
    });
  });
};

const toggleBurger = () => {
  const burger = document.querySelector(".header__wrapper-mobile");
  const closeButton = burger.querySelector(".header__wrapper-mobile__close");
  const openButton = document.querySelector(".header__wrapper-burger");

  openButton.addEventListener("click", () => {
    burger.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    burger.classList.remove("active");
  });

  burger.addEventListener("click", (e) => {
    if (e.target == burger) {
      burger.classList.remove("active");
    }
  });
};

const modal = () => {
  const data = [
    {
      id: 1,
      name: "Ikotun Adejuigbe Emmanuel",
      img: person1,
    },
    {
      id: 2,
      name: "Famodimu Olusegun",
      img: person2,
    },
    {
      id: 3,
      name: "Blessing Ehizojie-Philips",
      img: person3,
    },
    {
      id: 4,
      name: "Nanle Luke Precious",
      img: person4,
    },
  ];

  const modal = document.querySelector(".modal");
  const openButtons = document.querySelectorAll(
    ".team__wrapper-main__card-info__button"
  );
  const closeButton = modal.querySelector(".modal__close");

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.classList.remove("active");
    }
  });

  openButtons.forEach((button) => {
    const img = modal.querySelector(".modal__img img");
    const name = modal.querySelector(".modal__name");
    const dataPerson = data.find((el) => el.id === parseInt(button.dataset.id));

    button.addEventListener("click", () => {
      modal.classList.add("active");
      img.src = dataPerson.img;
      name.textContent = dataPerson.name;
    });
  });
};

const scrollUp = () => {
  const scrollToTopButton = document.querySelector(".up-button");
  const triggerElement = document.querySelector(".team");

  window.addEventListener("scroll", () => {
    if (!triggerElement) return;

    const triggerPosition = triggerElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;

    if (scrollPosition > triggerPosition) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

const init = () => {
  dropdown();
  toggleBurger();
  modal();
  scrollUp();
};

document.addEventListener("DOMContentLoaded", init);
