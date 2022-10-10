import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View from '../components/View';

export default async function Home() {
    let stories = await fetchHkApi('news');

    View('Top Stories', StoriesList(stories));
}
