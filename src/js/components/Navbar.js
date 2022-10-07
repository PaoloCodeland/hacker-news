import { routes } from '../router';
import ThemeButton from './ThemeButton';

export default function Navbar() {
    const nav = document.createElement('nav');
    const brand = document.createElement('a');
    const ul = document.createElement('ul');
    const actions = document.createElement('div');
    const hamburger = document.createElement('button');

    // Methods
    const toggleActive = event => {
        ul.querySelector('a.active').classList.remove('active');
        // Brand, so activate home link
        if (event.target.closest('a').classList.contains('brand')) {
            ul.querySelector('.first').classList.add('active');
        } else {
            event.target.classList.add('active');
        }
    };

    const toggleNav = () => {
        ul.classList.toggle('active');
    };

    // Navbar
    nav.classList.add('app-navbar');

    // Brand
    brand.classList.add('brand');
    brand.innerHTML = `
        <img src="/src/assets/vite.svg" alt="Vite Logo" />
        <span>Paolo's <strong>Hacker News</strong></span>
    `;
    brand.addEventListener('click', toggleActive);
    nav.append(brand);

    // Navigation
    ul.classList.add('main-navigation');
    routes.forEach(({ path, name, show }, index) => {
        if (!show) return;

        const li = document.createElement('li');
        const a = document.createElement('a');
        if (index === 0) {
            a.classList.add('active', 'first');
        }
        a.href = path;
        a.dataset.navigo = '';
        a.textContent = name;
        a.addEventListener('click', toggleActive);
        li.append(a);
        ul.append(li);
    });
    nav.append(ul);

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
    nav.append(actions);
    return nav;
}
