import takeReason from "../domain/takeReason.js";

export default function ReasonCard({ title, reason }) {
    const handleClick = () => {
        takeReason(reason)
    };

    return (
        <button className="text-white bg-sky-800 rounded-3xl hover:bg-sky-600 h-14 w-24 md:h-24 md:w-48 lg:w-52" onClick={handleClick} id={reason}>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{title}</h2>
        </button>
    )
}