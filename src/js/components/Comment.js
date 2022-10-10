export default function Comment(comment) {
    const { user, time_ago, content, comments } = comment;

    const toggleReplies = e => {
        e.target.nextElementSibling.classList.toggle('active');
        e.target.textContent =
            e.target.textContent === 'Hide replies'
                ? 'Show replies'
                : 'Hide replies';
    };

    // Base
    const commentEl = document.createElement('article');
    commentEl.classList.add('comment');
    commentEl.innerHTML = `<header>
        <h4 class="user">${user}</h4>
        <span class="time">${time_ago}</span>
    </header>
    <div class="content">${content}</div>`;

    // Replies
    if (comments.length > 0) {
        // Replies CTA
        const repliesToggle = document.createElement('button');
        repliesToggle.classList.add('replies-toggle', 'gradient-text');
        repliesToggle.innerHTML = 'Show Replies';
        repliesToggle.addEventListener('click', toggleReplies);

        // Replies List
        const replies = document.createElement('div');
        replies.classList.add('replies');
        comments.forEach(reply => {
            const replyEl = document.createElement('div');
            replyEl.classList.add('reply');
            replyEl.innerHTML = `<header>
                <h4 class="user">${reply.user}</h4>
                <span class="time">${reply.time_ago}</span>
            </header>
            <div class="content">${reply.content}</div>`;
            replies.append(replyEl);
        });
        commentEl.append(repliesToggle, replies);
    }
    return commentEl;
}
