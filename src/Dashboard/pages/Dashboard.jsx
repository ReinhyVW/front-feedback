import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import NavBar from "../../shared/components/NavBar.jsx"
import images from "../../shared/images/images.js"
import requireAuth from "../../shared/domain/requireAuth.jsx"

import useDateHandler from '../domain/useDateHandler.js'
import { useFeedbackFilter } from '../domain/useFeedbackFilter.js'
import pickMaxReason from '../domain/pickMaxReason.js';

import SearchBar from "../components/SearchBar.jsx"
import SummaryBar from '../components/SummaryBar.jsx';

function Dashboard() {
    const { selectedDate, handleDateChange } = useDateHandler(new Date())
    const { filteredFeedback } = useFeedbackFilter(selectedDate);

    return (
        <div className="w-full h-full absolute">
            <NavBar />

            <div className="absolute right-0 h-full flex flex-col items-center justify-evenly w-full xl:w-10/12 overflow-hidden">
                <div className="flex w-11/12 items-center justify-center h-24" id='top-container'>
                    <SearchBar />
                </div>
                <div className="w-11/12 h-3/4" id='bottom-container'>
                    <div id='title-container' className="text-black h-1/6 text-3xl items-center justify-center flex gap-2">
                        <h1 className="h-3/5 flex items-center justify-center" >SUMMARY</h1>
                        <button className="h-3/5" onClick={() => document.getElementById('date-picker').click()}>
                            <img src={images.calendar} alt="" className="h-full" />
                        </button>
                        <div className=''>
                            <DatePicker selected={new Date(selectedDate)} onChange={handleDateChange} id="date-picker" className='hidden absolute ' />
                        </div>
                    </div>

                    <div className="flex flex-col items-start pt-3 pb-3 box-border gap-4 w-full h-5/6">
                        {filteredFeedback.map((item, index) => {
                            const { Center, Excellent, Good, Poor, excellentReason, poorReason } = item;
                            const key = `${selectedDate}-${Center}-${index}`;

                            return (
                                <SummaryBar
                                    key={key}
                                    center={Center}
                                    excellent={Excellent}
                                    good={Good}
                                    poor={Poor}
                                    excellentReason={pickMaxReason(excellentReason)}
                                    poorReason={pickMaxReason(poorReason)}
                                />
                            )
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default requireAuth(Dashboard)