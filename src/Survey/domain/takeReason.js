import submitSurvey from "../adapters/submitSurvey";

export default function takeReason(reason) {
    const answer = localStorage.getItem('answer');
    const token = localStorage.getItem('token');

    submitSurvey(answer, reason, token)

    window.location.href = '/thanks';
}