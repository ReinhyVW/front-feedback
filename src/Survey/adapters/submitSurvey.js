export default function submitSurvey(answer, reason, token) {
    fetch('http://localhost:4000/survey', {
        method: 'POST',
        body: JSON.stringify({ answer, reason, token }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch(error => console.error(error));
}