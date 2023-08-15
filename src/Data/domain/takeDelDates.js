import deleteRecords from "../adapters/deleteRecords.js";

export default function takeDelDates(fromDate, toDate) {
    const token = localStorage.getItem('token');

    deleteRecords(fromDate, toDate, token)
}