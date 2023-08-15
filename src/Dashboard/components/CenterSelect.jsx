export default function CenterSelect({ centers }) {
    return (
        <select id="center" className='h-4/5 w-full rounded-3xl bg-sky-50 cursor-pointer text-sky-950'>
            <option value="" className="text-white">Select a center</option>
            {centers.map((center) => (
                <option key={center.CenterId} value={center.FacilityName} className="text-sky-950">
                    {center.FacilityName}
                </option>
            ))}
        </select>
    );
}