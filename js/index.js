const projects_area = document.getElementById('projects');
const index_projects = projects.slice(0,4);

index_projects.forEach((e, i) => {
    
    let template = `
    <div class="project-area project-area${i+1}">
        <img src="${e.image}" alt="${e.title}">
        <div class="project-description">
            <h3 class="project-tile">${e.title}</h3>
            <p class="p-text">${e.description}</p>
            <a href="${e.link}" target="_blank">preview the project</a>
        </div>
    </div>
    `;
    projects_area.innerHTML += template;
});
