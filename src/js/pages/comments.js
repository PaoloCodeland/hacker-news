import view from '../utils/view';
import { fetchHkApi } from '../utils/fetchApi';
import CommentsList from '../components/CommentsList';

export default async function Comment(data) {
    const storyId = data.id;
    const { title, url, user, time_ago, domain, comments } = await fetchHkApi(
        `item/${storyId}`
    );

    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1 class="title">
            <a href="${url}" target="_blank" class="gradient-text one">${title}</a>
        </h1>
        <div class="meta">
            <span class="user">${user}</span>
            | <span class="time">${time_ago}</span>
            | <a href="${`https://${domain}`}" target="_blank">
                <strong>${domain}</strong>
            </a>
        </div>`;
    page.append(CommentsList(comments));

    view.innerHTML = '';
    view.append(page);
}
