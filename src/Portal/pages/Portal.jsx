import { Chart } from "react-google-charts";

import NavBar from "../../shared/components/NavBar.jsx";
import { formattedToday, today } from "../../shared/domain/today.js";
import requireAuth from "../../shared/domain/requireAuth.jsx";

import DataCard from "../../shared/components/DataCard.jsx";

import { useFeedbackTotalizer } from "../domain/useFeedbackTotalizer.js";
import { useFeedbackFilter } from "../domain/useFeedbackFilter.js";
import { useBarData, usePieData } from "../domain/useChartData.js";
import images from "../../shared/images/images.js";

function Portal() {
    const [totalFeedbacks, poorSum] = useFeedbackTotalizer(today);
    const { centerFeedbackSummary, reasonSummary } = useFeedbackFilter(today);

    const { options: centerOptions, data: centerData } = usePieData(centerFeedbackSummary)
    const { options: reasonOptions, data: reasonData } = useBarData(reasonSummary)

    return (
        <div className="w-full h-full absolute">
            <NavBar />
            <div className="absolute right-0 h-full flex flex-col items-center justify-evenly w-full xl:w-10/12 overflow-hidden">
                <div className="flex items-center justify-evenly flex-col lg:flex-row w-full lg:mb-4 h-1/3">
                    <DataCard title={'Surveys Today'} data={totalFeedbacks} date={formattedToday} image={images.survey} textColor={"text-indigo-800"} borderColor={"border-indigo-800"} bgColor={"bg-indigo-200"} />
                    <DataCard title={'Critical Feedback'} data={poorSum} date={formattedToday} image={images.critical} textColor={"text-red-800"} borderColor={"border-red-800"} bgColor={"bg-red-200"} />
                </div>

                <div className="h-2/3 overflow-scroll flex flex-col lg:flex-row lg:items-center justify-start lg:justify-evenly w-11/12 lg:w-full">
                    <div className="lg:h-full flex flex-col items-center justify-center w-full lg:w-5/12">
                        <h2 className="text-sky-950 text-3xl ">Surveys per Center</h2>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={centerData}
                            options={centerOptions}
                        />
                    </div>

                    <div className="lg:h-full flex flex-col items-center justify-center w-full lg:w-5/12">
                        <h2 className="text-sky-950 text-3xl ">Summary of Reasons</h2>
                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={reasonData}
                            options={reasonOptions}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default requireAuth(Portal)