const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];

window.addEventListener('scroll', toggleHeader, false);
function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src', 'img/omnitech-logo-2.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.firstElementChild.setAttribute('src', 'img/omnitech-logo-1.png');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
    }
}
