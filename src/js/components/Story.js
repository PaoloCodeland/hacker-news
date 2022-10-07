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
    return `
        <div class="story">
            <header>
                <div class="position">${position}</div>
                <button class="favorite" data-id="${id}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                    </svg>
                </button>
                <h2 class="title"><span class="gradient-text one">${title}</span></h2>
            </header>
            <div class="meta">
                <span class="user">${user}</span>
                | <span class="time">${time_ago}</span>
            </div>
            <div class="source">
                <a href="${url}" target="_blank">
                    <strong>${domain}</strong>
                </a>
            </div>
            <footer>
                <a class="comments-cta" href="/item?id=${id}">
                    <strong>${comments_count}</strong> comments
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                    </svg>
                </a>
                <div class="points"><strong>${points}</strong> points</div>
            </footer>
        </div>`;
}
