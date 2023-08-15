import Papa from 'papaparse';

export default function exportRecords(fromDate, toDate) {
    const exportData = (data, fileName) => {
        const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };

    fetch(`https://feedback-back-dhg.azurewebsites.net/export?fromDate=${fromDate}&toDate=${toDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            const exportedData = Papa.unparse(data.download);
            exportData(exportedData, 'data.csv');
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
}