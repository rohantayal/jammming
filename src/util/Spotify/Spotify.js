
let accessToken;
const clientId = "00a8d95140e84190bb1b0316ebf12133";
const redirectUrl = encodeURIComponent("https://rohantayal.github.io/jammming/");

const spotify = {
    getAccessToken() {
        console.log("Current URL:", window.location.href); // Full URL

        if (accessToken) {
            console.log("Using existing access token:", accessToken);
            return accessToken;
        }

        // Check the hash for the access token
        const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        console.log("Token extracted from URL:", tokenInUrl); // Log extracted token
        console.log("Expiry time extracted from URL:", expiryTime); // Log extracted expiry time

        if (tokenInUrl && expiryTime) {
            accessToken = tokenInUrl[1];
            const expiresIn = Number(expiryTime[1]);

            console.log("Token found and set:", accessToken); // Confirm token set
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access token", null, "/");
            return accessToken;
        } else {
            console.log("Redirecting to Spotify for authorization");
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
            console.log("Redirect URL:", redirect); // Confirm correct redirect URL
            window.location = redirect;

        }


    }
    ,


    async search(term) {
        console.log("Spotify search term:", term);
        accessToken = spotify.getAccessToken();
        console.log("Access token:", accessToken); // Debug log
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                method: 'GET',
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            console.log("API response status:", response.status);
            const jsonResponse = await response.json();
            console.log("API response data:", jsonResponse);
            if (!jsonResponse.tracks) {
                console.log("Response error: No tracks found");
                return [];
            }
            return jsonResponse.tracks.items.map(t => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri,
            }));
        } catch (error) {
            console.error('Error fetching tracks:', error);
        }
    },

    savePlaylist(name, trackUris) {
        if (name || trackUris) {
            const aToken = spotify.getAccessToken();
            const header = { Authorization: `Bearer ${aToken}` };
            let userId;

            return fetch("https://api.spotify.com/v1/me", { headers: header })
                .then(response => response.json())
                .then((jsonResponse) => {
                    userId = jsonResponse.id;
                    let playlistId;
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                        headers: header,
                        method: "post",
                        body: JSON.stringify({ name: name })
                    })
                        .then(response => response.json())
                        .then((jsonResponse) => {
                            playlistId = jsonResponse.id;
                            return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,{
                                headers: header,
                                method: "post",
                                body: JSON.stringify({uris: trackUris})
                            })
                        })
                })
        } else {
            return;
        }

    }
}

export default spotify;