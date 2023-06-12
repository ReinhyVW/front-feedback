import { Chart } from "react-google-charts";

import NavBar from "../../shared/components/NavBar";
import { formattedToday, today } from "../../shared/domain/today";
import requireAuth from "../../shared/domain/requireAuth";

import DataCard from "../../shared/components/DataCard";

import { useFeedbackTotalizer } from "../domain/useFeedbackTotalizer";
import { useFeedbackFilter } from "../domain/useFeedbackFilter";
import { useBarData, usePieData } from "../domain/useChartData";

function Portal() {
    const [totalFeedbacks, poorSum] = useFeedbackTotalizer(today);
    const { centerFeedbackSummary, reasonSummary } = useFeedbackFilter(today);

    const { options: centerOptions, data: centerData } = usePieData(centerFeedbackSummary)
    const { options: reasonOptions, data: reasonData } = useBarData(reasonSummary)

    console.log(centerFeedbackSummary)

    return (
        <div className="w-full h-full absolute">
            <NavBar />
            <div className="absolute right-0 w-10/12 h-full flex flex-col items-center justify-evenly">
                <div className="w-full h-1/4 flex items-center justify-evenly">
                    <DataCard title={'Surveys Today'} data={totalFeedbacks} date={formattedToday} textColor={"text-indigo-800"} borderColor={"border-indigo-800"} bgColor={"bg-indigo-200"} />
                    <DataCard title={'Critical Feedback'} data={poorSum} date={formattedToday} textColor={"text-red-800"} borderColor={"border-red-800"} bgColor={"bg-red-200"} />
                </div>

                <div className="w-full h-2/3 flex items-center justify-evenly">
                    <div className="h-full w-5/12 flex flex-col items-center justify-center color-important">
                        <h2 className="text-sky-950 text-3xl ">Surveys per Center</h2>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={centerData}
                            options={centerOptions}
                        />
                    </div>

                    <div className="h-full w-5/12 flex flex-col items-center justify-center">
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