import { useEffect } from "react";

import images from "../../shared/images/images.js";
import requireAuth from "../../shared/domain/requireAuth.jsx"

import AnswerCard from "../components/AnswerCard.jsx"
import ReasonCard from "../components/ReasonCard.jsx"

import { answerImage } from "../domain/chooseImage.js"
import { reasonTimeOut } from "../domain/reasonTimeOut.js";

function Reason() {
    const answer = localStorage.getItem("answer");
    const image = answerImage[answer];

    useEffect(() => {
        const timeoutId = setTimeout(reasonTimeOut, 60000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="w-full h-full absolute flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col w-full h-1/2 items-center justify-center gap-8">
                <div className="w-full h-4/6 flex items-center justify-center">
                    <AnswerCard icon={image} answer={answer} />
                </div>
                <h1 className="text-sky-950 text-7xl">Please select a reason</h1>
            </div>

            <div className="lg:flex lg:flex-row lg:w-10/12 lg:h-1/4 lg:items-center lg:justify-center lg:gap-2 md:flex-col md:w-3/4 md:h-1/4 md:gap-2">
                <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:gap-2 md:gap-2 md:flex md:h-1/2 md:items-center md:justify-center">
                    <ReasonCard title={"Doctor"} reason={1} />
                    <ReasonCard title={"Staff"} reason={2} />
                    <ReasonCard title={"Hold"} reason={3} />
                </div>
                <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:gap-2 md:gap-2 md:flex md:h-1/2 md:items-center md:justify-center">
                    <ReasonCard title={"Front Desk"} reason={4} />
                    <ReasonCard title={"Facility"} reason={5} />
                    <ReasonCard title={"All"} reason={6} />
                </div>
            </div>

            <img src={images.dhg} alt="" />
        </div>
    )
}

export default requireAuth(Reason)