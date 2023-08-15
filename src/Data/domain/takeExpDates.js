import exportRecords from "../adapters/exportRecords.js";

export default function takeExpDates(fromDate, toDate) {
    exportRecords(fromDate, toDate)
}