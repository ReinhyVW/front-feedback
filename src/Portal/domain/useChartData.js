import { useMemo, useState, useEffect } from 'react';


export function usePieData(data) {
    const formattedData = useMemo(() => {
        const pieData = Object.entries(data).map(([answer, amount]) => [
            answer,
            amount
        ]);
        return [["Answer", "Amount for Day"], ...pieData];
    }, [data]);

    const options = {
        pieHole: 0.4,
        is3D: false,
        colors: ["#fecaca", "#d9f99d", "#c7d2fe", "#f5d0fe", "#fecdd3"],
        pieSliceTextStyle: {
            color: '#082f49',
        },
        legend: {
            position: "bottom"
        },
        fontSize: 24,
    };

    return {
        options,
        data: formattedData
    };
}


//----------------------------------------------------------------

export function useBarData(reason) {
    const [data, setData] = useState([
        [
            "Reason",
            "Repetitions",
            { role: "style" },
            {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
            },
        ],
    ]);

    useEffect(() => {
        if (reason && typeof reason === 'object') {
            const newData = [
                [
                    "Reason",
                    "Repetitions",
                    { role: "style" },
                    {
                        sourceColumn: 0,
                        role: "annotation",
                        type: "string",
                        calc: "stringify",
                    },
                ],
            ];

            Object.entries(reason).forEach(([reason, repetitions]) => {
                newData.push([reason, repetitions, "#93c5fd", null]);
            });

            setData(newData);
        }
    }, [reason]);

    const options = {
        width: "100%",
        height: "100%",
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
        fontSize: 24
    };

    return {
        options,
        data
    };
}