import view from '../utils/view';

export default function Home(path) {
    view.innerHTML = `<div>
        <h1>Stories</h1>
        <p>Path: ${path}</p>
    </div>`;
}
