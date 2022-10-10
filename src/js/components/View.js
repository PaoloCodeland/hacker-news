export const viewEl = document.querySelector('#router-outlet');

export default function View(title, children) {
    const page = document.createElement('div');
    page.classList.add('app-page', 'container');
    page.innerHTML = `<h1>${title}</h1>`;
    page.append(children);

    viewEl.innerHTML = '';
    viewEl.append(page);
    return viewEl;
}
