import { router } from '../router';
import store from '../store';
import getFavorite from '../utils/getFavorite';

export default function Story(story) {
    const {
        id,
        title,
        user,
        time_ago,
        url,
        domain,
        points,
        comments_count,
        position,
    } = story;
    const navigate = () => {
        router.navigate(`/comments/${id}`);
    };
    const toggleFavorite = event => {
        event.target.closest('.favorite').classList.toggle('is-favorite');
        const isFavourite = getFavorite(id);
        if (isFavourite) {
            store.dispatch({ type: 'REMOVE_FAVORITE', payload: { id } });
        } else {
            store.dispatch({
                type: 'ADD_FAVORITE',
                payload: {
                    ...story,
                    isFavorite: true,
                },
            });
        }
        console.log(store.getState());
    };

    // Story
    const storyEl = document.createElement('article');
    storyEl.classList.add('story');

    // Header
    const header = document.createElement('header');
    const positionEl = document.createElement('div');
    positionEl.classList.add('position');
    positionEl.textContent = position;
    const favoriteEl = document.createElement('button');
    favoriteEl.classList.add('favorite');
    if (getFavorite(id)) {
        favoriteEl.classList.add('is-favorite');
    }
    favoriteEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
        </svg>`;
    favoriteEl.addEventListener('click', toggleFavorite);
    const titleEl = document.createElement('h2');
    titleEl.classList.add('title');
    titleEl.innerHTML = `<a href="${url}" target="_blank" class="gradient-text one">${title}</a>`;
    header.append(positionEl, favoriteEl, titleEl);

    // Content
    const contentEl = document.createElement('div');
    contentEl.innerHTML = `
        <div class="meta">
            <span class="user">${user}</span>
            | <span class="time">${time_ago}</span>
        </div>
        <div class="source">
            <a href="${`https://${domain}`}" target="_blank">
                <strong>${domain}</strong>
            </a>
        </div>`;

    // Footer
    const footer = document.createElement('footer');
    // Cta
    const cta = document.createElement('button');
    cta.classList.add('comments-cta');
    cta.innerHTML = `
            <strong>${comments_count}</strong> comments
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
            </svg>`;
    cta.addEventListener('click', navigate);
    const textCta = document.createElement('div');
    textCta.innerHTML = `<strong>0</strong> comments`;
    footer.append(comments_count > 0 ? cta : textCta);
    // Points
    const pointsStory = document.createElement('div');
    pointsStory.classList.add('points');
    pointsStory.innerHTML = `<strong>${points}</strong> points`;
    footer.append(pointsStory);

    storyEl.append(header, contentEl, footer);

    return storyEl;
}
