import toggleTheme from './functions/toggleTheme';
import RouterHandler from './router';

class App {
    constructor() {
        // Refs
        this.themeBtn = document.querySelector('.theme-btn');

        // Init
        RouterHandler();
        this.eventHandlers();
    }

    // Events
    eventHandlers() {
        this.themeBtn.addEventListener('click', () =>
            toggleTheme(this.themeBtn)
        );
    }
}

new App();
