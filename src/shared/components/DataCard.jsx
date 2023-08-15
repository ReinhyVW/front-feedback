export default function DataCard({ title, data, date, image, textColor, borderColor, bgColor }) {
    return (
        <div className="w-11/12 lg:w-4/12 h-[40%] lg:h-4/6">
            <div className={`widget w-full p-4 rounded-lg ${bgColor} border-l-4 ${borderColor} h-full flex`}>
                <div className="flex items-center">
                    <div className="icon w-14 p-3.5 bg-slate-100 text-white rounded-full mr-3">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-xl sm:text-2xl xl:text-3xl">{data}</div>
                        <div className={`${textColor} text-lg sm:text-xl xl:text-2xl`}>{title}</div>
                        <div className="text-gray-400 text-md sm:text-lg xl:text-xl">{date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}