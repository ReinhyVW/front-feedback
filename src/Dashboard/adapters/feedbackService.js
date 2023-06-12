export async function fetchFeedback() {
    const response = await fetch('http://localhost:4000/information');
    const { feedback } = await response.json();
    return feedback;
}