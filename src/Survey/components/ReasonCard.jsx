import takeReason from "../domain/takeReason";

export default function ReasonCard({ title, reason }) {
    const handleClick = () => {
        takeReason(reason)
    };

    return (
        <button className="text-white h-5/6 w-1/3 bg-sky-800 rounded-3xl hover:bg-sky-600" onClick={handleClick} id={reason}>
            <h2 className="lg:text-5xl md:text-3xl">{title}</h2>
        </button>
    )
}