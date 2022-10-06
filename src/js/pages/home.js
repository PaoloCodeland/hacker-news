import view from '../utils/view';
import { fetchHkApi } from '../functions/fetchApi';
import Story from '../components/Story';

export default async function Home() {
    let stories = await fetchHkApi('news');

    view.innerHTML = `<div class="container">
        <h1>Stories</h1>
        <div class="wrap-stories">
            ${stories
                .map((story, index) => Story({ ...story, position: index + 1 }))
                .join('')}
        </div>
    </div>`;
}
