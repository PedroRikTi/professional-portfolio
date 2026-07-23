

async function fetchProfileDate() {
    const url = 'https://raw.githubusercontent.com/PedroRikTi/professional-portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}