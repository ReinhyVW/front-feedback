export default function autenticate(username, password) {
    return fetch('http://localhost:4000/auth', {
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