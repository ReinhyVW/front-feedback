import { useState } from 'react';

export default function CenterForm() {
  const [facilityName, setFacilityName] = useState(value => value);
  const [locationAddress, setLocationAddress] = useState(value => value);
  const [contactName, setContactName] = useState(value => value);
  const [contactPhone, setContactPhone] = useState(value => value);

  const cancel = (event) => {
    event.preventDefault();
    document.getElementById("CenterForm").style.display = 'none';
  }

  return (
    <div id="CenterForm" className='w-full h-full left-0 top-0 absolute hidden flex-col items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className='w-1/3 h-4/6 text-sky-950 flex flex-col items-center justify-evenly text-2xl bg-sky-200 border-2 border-sky-950 rounded-2xl'>
        <h3 className=''>Create New Center</h3>

        <form
          name='creationForm'
          className='h-4/5 flex flex-col items-center justify-evenly'
          id='CenterFormAction'
        >
          <div className='w-10/12'>
            <label className="p-2">
              Facility Name:
              <input className="w-full h-2/3 bg-sky-100 p-1"
                type="text"
                name="facilityName"
                id='facilityName'
                value={facilityName}
                onChange={(e) => setFacilityName(e.target.value)}
                placeholder='e.x Coconut Pines'
              />
            </label>
          </div>
          <div className='w-10/12'>
            <label className="p-2">
              Location Address:
              <input className="w-full h-2/3 bg-sky-100 p-1"
                type="text"
                name="locationAddress"
                id='locationAddress'
                value={locationAddress}
                onChange={(e) => setLocationAddress(e.target.value)}
                placeholder='e.x. 1920 North Central Ave'
              />
            </label>
          </div>
          <div className='w-10/12'>
            <label className="p-2">
              Contact Name:
              <input className="w-full h-2/3 bg-sky-100 p-1"
                type="text"
                name="contactName"
                id='contactName'
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder='e.x Midalys Ramsay'
              />
            </label>
          </div>
          <div className='w-10/12'>
            <label className="p-2">
              Contact Phone:
              <input className="w-full h-2/3 bg-sky-100 p-1"
                type="number"
                name="contactPhone"
                id='contactPhone'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder='e.x 9005672030'
              />
            </label>
          </div>
          <div className='flex gap-8 h-1/6'>
            <button className='h-4/5 p-3 bg-red-200 rounded-xl hover:bg-red-100' onClick={cancel}>Cancel</button>
            <button className='h-4/5 p-3 bg-green-200 rounded-xl hover:bg-green-100' type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}