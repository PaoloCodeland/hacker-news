import { router } from '../router';

export default function Story({
    id,
    title,
    user,
    time_ago,
    url,
    domain,
    points,
    comments_count,
    position,
}) {
    const story = document.createElement('div');
    story.dataset.storyId = id;

    const navigate = () => {
        router.navigate(`/comments/${story.dataset.storyId}`);
    };

    // Story
    story.classList.add('story');
    story.innerHTML = `<header>
                <div class="position">${position}</div>
                <button class="favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                    </svg>
                </button>
                <h2 class="title">
                    <a href="${url}" target="_blank" class="gradient-text one">${title}</a>
                </h2>
            </header>
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

    story.append(footer);

    return story;
}
