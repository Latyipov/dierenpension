window.onscroll = function() {
    checkMarginToTop();
};

let menuElement = document.getElementById("sticky-menu");
let logoElement = menuElement.querySelector('.navigation__logo-container');
let logoImgElement = menuElement.querySelector('.navigation__logo-img');
let menuBoxElement = menuElement.querySelector('.navigation__menu-container');
let menuNavigationListElement = menuElement.querySelector('.navigation__list');

let stickyMenuPosition = menuElement.offsetTop;

function checkMarginToTop() {
    if ((window.pageYOffset) > (stickyMenuPosition)) {
        menuElement.classList.toggle("sticky", true);
        logoElement.classList.toggle("sticky-logo", true);
        logoImgElement.classList.toggle("sticky-logo-img", true);
        menuBoxElement.classList.toggle("sticky-menu-box", true);
        menuNavigationListElement.classList.toggle("sticky-navigation-list", true);
    } else {
        menuElement.classList.toggle("sticky", false);
        logoElement.classList.toggle("sticky-logo", false);
        logoImgElement.classList.toggle("sticky-logo-img", false);
        menuBoxElement.classList.toggle("sticky-menu-box", false);
        menuNavigationListElement.classList.toggle("sticky-navigation-list", false);
    }
}