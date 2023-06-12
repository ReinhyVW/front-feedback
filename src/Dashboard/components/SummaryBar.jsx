import images from '../../shared/images/images';

import { formatValue, formatPercentage } from '../domain/formatFeedback'
import Button from '../../shared/components/Button';

export default function SummaryBar({ center, excellent, good, poor, excellentReason, poorReason }) {
    const total = excellent + good + poor;

    return (
        <div className="flex w-full h-24 bg-blue-50 rounded-2xl justify-evenly items-center">
            <div className="flex w-1/6 items-center justify-center text-center text-black text-2xl">
                <h2>{center}</h2>
            </div>

            <div className="flex h-full justify-evenly gap-2">
                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.excellent} alt="" className='h-2/3'/>
                    <p className='text-black'>{formatValue(excellent)}</p>
                </div>

                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.good} alt="" className='h-2/3' />
                    <p className='text-black'>{formatValue(good)}</p>
                </div>

                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.poor} alt="" className='h-2/3' />
                    <p className='text-black'>{formatValue(poor)}</p>
                </div>
            </div>

            <div className="flex h-full justify-evenly gap-2">
                <div className="h-full w-1/ flex flex-col justify-center items-center">
                    <img src={images.excellent} alt="" className='h-2/3' />
                    <p className='text-black'>{formatPercentage(excellent, total)}</p>
                </div>

                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.good} alt="" className='h-2/3' />
                    <p className='text-black'>{formatPercentage(good, total)}</p>
                </div>

                <div className="h-full w-1/3 flex flex-col justify-center items-center">
                    <img src={images.poor} alt="" className='h-2/3' />
                    <p className='text-black'>{formatPercentage(poor, total)}</p>
                </div>
            </div>

            <div className="flex h-full justify-evenly gap-2">
                <div className="h-full w-1/2 flex flex-col justify-center items-center">
                    <img src={images.excellent} alt="" className='h-2/3' />
                    <p className='text-black'>
                        {formatValue(excellentReason)}
                    </p>
                </div>

                <div className="h-full w-1/2 flex flex-col justify-center items-center">
                    <img src={images.poor} alt="" className='h-2/3' />
                    <p className='text-black'>
                        {formatValue(poorReason)}
                    </p>
                </div>
            </div>

            <Button content={"+"} size={"sm"} />

        </div>
    );
}