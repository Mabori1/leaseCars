
const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

tabItems.forEach((element) => {
  element.addEventListener('click', openHandler);
})

const openHandler = (evt) => {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItems.forEach((item) => {
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContents.forEach((item) => {
    item.classList.remove('tabs__content-item--active');
  });
  document.getElementById(button).classList.add('tabs__content-item--active');
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

