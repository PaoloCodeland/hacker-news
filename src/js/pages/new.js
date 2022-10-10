import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View from '../components/View';

export default async function New() {
    let stories = await fetchHkApi('newest');

    View('New Stories', StoriesList(stories));
}
