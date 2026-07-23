function updateProfileInfo(profileData){
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

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

(async () => {
    const profileData = await fetchProfileDate()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
})()