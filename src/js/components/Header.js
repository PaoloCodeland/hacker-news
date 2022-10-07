import Navbar from './Navbar';

export default function Header() {
    const header = document.createElement('header');
    header.classList.add('app-header');
    header.append(Navbar());

    return header;
}
