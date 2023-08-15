import { useState, useEffect } from 'react';

import images from '../../shared/images/images.js';

import Button from '../../shared/components/Button.jsx';

import { formatValue, formatPercentage } from '../domain/formatFeedback.jsx'
import { getCenters } from '../domain/getCenters.js';
import findCenterId from '../domain/findCenterId.js';
import saveDetailData from '../domain/saveDetailData.js';

export default function SummaryBar({ center, excellent, good, poor, excellentReason, poorReason }) {

    const total = excellent + good + poor;


    return (
        <div className="flex w-full h-24 bg-blue-50 rounded-2xl justify-evenly items-center">
            <div className="flex w-1/5 items-center justify-center text-center text-black text-xl">
                <h2>{center}</h2>
            </div>

            <div className="flex h-full justify-center items-center w-1/4">
                <div className="h-full w-1/4 flex flex-col justify-center items-center">
                    <img src={images.excellent} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-xl'>{formatValue(excellent)}</p>
                </div>

                <div className="h-full w-1/4 flex flex-col justify-center items-center">
                    <img src={images.good} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-xl'>{formatValue(good)}</p>
                </div>

                <div className="h-full w-1/4 flex flex-col justify-center items-center">
                    <img src={images.poor} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-xl'>{formatValue(poor)}</p>
                </div>
            </div>

            <div className="flex h-full justify-evenly gap-1 w-1/4">
                <div className="h-full w-1/4 flex flex-col justify-center items-center">
                    <img src={images.excellent} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-xl'>{formatPercentage(excellent, total)}</p>
                </div>

                <div className="h-full w-1/4 flex flex-col justify-center items-center">
                    <img src={images.good} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-xl'>{formatPercentage(good, total)}</p>
                </div>

                <div className="h-full w-1/4 flex flex-col justify-center items-center">
                    <img src={images.poor} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-xl'>{formatPercentage(poor, total)}</p>
                </div>
            </div>

            <div className="flex h-full justify-evenly gap-1 w-1/5">
                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.excellent} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-lg'>
                        {formatValue(excellentReason)}
                    </p>
                </div>

                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.poor} alt="" className='h-6 sm:w-8 xl:w-14 w-6 sm:h-8 xl:h-14' />
                    <p className='text-black xl:text-lg'>
                        {formatValue(poorReason)}
                    </p>
                </div>
            </div>

            <Button content={"+"} size={"sm"} action={() => { saveDetailData(center) }} />

        </div>
    );
}