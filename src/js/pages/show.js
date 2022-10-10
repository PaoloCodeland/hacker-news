import { fetchHkApi } from '../functions/fetchApi';
import view from '../utils/view';
import StoriesList from '../components/StoriesList';

export default async function Show() {
    let stories = await fetchHkApi('show');

    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1>Show</h1>`;
    page.append(StoriesList(stories));
    view.innerHTML = '';
    view.append(page);
}
