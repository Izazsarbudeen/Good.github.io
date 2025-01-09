// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Load personal information
    document.getElementById('headerName').innerText = `${config.personalInfo.name} - ${config.personalInfo.profession}`;
    document.getElementById('aboutDescription').innerText = config.personalInfo.description;
    document.getElementById('footerName').innerText = config.personalInfo.name;

    // Add social media links dynamically
    const socialLinksContainer = document.getElementById('socialLinks');
    config.socialLinks.forEach(link => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${link.url}" target="_blank"><i class="${link.iconClass}"></i></a>`;
        socialLinksContainer.appendChild(listItem);
    });

    // Add projects dynamically
    const projectsContainer = document.getElementById('projectsGrid');
    config.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Learn more</a>
        `;
        projectsContainer.appendChild(projectCard);
    });
});
