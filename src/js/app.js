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
        this.renderGlobals();
        RouterHandler();
    }

    renderGlobals() {
        this.$app.prepend(Header());
    }
}

new App();
