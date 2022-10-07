import Navigo from 'navigo';
import Home from './pages/home';
import Page404 from './pages/404';

export const routes = [
    {
        path: '/',
        page: Home,
        label: 'Top',
    },
    {
        path: '/new',
        page: Home,
        label: 'New',
    },
    {
        path: '/ask',
        page: Home,
        label: 'Ask',
    },
    {
        path: '/show',
        page: Home,
        label: 'Show',
    },
    {
        path: '/favorites',
        page: Home,
        label: 'Favorites',
    },
];

const router = new Navigo('/hacker-news');

export default function RouterHandler() {
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
