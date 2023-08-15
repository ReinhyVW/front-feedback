export default function deleteRecords(fromDate, toDate, token) {
    fetch('https://feedback-back-dhg.azurewebsites.net/delete', {
        method: 'DELETE',
        body: JSON.stringify({ fromDate, toDate, token }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle server response
            console.log(data);
            //window.location.reload();
        })
        .catch((error) => {
            // Handle errors
            console.error(error);
        });
}