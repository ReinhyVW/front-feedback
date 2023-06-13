import takeAnswer from "../domain/takeAnswer.js";

export default function AnswerCard({ icon, title, answer }) {
    const handleClick = () => {
        window.location.pathname.endsWith("/survey")
            ? takeAnswer(answer)
            : (window.location.href = "/survey");
    };

    return (
        <button className="flex flex-col items-center justify-center h-full w-1/4 border-sky-950 border-4 shadow-2xl rounded-3xl" onClick={handleClick}>
            <img src={icon} alt="" className="w-7/12" />
            <h2 className="text-4xl text-sky-950 ">{title}</h2>
        </button>
    );
}