const client_id = 'c14ef43d33614a3882e0301f269d1ff6';
const redirect_url = 'http://localhost:3000/';
const scope = 'playlist-modify-public playlist-modify-private playlist-read-private';
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
            console.log(userToken);
            window.setTimeout(() => {
                userToken = '';
            }, Number(expirationQuery[1]) * 1000);
            return userToken
        } else {
            window.location = url;
        }
    }
};

export default Spotify;