const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#navbar-menu');
const navLogo = document.querySelector('#navbar__logo');
const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
const mobileSearchToggle = document.querySelector('#mobile-search-toggle');
const mobileSearchDropdown = document.querySelector('#mobile-search-dropdown');

const toggleMobileSearch = () => {
    const isExpanded = mobileSearchToggle.getAttribute('aria-expanded') === 'true';
    mobileSearchToggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    mobileSearchDropdown.classList.toggle('opacity-0');
    mobileSearchDropdown.classList.toggle('-translate-y-2');
    mobileSearchDropdown.classList.toggle('pointer-events-none');
};

mobileSearchToggle.addEventListener('click', toggleMobileSearch);

// Display Mobile Menu
const mobileMenu = () => {
    const isActive = menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menu.setAttribute('aria-expanded', isActive ? 'true' : 'false');

    if (isActive) {
        bar1.classList.add('translate-y-[8px]', 'rotate-45');
        bar2.classList.add('opacity-0');
        bar3.classList.add('-translate-y-[8px]', '-rotate-45');
        } else {
            bar1.classList.remove('translate-y-[8px]', 'rotate-45');
            bar2.classList.remove('opacity-0');
            bar3.classList.remove('-translate-y-[8px]', '-rotate-45');
        }
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const contactMenu = document.querySelector('#contact-page');
    const blogMenu = document.querySelector('#blog-page');
    const scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 500) {
        homeMenu?.classList.add('highlight');
        aboutMenu?.classList.remove('highlight');
        contactMenu?.classList.remove('highlight');
        blogMenu?.classList.remove('highlight');
        return;
        } else if (window.innerWidth > 960 && scrollPos < 1100) {
            aboutMenu?.classList.add('highlight');
            homeMenu?.classList.remove('highlight');
            contactMenu?.classList.remove('highlight');
            blogMenu?.classList.remove('highlight');
            return;
            } else if (window.innerWidth > 960 && scrollPos < 1800) {
                contactMenu?.classList.add('highlight');
                homeMenu?.classList.remove('highlight');
                aboutMenu?.classList.remove('highlight');
                blogMenu?.classList.remove('highlight');
                return;
                } else if (window.innerWidth > 960 && scrollPos >= 1800) {
                    blogMenu?.classList.add('highlight');
                    homeMenu?.classList.remove('highlight');
                    aboutMenu?.classList.remove('highlight');
                    contactMenu?.classList.remove('highlight');
                    return;
        }

    if ((elem && window.innerWidth < 960) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        menu.setAttribute('aria-expanded', 'false');
        bar1.classList.remove('translate-y-[8px]', 'rotate-45');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-translate-y-[8px]', '-rotate-45');
    }
};

const hideMobileSearch = () => {
    if (window.innerWidth <= 960 && mobileSearchToggle?.getAttribute('aria-expanded') === 'true') {
        mobileSearchToggle.setAttribute('aria-expanded', 'false');
        mobileSearchDropdown.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileSearch);
navLogo?.addEventListener('click', hideMobileMenu);
navLogo?.addEventListener('click', hideMobileSearch);

