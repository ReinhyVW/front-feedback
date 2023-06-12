export default function DataCard({ title, data, date, textColor, borderColor, bgColor }) {
    return (
        <div className={`flex flex-col w-1/3 h-5/6 items-center justify-between rounded-2xl border-2 ${borderColor} ${textColor} ${bgColor} shadow-sm`}>
            <h4 className={`w-full h-1/6 items-center p-3 flex text-2xl`}>{title}</h4>
            <h3 className="text-5xl">{data}</h3>
            <h5>{date}</h5>
        </div>
    )
}