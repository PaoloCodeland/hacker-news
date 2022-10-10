import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View, { viewEl } from '../components/View';

export default async function New() {
    viewEl.innerHTML = '';

    let stories = await fetchHkApi('newest');

    View('New Stories', StoriesList(stories));
}
