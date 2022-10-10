import { fetchHkApi } from '../utils/fetchApi';
import view from '../utils/view';
import StoriesList from '../components/StoriesList';

export default async function New() {
    let stories = await fetchHkApi('newest');

    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1>New Stories</h1>`;
    page.append(StoriesList(stories));
    view.innerHTML = '';
    view.append(page);
}
