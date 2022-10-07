import ThemeButton from './ThemeButton';

export default function Header() {
    const header = document.createElement('header');
    header.classList.add('app-header');
    header.innerHTML = `
        <nav>
            <a href="/" data-navigo class="brand">
                <img src="/src/assets/vite.svg" alt="Vite Logo" />
                <span>Paolo's <strong>Hacker News</strong></span>
            </a>

            <ul class="main-navigation">
                <li>
                    <a href="/" data-navigo>Top</a>
                </li>
                <li>
                    <a class="active" href="/new" data-navigo>New</a>
                </li>
                <li>
                    <a href="/ask" data-navigo>Ask</a>
                </li>
                <li>
                    <a href="/show" data-navigo>Show</a>
                </li>
                <li>
                    <a href="/favorites" data-navigo>Favorites</a>
                </li>
            </ul>
        </nav>`;
    header.append(ThemeButton());

    return header;
}
