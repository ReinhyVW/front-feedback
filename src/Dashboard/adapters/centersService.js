export async function fetchCenters() {
    const response = await fetch('http://localhost:4000/center');
    const { centers } = await response.json();
    return centers;
}  