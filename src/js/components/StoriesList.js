import Story from './Story';

export default function StoriesList(stories) {
    const ul = document.createElement('ul');
    ul.classList.add('stories-list');

    stories.forEach((story, index) => {
        const li = document.createElement('li');
        li.append(Story({ ...story, position: index + 1 }));
        ul.append(li);
    });
    return ul;
}
