import Header from './components/Header';
import toggleTheme from './functions/toggleTheme';
import RouterHandler from './router';

class App {
    constructor() {
        // Refs
        this.$app = document.querySelector('#app');
        this.$themeBtn = null;

        // Init
        this.RenderGlobals();
        RouterHandler();
        this.eventHandlers();
    }

    RenderGlobals() {
        const parser = new DOMParser();
        // Header
        const header = parser.parseFromString(Header(), 'text/html').body
            .childNodes[0];
        this.$app.prepend(header);

        this.$themeBtn = document.querySelector('.theme-btn');
    }

    // Events
    eventHandlers() {
        this.$themeBtn.addEventListener('click', () =>
            toggleTheme(this.$themeBtn)
        );
    }
}

new App();
