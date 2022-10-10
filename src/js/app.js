import { initialState } from './store';
import RouterHandler from './router';
import Header from './components/Header';

class App {
    constructor() {
        // Refs
        this.$app = document.querySelector('#app');
        this.init();
    }

    // Initialize the app
    init() {
        this.initStorage();
        this.renderGlobals();
        RouterHandler();
    }

    initStorage() {
        if (!localStorage.getItem('pdhn-data')) {
            localStorage.setItem('pdhn-data', JSON.stringify(initialState));
            return;
        }

        const data = JSON.parse(localStorage.getItem('pdhn-data'));
        initialState.isDarkMode = data.isDarkMode;
        if (!initialState.isDarkMode) {
            document.body.classList.remove('is-dark');
        }
        if (data.favourites.length > 0) {
            initialState.favourites = data.favourites;
        }
    }

    renderGlobals() {
        this.$app.prepend(Header());
    }
}

new App();
