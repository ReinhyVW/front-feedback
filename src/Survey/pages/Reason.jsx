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
        <div className="w-full h-full absolute flex flex-col items-center justify-center">
            <div className="flex flex-col w-full h-1/2 items-center justify-center gap-8">
                <div className="w-full h-3/6 flex items-center justify-evenly">
                    <AnswerCard icon={image} answer={answer} />
                </div>
                <h1 className="text-sky-950 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Please select a reason</h1>
            </div>

            <div className="flex w-11/12 h-1/3 lg:h-1/4 flex-col lg:flex-row justify-evenly lg:gap-2">
                <div className="flex items-center justify-evenly lg:w-[49%] lg:gap-2">
                    <ReasonCard title={"Doctor"} reason={1} />
                    <ReasonCard title={"Staff"} reason={2} />
                    <ReasonCard title={"Hold"} reason={3} />
                </div>
                <div className="flex items-center justify-evenly lg:w-[49%] lg:gap-2">
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