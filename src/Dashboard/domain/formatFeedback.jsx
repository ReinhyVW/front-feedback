export function formatPercentage(value, total) {
    if (value === null || value === 0) {
        return <span>&nbsp;</span>;
    }
    return ((value / total) * 100).toFixed(0) + '%';
}

export function formatValue(value) {
    if (value === null || value === 0) {
        return <span>None</span>;
    }
    return value;
}