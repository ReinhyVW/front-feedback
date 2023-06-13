import submitSurvey from "../adapters/submitSurvey.js";

export default function takeReason(reason) {
    const answer = localStorage.getItem('answer');
    const token = localStorage.getItem('token');

    submitSurvey(answer, reason, token)
}