import Navigo from 'navigo';
import Home from './pages/home';
import New from './pages/new';
import Page404 from './pages/404';

export const routes = [
    {
        path: '/',
        page: Home,
        label: 'Top',
        show: true,
    },
    {
        path: '/new',
        page: New,
        label: 'New',
        show: true,
    },
    {
        path: '/ask',
        page: Home,
        label: 'Ask',
        show: true,
    },
    {
        path: '/show',
        page: Home,
        label: 'Show',
        show: true,
    },
    {
        path: '/favorites',
        page: Home,
        label: 'Favorites',
        show: true,
    },
    {
        path: '/item/:id',
        page: Home,
        label: 'Item',
        show: false,
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
