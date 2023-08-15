import { useState } from "react";

import NavBar from "../../shared/components/NavBar.jsx";
import requireAuth from "../../shared/domain/requireAuth.jsx";
import images from "../../shared/images/images"; // No need for .js extension

import { lastMonthHtml, todayHtml } from "../../shared/domain/today"; // No need for .js extension
import takeDelDates from "../domain/takeDelDates.js";
import takeExpDates from "../domain/takeExpDates.js";

function Data() {
    const [deleteFrom, setDeleteFrom] = useState(lastMonthHtml);
    const [deleteTo, setDeleteTo] = useState(todayHtml);

    const [exportFrom, setExportFrom] = useState(lastMonthHtml);
    const [exportTo, setExportTo] = useState(todayHtml);

    // Update deleteFrom when input value changes
    const handleDeleteFromChange = (event) => {
        setDeleteFrom(event.target.value);
    };

    // Update deleteTo when input value changes
    const handleDeleteToChange = (event) => {
        setDeleteTo(event.target.value);
    };

    const handleExportFromChange = (event) => {
        setExportFrom(event.target.value);
    };

    const handleExportToChange = (event) => {
        setExportTo(event.target.value);
    };

    function showDialog(id) {
        document.getElementById(id).style.display = "flex";
    }

    function hideDialog(id) {
        document.getElementById(id).style.display = "none";
    }

    return (
        <>
            <NavBar />

            <div className="absolute right-0 h-full flex flex-col items-center justify-evenly w-full xl:w-10/12 overflow-hidden">
                <section id="export-section" className="bg-green-50 w-11/12 h-1/2 sm:w-8/12 sm:h-2/5 xl:w-10/12 xl:h-2/5 flex flex-col justify-evenly items-center gap-2">
                    <h2 className="text-green-950 text-3xl">EXPORT DATA</h2>

                    <div className="h-1/3 w-3/4 flex flex-col sm:flex-row items-center justify-evenly text-2xl">
                        <span className="flex gap-3 items-center justify-center">
                            <label htmlFor="exportFrom">From</label>

                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-green-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>

                                <input id="exportFrom" name="exportFrom" type="date" value={exportFrom} onChange={handleExportFromChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " />
                            </div>

                        </span>

                        <span className="flex gap-3 items-center justify-center">
                            <label htmlFor="exportTo">To</label>

                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-green-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>

                                <input id="exportTo" name="exportTo" type="date" value={exportTo} onChange={handleExportToChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Select date" />
                            </div>
                        </span>
                    </div>

                    <div>
                        <button type="button" onClick={() => {takeExpDates(exportFrom, exportTo)}} className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <img src={images.download} alt="" className="w-4 h-4 text-white mr-2" />
                            Export
                        </button>
                    </div>
                </section>

                <section id="delete-section" className="bg-red-50 w-11/12 h-1/2 sm:w-8/12 sm:h-2/5 xl:w-10/12 xl:h-2/5 flex flex-col justify-evenly items-center gap-2">
                    <h2 className="text-red-950 text-3xl">DELETE DATA</h2>

                    <div className="h-1/3 w-3/4 flex flex-col sm:flex-row items-center justify-evenly text-2xl">
                        <span className="flex gap-3 items-center justify-center">
                            <label htmlFor="deleteFrom">From</label>

                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-red-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>

                                <input id="deleteFrom" name="deleteFrom" type="date" value={deleteFrom} onChange={handleDeleteFromChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " />
                            </div>

                        </span>

                        <span className="flex gap-3 items-center justify-center">
                            <label htmlFor="deleteTo">To</label> {/* Changed htmlFor to deleteTo */}

                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-red-950" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>

                                <input id="deleteTo" name="deleteTo" type="date" value={deleteTo} onChange={handleDeleteToChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " />
                            </div>
                        </span>
                    </div>

                    <div>
                        <button type="button" onClick={() => { showDialog("del-backdrop") }} className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <img src={images.deleteIcon} alt="" className="w-4 h-4 text-white mr-2" />
                            Delete
                        </button>
                    </div>
                </section>

            </div>
            <div id="del-backdrop" className="hidden items-center justify-center absolute h-full w-full bg-opacity-75 bg-gray-950 z-50">
                <div id="deleteDialog" className="flex flex-col items-center justify-evenly h-80 w-10/12 sm:w-1/2 xl:w-1/3 bg-red-50">
                    <div className="flex justify-end w-full h-9">
                        <button onClick={() => { hideDialog("del-backdrop") }} className=" p-2 text-2xl text-black">✖</button>
                    </div>

                    <div className="w-full h-full flex flex-col justify-evenly items-center">
                        <h3 className="text-red-950 text-2xl sm:text-3xl xl:text-4xl">DATA DELETION</h3>

                        <p className="w-10/12 text-justify">Are you sure you want to delete this important data? This action cannot be undone.</p>


                        <div className="flex gap-2">
                            <button type="button" onClick={() => { takeDelDates(deleteFrom, deleteTo), hideDialog("del-backdrop") }} className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <img src={images.deleteIcon} alt="" className="w-4 h-4 text-white mr-2" />
                                Delete
                            </button>
                            <button type="button" onClick={() => { hideDialog("del-backdrop") }} className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <img src={images.cancel} alt="" className="w-4 h-4 text-white mr-2" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default requireAuth(Data);