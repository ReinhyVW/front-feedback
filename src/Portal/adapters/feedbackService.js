export async function fetchFeedback() {
    const response = await fetch('https://feedback-back-dhg.azurewebsites.net/information');
    const { feedback } = await response.json();
    return feedback;
}