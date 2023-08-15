import { useMemo, useState, useEffect } from 'react';

export function usePieData(excellent, good, poor) {
    const width = window.innerWidth;

    const breakpoints = {
        medium: 1024,
        large: 1440
    };

    const data = useMemo(
        () => [
            ["Answer", "Amount for Day"],
            ["Excellent", excellent || 0],
            ["Good", good || 0],
            ["Poor", poor || 0]
        ],
        [excellent, good, poor]
    );

    let fontSize = 14;

    if (width >= breakpoints.large) {
        fontSize = 20;
    } else if (width >= breakpoints.medium) {
        fontSize = 18;
    }

    const options = {
        pieHole: 0.4,
        is3D: false,
        colors: ['#22C55E', '#FACC16', '#F04444'],
        legend: {
            position: "bottom"
        },
        fontSize
    };

    return {
        options,
        data
    };
}



export function useBarData(reason) {
    const width = window.innerWidth;

    const breakpoints = {
        medium: 1024,
        large: 1440
    };

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

    let fontSize = 14;

    if (width >= breakpoints.large) {
        fontSize = 20;
    } else if (width >= breakpoints.medium) {
        fontSize = 18;
    }

    const options = {
        width: "100%",
        height: 250,
        bars: { groupWidth: "90%" },
        legend: { position: "none" },
        fontSize
      };

    return {
        options,
        data
    };
}