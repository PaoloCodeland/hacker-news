import view from '../utils/view';

export default async function Favorites() {
    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1>Favorites</h1>`;
    view.innerHTML = '';
    view.append(page);
}
