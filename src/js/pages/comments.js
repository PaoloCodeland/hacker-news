import { fetchHkApi } from '../utils/fetchApi';
import CommentsList from '../components/CommentsList';
import View, { viewEl } from '../components/View';

export default async function Comment(data) {
    viewEl.innerHTML = '';

    const storyId = data.id;
    const { title, url, user, time_ago, domain, comments } = await fetchHkApi(
        `item/${storyId}`
    );

    const content = document.createElement('div');
    content.innerHTML = `
        <div class="meta">
            <span class="user">${user}</span>
            | <span class="time">${time_ago}</span>
            | <a href="${`https://${domain}`}" target="_blank">
                <strong>${domain}</strong>
            </a>
        </div>`;
    content.append(CommentsList(comments));

    View(
        `<a href="${url}" target="_blank" class="gradient-text one">${title}</a>`,
        content
    );
}
