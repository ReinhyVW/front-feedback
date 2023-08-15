import images from "../../shared/images/images.js"
import requireAuth from "../../shared/domain/requireAuth.jsx"

import AnswerCard from "../components/AnswerCard.jsx"

function Answer() {
    return (
        <div className="w-full h-full absolute flex flex-col items-center justify-center gap-20">
            <h1 className="text-sky-950 text-2xl sm:text-3xl lg:text-5xl text-center">How was your experience with our service today?</h1>
            <div className="flex w-full items-start justify-center gap-8 xl:gap-24 mx-12">
                <AnswerCard icon={images.excellent} title={"EXCELLENT"} answer={2} />
                <AnswerCard icon={images.good} title={"FAIR"} answer={1} />
                <AnswerCard icon={images.poor} title={"POOR"} answer={0} />
            </div>

            <img src={images.dhg} alt="Logo" />
        </div>
    )
}

export default requireAuth(Answer)