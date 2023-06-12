import { useState, useEffect } from 'react';

import Button from '../../shared/components/Button'

import { getCenters } from '../domain/getCenters';
import saveSearchData from '../domain/saveSearchData';

import CenterSelect from './CenterSelect';

export default function SearchBar() {
    const [centers, setCenters] = useState([]);

    useEffect(() => {
        holdForData();
    }, []);

    async function holdForData() {
        try {
            const { centers } = await getCenters();
            setCenters(centers);
        } catch (error) {
            console.error('Failed to fetch centers:', error);
        }
    }

    return (
        <div className='flex w-full h-full bg-sky-100 shadow-2xl rounded-2xl items-center justify-evenly gap-2'>
            <h2 className='m-1 lg:text-3xl text-sky-950 md:text-2xl'>Detailed Lookup</h2>
            <div className='lg:h-2/3 lg:w-3/12 lg:items-center lg:flex lg:flex-row lg:justify-center gap-2 md:w-1/4 md:flex md:flex-col'>
                <label htmlFor="center" className='lg:text-2xl text-sky-950 md:text-xl md:text-center'>Center</label>
                <CenterSelect centers={centers} />
            </div>
            <div className='lg:h-2/3 lg:w-3/12 lg:items-center lg:flex lg:flex-row lg:justify-center gap-2 md:w-1/4 md:flex md:flex-col'>
                <label htmlFor="date" className='lg:text-2xl text-sky-950 md:text-xl md:text-center'>Date</label>
                <input type="date" id='date' className='h-4/5 w-full rounded-3xl bg-sky-50 cursor-pointer text-sky-950 p-1' />
            </div>

            <Button content={"Go to Detail"} size={"sm"} action={saveSearchData} />
        </div>
    );
}