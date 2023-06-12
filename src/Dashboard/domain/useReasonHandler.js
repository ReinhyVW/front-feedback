import { useEffect, useState } from 'react';

export default function useReasonHandler() {
    const [selectedReason, setSelectedReason] = useState('Poor');

    useEffect(() => {
        const reason = selectedReason;

        setSelectedReason(reason);
    }, [selectedReason]);

    return {
        selectedReason,
        handleReasonChange: setSelectedReason
    };
}
