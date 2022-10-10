import view from '../utils/view';
import store from '../store';
import StoriesList from '../components/StoriesList';

export default async function Favorites() {
    const favorites = store.getState().favourites;

    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1>Favorites</h1>`;

    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    placeholder.innerHTML = 'No favorites yet';

    page.append(favorites.length ? StoriesList(favorites) : placeholder);

    view.innerHTML = '';
    view.append(page);
}
