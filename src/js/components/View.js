export default function View(title, children) {
    const viewEl = document.querySelector('#router-outlet');

    const page = document.createElement('div');
    page.classList.add('container');
    page.innerHTML = `<h1>${title}</h1>`;
    page.append(children);

    viewEl.innerHTML = '';
    viewEl.append(page);
    return viewEl;
}
