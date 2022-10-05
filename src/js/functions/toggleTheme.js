import appReducer from '../state/appReducer';

export default function toggleTheme(btn) {
    document.body.classList.toggle('is-dark');
    btn.classList.toggle('is-dark');

    appReducer({
        type: 'TOGGLE_DARK_MODE',
    });
}
