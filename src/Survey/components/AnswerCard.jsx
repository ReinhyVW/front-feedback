import takeAnswer from "../domain/takeAnswer.js";

export default function AnswerCard({ icon, title, answer }) {
    const handleClick = () => {
        window.location.pathname.endsWith("/survey")
            ? takeAnswer(answer)
            : (window.location.href = "/survey");
    };

    return (
        <button className="flex flex-col items-center justify-center border-sky-950 border-4 shadow-2xl rounded-3xl h-28 sm:h-52 lg:h-72 w-28 sm:w-52 lg:w-72" onClick={handleClick}>
            <img src={icon} alt="" className="h-2/3 w-2/3" />
            <h2 className="sm:text-xl md:text-2xl lg:text-5xl text-sky-950 ">{title}</h2>
        </button>
    );
}