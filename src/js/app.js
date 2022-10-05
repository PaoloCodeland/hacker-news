import toggleTheme from './functions/toggleTheme';

class App {
    constructor() {
        // Refs
        this.themeBtn = document.querySelector('.theme-btn');

        // Init
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
