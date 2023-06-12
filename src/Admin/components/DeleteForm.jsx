export default function DeleteForm() {
    const cancel = (event) => {
        event.preventDefault();
        document.getElementById("DeleteForm").style.display = 'none';
      }

    return (
        <div id="DeleteForm" className='w-full h-full left-0 top-0 absolute hidden flex-col items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='w-1/3 h-2/6 text-sky-950 flex flex-col items-center justify-evenly text-2xl bg-sky-200 border-2 border-sky-950 rounded-2xl'>
                <h3 className='h-3/6 flex items-center justify-center text-center'>Are you Sure that you want to delete this item?</h3>
                <div className='flex gap-8 h-2/6'>
                    <button className='h-4/5 p-3 bg-red-200 rounded-xl hover:bg-red-100' onClick={cancel}>Cancel</button>
                    <button id='DeleteButton' className='h-4/5 p-3 bg-green-200 rounded-xl hover:bg-green-100'>Confirm</button>
                </div>
            </div>
        </div>
    )
}