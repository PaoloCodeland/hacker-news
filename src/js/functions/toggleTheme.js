import appReducer from '../state/appReducer';

/**
 * TOGGLE THEME
 * @param {HTMLElement} btn the HTML Element that handels the theme change
 */
export default function toggleTheme(btn) {
    document.body.classList.toggle('is-dark');
    btn.classList.toggle('is-dark');

    appReducer({
        type: 'TOGGLE_DARK_MODE',
    });
}
