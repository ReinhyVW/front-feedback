export default function takeAnswer(answer) {
    localStorage.setItem('answer', answer);
    window.location.href = '/reason';
}