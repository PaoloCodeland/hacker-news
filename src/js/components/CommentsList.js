import Comment from './Comment';

export default function CommentsList(comments) {
    const commentsList = document.createElement('div');
    commentsList.classList.add('comments-list');

    // Title
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = 'Comments';
    commentsList.appendChild(title);

    // List
    const ul = document.createElement('ul');
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.append(Comment(comment));
        ul.append(li);
    });
    commentsList.append(ul);

    return commentsList;
}
