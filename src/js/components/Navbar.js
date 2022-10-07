import { routes } from '../router';

export default function Navbar() {
    const nav = document.createElement('nav');

    const toggleActive = event => {
        nav.querySelector('a.active').classList.remove('active');
        // Brand, so activate home link
        if (event.target.closest('a').classList.contains('brand')) {
            nav.querySelector('.first').classList.add('active');
        } else {
            event.target.classList.add('active');
        }
    };

    // Brand
    const brand = document.createElement('a');
    brand.classList.add('brand');
    brand.innerHTML = `
        <img src="/src/assets/vite.svg" alt="Vite Logo" />
        <span>Paolo's <strong>Hacker News</strong></span>
    `;
    brand.addEventListener('click', toggleActive);
    nav.append(brand);

    // Navigation
    const ul = document.createElement('ul');
    ul.classList.add('main-navigation');
    routes.forEach(({ path, label }, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        if (index === 0) {
            a.classList.add('active', 'first');
        }
        a.href = path;
        a.dataset.navigo = '';
        a.textContent = label;
        a.addEventListener('click', toggleActive);
        li.append(a);
        ul.append(li);
    });
    nav.append(ul);

    return nav;
}
