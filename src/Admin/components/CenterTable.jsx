import { useState, useEffect } from "react";

import { getCenters } from "../domain/getCenters";
import { useSelectCenter } from "../domain/selectData";

export default function CenterTable() {
  const [centers, setCenters] = useState([]);
  const { handleRadioChange } = useSelectCenter()

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
    <div className="w-10/12 h-full flex justify-center items-start text-sky-950 text-2xl overflow-scroll">
      <table id="CenterUpdate" className="w-full border-sky-950 p-1">
        <thead>
          <tr className="bg-sky-200 text-center h-12">
            <th></th>
            <th>ID</th>
            <th>FACILITY</th>
            <th>LOCATION</th>
            <th>ADDRESS CONTACT</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody className="bg-sky-100 text-center">
          {centers.map((center, index) => (
            <tr key={center.CenterId}>
              <td>
                <input
                  type="radio"
                  name="selected-center"
                  value={center.CenterId}
                  onChange={handleRadioChange}
                  defaultChecked={index === 0}
                />
              </td>
              <td>{center.CenterId}</td>
              <td>{center.FacilityName}</td>
              <td>{center.LocationAddress}</td>
              <td>{center.ContactName}</td>
              <td>{center.ContactPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}