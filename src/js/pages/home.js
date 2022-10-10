import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View, { viewEl } from '../components/View';

export default async function Home() {
    viewEl.innerHTML = '';

    let stories = await fetchHkApi('news');

    View('Top Stories', StoriesList(stories));
}
