import view from '../utils/view';

export default async function Comment() {
    const page = document.createElement('div');
    page.classList.add('container');
    view.innerHTML = `<h1>COMMENTS</h1>`;
    view.append(page);
}
