import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View from '../components/View';

export default async function Show() {
    let stories = await fetchHkApi('show');

    View('Show', StoriesList(stories));
}
