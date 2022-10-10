import store from '../store';
import StoriesList from '../components/StoriesList';
import View from '../components/View';

export default async function Favorites() {
    const favorites = store.getState().favourites;

    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    placeholder.innerHTML =
        'You dont have any favorites yet. Click the star icon on any story to add it to your favorites list.';

    View(
        'Top Favorites',
        favorites.length ? StoriesList(favorites) : placeholder
    );
}
