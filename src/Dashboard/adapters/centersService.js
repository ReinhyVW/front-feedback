export async function fetchCenters() {
    const response = await fetch('https://feedback-back-dhg.azurewebsites.net/center');
    const { centers } = await response.json();
    return centers;
}  