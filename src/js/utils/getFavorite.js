import store from '../store';

export default function getFavorite(id) {
    return store.getState().favourites.find(fav => fav.id === id);
}
