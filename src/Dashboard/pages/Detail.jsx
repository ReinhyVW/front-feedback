import 'react-datepicker/dist/react-datepicker.css';
import { Chart } from "react-google-charts";

import NavBar from "../../shared/components/NavBar.jsx";
import images from "../../shared/images/images.js";
import requireAuth from "../../shared/domain/requireAuth.jsx"

import { useFeedbackFilter, useFeedbackFilterYear } from '../domain/useFeedbackFilter.js';
import { usePieData, useBarData } from '../domain/useChartData.js';
import useDateHandler from '../domain/useDateHandler.js';
import useReasonHandler from '../domain/useReasonHandler.js';
import pickMaxReason from '../domain/pickMaxReason.js';

import SearchBar from "../components/SearchBar.jsx";
import YearTable from '../components/YearTable.jsx';

function Dashboard() {
    const { month, year, selectedDate } = useDateHandler(localStorage.getItem('searchDate'));

    const center = localStorage.getItem('searchCenter');

    const { selectedReason, handleReasonChange } = useReasonHandler()

    const { filteredFeedback: dayFeedback } = useFeedbackFilter(selectedDate, center);
    const { filteredFeedback: monthFeedback } = useFeedbackFilter(month, center);
    const { filteredFeedback: yearTotalFeedback } = useFeedbackFilter(year, center);

    const { filteredFeedback: yearFeedback } = useFeedbackFilterYear(year, center);
    const reasonDictionary = {
        "Excellent": 'excellentReason',
        "Good": 'goodReason',
        "Poor": 'poorReason'
    }

    const dayReason = reasonDictionary[selectedReason];
    const monthReason = reasonDictionary[selectedReason];

    const { options: dayOptions, data: dayData } = usePieData(dayFeedback["Excellent"], dayFeedback["Good"], dayFeedback["Poor"]);
    const { options: dayReasonOptions, data: dayReasonsData } = useBarData(dayFeedback[dayReason]);


    const { options: monthOptions, data: monthData } = usePieData(monthFeedback["Excellent"], monthFeedback["Good"], monthFeedback["Poor"]);
    const { options: monthReasonOptions, data: monthReasonsData } = useBarData(monthFeedback[monthReason])

    return (
        <div className="w-full h-full absolute">
            <NavBar />

            <div className="absolute right-0 w-10/12 h-full flex flex-col items-center justify-evenly overflow-hidden">
                <div className="flex w-11/12 items-center justify-center h-24" id='top-container'>
                    <SearchBar />
                </div>
                <div className='flex flex-col w-11/12 h-5/6 items-center'>
                    <div className='w-full pl-4 pt-1 box-border bg-sky-100 border-b-2 border-sky-200 text-sky-950 text-3xl'>{center} Feedback Dashboard</div>
                    <select
                        className='w-full h-12 bg-sky-50 cursor-pointer text-blue-950 text-center'
                        name="dayReason"
                        id="dayReason"
                        value={selectedReason}
                        onChange={(e) => handleReasonChange(e.target.value)}
                    >
                        <option value="Poor">Poor</option>
                        <option value="Excellent">Good</option>
                        <option value="Good">Excellent</option>
                    </select>
                    <div className='flex w-full h-full mt-4'>
                        <div className='flex flex-col box-border border-white h-full w-1/3 items-center'>
                            <h2 className='text-blue-950 text-2xl'>DAY FEEDBACKS</h2>
                            <Chart
                                chartType="PieChart"
                                width="100%"
                                height="400px"
                                data={dayData}
                                options={dayOptions}
                            />

                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="100px"
                                data={dayReasonsData}
                                options={dayReasonOptions}
                            />
                        </div>
                        <div className='flex flex-col box-border border-white h-full w-1/3 items-center'>
                            <h2 className='text-blue-950 text-2xl'>MONTH FEEDBACKS</h2>
                            <Chart
                                chartType="PieChart"
                                width="100%"
                                height="400px"
                                data={monthData}
                                options={monthOptions}
                            />

                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="400px"
                                data={monthReasonsData}
                                options={monthReasonOptions}
                            />
                        </div>

                        <div className='flex flex-col border-white h-5/6 w-1/3 items-center'>
                            <h2 className='text-blue-950 text-2xl'>YEAR FEEDBACKS</h2>
                            <div className='h-4/6 w-11/12'>
                                <YearTable feedbackData={yearFeedback} />
                            </div>

                            <div className='flex h-2/6 w-full items-center justify-center'>
                                <div className='w-1/3 h-5/6  flex flex-col justify-evenly items-center'>
                                    <img src={images.excellent} alt="" className='h-1/3' />
                                    <p>{pickMaxReason(yearTotalFeedback["excellentReason"])}</p>
                                </div>
                                <div className='w-1/3 h-5/6 flex flex-col justify-evenly items-center'>
                                    <img src={images.good} alt="" className='h-1/3' />
                                    <p>{pickMaxReason(yearTotalFeedback["goodReason"])}</p>
                                </div>
                                <div className='w-1/3 h-5/6 flex flex-col justify-evenly items-center'>
                                    <img src={images.poor} alt="" className='h-1/3' />
                                    <p>{pickMaxReason(yearTotalFeedback["poorReason"])}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default requireAuth(Dashboard);