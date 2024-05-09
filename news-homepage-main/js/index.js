`use strict`;

const menu = document.querySelector(`.link.menu`);
const closeMenu = document.querySelector(`.link.menu-close`);

const tabs = document.querySelectorAll(`.tab`);

// Event listener to the menu

menu.addEventListener(`click`, (e) => {
  tabs.forEach((tab) => {
    tab.style.display = "block";
    menu.style.display = "none";
    closeMenu.style.display = "block";
  });
});
// Event listener to the close menu

closeMenu.addEventListener(`click`, (e) => {
  tabs.forEach((tab) => {
    tab.style.display = "none";
    menu.style.display = "block";
    closeMenu.style.display = "none";
  });
});
