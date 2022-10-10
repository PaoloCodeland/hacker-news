import { fetchHkApi } from '../utils/fetchApi';
import StoriesList from '../components/StoriesList';
import View, { viewEl } from '../components/View';

export default async function Ask() {
    viewEl.innerHTML = '';

    let stories = await fetchHkApi('ask');

    View('Ask', StoriesList(stories));
}
