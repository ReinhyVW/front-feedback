export default function submitSurvey(answer, reason, token) {
    fetch('https://feedback-back-dhg.azurewebsites.net/survey', {
        method: 'POST',
        body: JSON.stringify({ answer, reason, token }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch(error => console.error(error));
}