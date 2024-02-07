const client_id = 'c14ef43d33614a3882e0301f269d1ff6';
const redirect_url = 'http://localhost:3000/';
const scope = 'playlist-modify-public playlist-modify-private playlist-read-private';
let apiURL = 'https://api.spotify.com/v1/'

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url +=  '&client_id=' + client_id;
url += '&scope=' + scope;
url += '&redirect_uri=' + redirect_url;

let userToken;

const Spotify = {

    getAccessToken() {
        if(userToken) {
            return userToken;
        };
        const tokenQuery = window.location.href.match(/access_token=([^&]*)/);
        const expirationQuery = window.location.href.match(/expires_in=([^&]*)/);
        if(tokenQuery && expirationQuery) {
            userToken = tokenQuery[1];
            const expirationTime = parseInt(expirationQuery[1]) * 1000;
            window.setTimeout(() => {
                userToken = null;
            }, expirationTime);
            return userToken;
        } else {
            window.location = url;
        }
    },

    async searchTracks(e, token) {
        e.preventDefault();
        const trackSearched = e.target[0].value; 
        const urlToFetch= apiURL + 'search?q=' + trackSearched + '&type=track';
        try{
            const res = await fetch(urlToFetch, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const jsonRes = await res.json();
            return jsonRes.tracks.items;
        } catch(err) {
            console.log(err)
        }
    },

    async getUserProfile(token) {
        const urlToFetch = apiURL + 'me'
        const res = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonRes = await res.json();
        return jsonRes;
    },

    async createPlaylist(userId, playlistName, token) {
        const urlToFetch = apiURL + 'users/' + userId + '/playlists';
        const data = JSON.stringify({
            name: playlistName,
            public: false
        });
        const res = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: data
        });
        const jsonRes = res.json();
        return jsonRes;
    },

    async updatePlaylist(uris, playlistId, token) {
        const urlToFetch = apiURL + 'playlists/' + playlistId + '/tracks';
        const trackUris = JSON.stringify({
            uris: uris
        });
        const res = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: trackUris
        });
        const jsonRes = await res.json();
        return jsonRes;        
    }
};

export default Spotify;