import moment from 'moment';
import { useEffect, useState } from 'react';

export default function useDateHandler(initialDate) {
    const [selectedDate, setSelectedDate] = useState(moment(initialDate).toISOString());
    const [month, setSelectedMonth] = useState(moment(setSelectedDate).format('YYYY/MM/DD'))
    const [year, setSelectedYear] = useState(moment(setSelectedDate).format('YYYY'))

    useEffect(() => {
        const formattedDate = moment(selectedDate).format('YYYY/MM/DD');
        const month = moment(selectedDate).format('YYYY/MM');
        const year = moment(selectedDate).format('YYYY');
        setSelectedDate(formattedDate);
        setSelectedMonth(month)
        setSelectedYear(year)
    }, [selectedDate, setSelectedMonth, setSelectedYear]);

    return {
        selectedDate,
        month,
        year,
        handleDateChange: setSelectedDate
    };
}