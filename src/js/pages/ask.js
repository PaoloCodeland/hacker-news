import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View from '../components/View';

export default async function Ask() {
    let stories = await fetchHkApi('ask');

    View('Ask', StoriesList(stories));
}
