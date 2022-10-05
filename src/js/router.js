import Navigo from 'navigo';
import Home from './pages/home';
import Page404 from './pages/404';

export default function RouterHandler() {
    const router = new Navigo('/hacker-news');
    const routes = [
        {
            path: '/',
            page: Home,
        },
        {
            path: '/new',
            page: Home,
        },
        {
            path: '/ask',
            page: Home,
        },
        {
            path: '/show',
            page: Home,
        },
        {
            path: '/favorites',
            page: Home,
        },
    ];

    routes.forEach(({ path, page }) => {
        router.on(path, () => {
            page(path);
        });
    });

    router.notFound(() => {
        console.log('404');
        Page404();
    });

    router.resolve();
}
