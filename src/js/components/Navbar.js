import { router, routes } from '../router';
import ThemeButton from './ThemeButton';
import Logo from '../../assets/vite.svg';

export default function Navbar() {
    const nav = document.createElement('nav');
    const brand = document.createElement('a');
    const mainNavigation = document.createElement('ul');
    const actions = document.createElement('div');
    const hamburger = document.createElement('button');

    // Methods
    const toggleActive = event => {
        mainNavigation.querySelector('a.active')?.classList.remove('active');
        // Brand, so activate home link
        if (event.target.closest('a').classList.contains('brand')) {
            mainNavigation.querySelector('a').classList.add('active');
            router.navigate('/');
        } else {
            event.target.classList.add('active');
        }
        mainNavigation.classList.remove('active');
    };

    const toggleNav = () => {
        mainNavigation.classList.toggle('active');
    };

    // Navbar
    nav.classList.add('app-navbar');

    // Brand
    brand.classList.add('brand');
    brand.dataset.navigo = '';
    brand.innerHTML = `
        <img src="${Logo}" alt="Paolo's Hacker News" />
        <span>Paolo's <strong>Hacker News</strong></span>
    `;
    brand.addEventListener('click', toggleActive);

    // Navigation
    mainNavigation.classList.add('main-navigation');
    routes.forEach(({ path, name, show }) => {
        if (!show) return;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = path;
        a.dataset.navigo = '';
        a.textContent = name;
        // Browser reload on specific path
        if (path === `/${router.getCurrentLocation().url}`) {
            a.classList.add('active');
        }
        a.addEventListener('click', toggleActive);
        li.append(a);
        mainNavigation.append(li);
    });

    // Actions
    actions.classList.add('flex');

    // Hamburger
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" fill="ghostwhite" />
            </svg>
    `;
    hamburger.addEventListener('click', toggleNav);
    actions.append(hamburger);

    // Theme toggler
    actions.append(ThemeButton());

    nav.append(brand, mainNavigation, actions);
    return nav;
}
