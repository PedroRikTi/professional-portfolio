function updateProfileInfo(profileData) {
    const photo = document.getElementById('profilePhoto')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profileName')
    name.innerText = profileData.name

    const job = document.getElementById('profileJob')
    job.innerText = profileData.job

    const location = document.getElementById('profileLocation')
    location.innerText = profileData.location

    const phone = document.getElementById('profilePhone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profileEmail')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    if (!softSkills) return

    softSkills.innerHTML = profileData.skills.softSkills
        .map(skill => `<li>${skill}</li>`)
        .join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    if (!hardSkills) return

    hardSkills.innerHTML = profileData.skills.hardSkills
        .map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`)
        .join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')

    if (!languages) return

    languages.innerHTML = profileData.languages
        .map(language => `<li>${language}</li>`)
        .join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')

    if (!portfolio) return

    portfolio.innerHTML = profileData.portfolio
        .map(project => {
            return `
                <li>
                    <h3 class="${project.github ? 'github' : ''}">${project.name}</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </li>
            `
        })
        .join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')

    if (!professionalExperience) return

    professionalExperience.innerHTML = profileData.professionalExperience
        .map(experience => {
            return `
                <li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p>${experience.description}</p>
                </li>
            `
        })
        .join('')
}

(async () => {
    const profileData = await fetchProfileDate()

    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()