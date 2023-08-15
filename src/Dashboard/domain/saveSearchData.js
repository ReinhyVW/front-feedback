import moment from "moment";

export default function saveSearchData() {
    const centerInput = document.getElementById('center').value;
    const dateInput = document.getElementById('date').value;

    if (centerInput && dateInput) {
        const searchCenter = centerInput;
        const searchDate = moment(dateInput).format('YYYY/MM/DD');
        localStorage.setItem('searchCenter', searchCenter);
        localStorage.setItem('searchDate', searchDate);
        window.location.href = '/detail';
    } else {
        alert("Please select a date and a center to search");
    }
}