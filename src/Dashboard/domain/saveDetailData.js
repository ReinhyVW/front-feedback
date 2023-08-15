import moment from "moment";

export default function saveDetailData(center) {
    const searchCenter = center;
    const searchDate = moment(new Date).format('YYYY/MM/DD');
    localStorage.setItem('searchCenter', searchCenter);
    localStorage.setItem('searchDate', searchDate);
    window.location.href = '/detail';
}