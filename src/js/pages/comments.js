import view from '../utils/view';
import { fetchHkApi } from '../functions/fetchApi';

export default async function Comment(data) {
    const storyId = data.id;
    let stories = await fetchHkApi(`item/${storyId}`);
    console.log(stories);

    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1>COMMENTS</h1>`;

    view.innerHTML = '';
    view.append(page);
}
