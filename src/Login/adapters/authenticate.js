export default function autenticate(username, password) {
    return fetch('https://feedback-back-dhg.azurewebsites.net/auth', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            return data.redirectUrl;
        });
}