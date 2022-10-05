import view from '../utils/view';

export default function Page404(path) {
    view.innerHTML = `<div>
        <h1>404</h1>
        <p>Are you really sure what you are looking for is on this site?</p>
    </div>`;
}
