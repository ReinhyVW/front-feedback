import { useMemo, useState, useEffect } from 'react';


export function usePieData(excellent, good, poor) {
    const data = useMemo(
        () => [
            ["Answer", "Amount for Day"],
            ["Excellent", excellent] || ["Excellent", 0],
            ["Good", good] || ["Good", 0],
            ["Poor", poor] || ["Good", 0]
        ],
        [excellent, good, poor]
    );

    const options = {
        pieHole: 0.4,
        is3D: false,
        colors: ['#22C55E', '#FACC16', '#F04444'],
        legend: {
            position: "bottom"
        },
        fontSize: 22
    };

    return {
        options,
        data
    };
}



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
                newData.push([reason, repetitions, "#A5B4FC", null]);
            });

            setData(newData);
        }
    }, [reason]);

    const options = {
        width: "100%",
        height: 250,
        bars: { groupWidth: "90%" },
        legend: { position: "none" },
        fontSize: 24
      };

    return {
        options,
        data
    };
}