import authenticate from '../adapters/authenticate';

export default function getCredentials(username, password) {
    authenticate(username, password)
        .then(redirectUrl => {
            window.location.href = '/' + redirectUrl;
        })
        .catch(error => console.error(error));
}