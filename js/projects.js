
const cards = document.querySelector('.cards');
projects.forEach(e => {
    let template = `
    <div class="card">
        <div class="card-image">
            <a href="${e.link}" class="link" target="_blank"><img src="${e.image}" alt="${e.title}"></a>
        </div>
        <div class="card-content">
            <h2 class="card-content-title"><a href="${e.link}" class="card-link" target="_blank">${e.title}</a></h2>
            <h3 class="card-content-company">${e.company}</h3>
            <p class="card-content-text">${e.description}</p>
        </div>
    </div>
    `
    cards.innerHTML += template;
});
