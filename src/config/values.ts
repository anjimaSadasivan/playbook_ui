export const buildGithuburl = (clientId: string, state: string) => {
    const baseUrl = "https://github.com/login/oauth/authorize"
    const redirectUri = "http://localhost:5173/auth/callback"
    const scope = "user:email"

    return(
        `${baseUrl}`+
        `?client_id=${clientId}`+
        `&{redirect_uri}=${encodeURIComponent(redirectUri)}`+
        `&scope=${scope}`+
        `&state=${state}`


    )
}