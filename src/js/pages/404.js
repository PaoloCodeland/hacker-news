import View from '../components/View';

export default function Page404(path) {
    const text = document.createElement('p');
    text.innerText = `Are you really sure what you are looking for is on this site?`;

    View('404', text);
}
