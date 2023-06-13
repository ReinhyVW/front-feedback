import authenticate from '../adapters/authenticate.js';

export default function getCredentials(username, password) {
    authenticate(username, password)
        .then(redirectUrl => {
            window.location.href = '/' + redirectUrl;
        })
        .catch(error => console.error(error));
}