const burgerIcon = document.querySelector(".header__burger-menu__burger-icon");
const navMenuWrapper = document.querySelector(".header__navigation-bar");
const navMenuLinks = document.querySelectorAll(".navigation-bar__list-item__link");

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle("header__burger-menu__burger-icon_active");
  navMenuWrapper.classList.toggle("header__navigation-bar_active");
  document.body.classList.toggle("no-scroll");
});

navMenuLinks.forEach(el => {
  el.addEventListener('click', () => {
    burgerIcon.classList.remove("header__burger-menu__burger-icon_active");
    navMenuWrapper.classList.remove("header__navigation-bar_active");
    document.body.classList.remove("no-scroll");
  })
});

const stepBtn = document.querySelector(".working-slider__list");
const collectionWorkingContent = document.querySelectorAll(".working-slider__content-wrapper");
const collectionWorkingStepBtn = document.querySelectorAll(".working-slider__list__btn");


stepBtn.addEventListener('click', (el) => {
  let tabEvent = Number(el.target.attributes["tab-event"].nodeValue);

  collectionWorkingContent.forEach(el => el.classList.remove("working-slider__content_show"));
  collectionWorkingStepBtn.forEach(el => {
    el.classList.remove("working-slider__list__btn_active");
    el.removeAttribute("aria-label");
});

  document.getElementById(`content-${tabEvent}`).classList.add("working-slider__content_show");
  el.target.classList.add("working-slider__list__btn_active");
  el.target.ariaLabel = "выбранный шаг";
});



const search = document.querySelector(".search__btn__wrapper");

search.addEventListener('click', () => {
  search.classList.toggle("search__btn__wrapper_active");
});


