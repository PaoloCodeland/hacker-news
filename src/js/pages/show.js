import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View, { viewEl } from '../components/View';

export default async function Show() {
    viewEl.innerHTML = '';

    let stories = await fetchHkApi('show');

    View('Show', StoriesList(stories));
}
