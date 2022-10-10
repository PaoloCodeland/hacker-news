import Navigo from 'navigo';
import Home from './pages/home';
import New from './pages/new';
import Comments from './pages/comments';
import Page404 from './pages/404';

export const routes = [
    {
        path: '/',
        page: Home,
        name: 'Top',
        show: true,
    },
    {
        path: '/new',
        page: New,
        name: 'New',
        show: true,
    },
    {
        path: '/ask',
        page: Home,
        name: 'Ask',
        show: true,
    },
    {
        path: '/show',
        page: Home,
        name: 'Show',
        show: true,
    },
    {
        path: '/favorites',
        page: Home,
        name: 'Favorites',
        show: true,
    },
    {
        path: '/comments/:id',
        page: Comments,
        name: 'Comments',
        show: true,
    },
];

export const router = new Navigo('/hacker-news');

export default function RouterHandler() {
    routes.forEach(({ path, page }) => {
        router.on(path, ({ data }) => {
            page(data);
        });
    });

    router.notFound(() => {
        console.log('404');
        Page404();
    });

    router.resolve();
}
