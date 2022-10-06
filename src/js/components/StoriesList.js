import Story from './Story';

export default function StoriesList(stories) {
    return `<ul class="stories-list">
        ${stories
            .map(
                (story, index) => `
                    <li>
                        ${Story({ ...story, position: index + 1 })}
                    </li>`
            )
            .join('')}
    </ul>`;
}
