import { fetchHkApi } from '../functions/fetchApi';
import view from '../utils/view';
import StoriesList from '../components/StoriesList';

export default async function Home() {
    let stories = await fetchHkApi('news');

    view.innerHTML = `<div class="container">
        <h1>New Stories</h1>
        ${StoriesList(stories)}
    </div>`;
}
