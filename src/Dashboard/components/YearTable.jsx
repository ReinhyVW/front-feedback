export default function YearTable({ feedbackData }) {
    return (
        <table className="w-full h-3/4 text-xl">
            <thead>
                <tr className="bg-blue-300">
                    <th className="text-center text-blue-900 bg-white" ></th>
                    <th className="text-center text-blue-900">Excellent</th>
                    <th className="text-center text-blue-900">Good</th>
                    <th className="text-center text-blue-900">Poor</th>
                </tr>
            </thead>
            <tbody>
                {feedbackData.map(({ month, totalExcellent, totalGood, totalPoor }) => (
                    <tr className="bg-blue-100" key={month}>
                        <td className="text-center text-blue-900 bg-blue-300">{month}</td>
                        <td className="text-center text-blue-900">{totalExcellent}</td>
                        <td className="text-center text-blue-900">{totalGood}</td>
                        <td className="text-center text-blue-900">{totalPoor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}