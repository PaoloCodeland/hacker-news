import Navbar from './Navbar';
import ThemeButton from './ThemeButton';

export default function Header() {
    const header = document.createElement('header');
    header.classList.add('app-header');
    header.append(Navbar());
    header.append(ThemeButton());

    return header;
}
