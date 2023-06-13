export default function submitSurvey(answer, reason, token) {
    fetch('https://feedback-back-dhg.azurewebsites.net/survey', {
        method: 'POST',
        body: JSON.stringify({ answer, reason, token }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            // Manejar la respuesta del servidor
            console.log(data);
            window.location.href = '/thanks'
        })
        .catch((error) => {
            // Manejar errores
            console.error(error);
        });
}