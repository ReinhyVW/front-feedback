import NavBar from "../../shared/components/NavBar"
import requireAuth from "../../shared/domain/requireAuth"

function Data() {
    return (
        <>
            <NavBar />

            <div className="absolute right-0 w-10/12 h-full flex flex-col items-center justify-evenly">
                <div className="w-1/4 h-1/4 flex flex-col bg-sky-100 shadow-xl items-center justify-evenly" >
                    Export
                    <button>Export</button>
                </div>

                <div>
                    Delete
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
}

export default requireAuth(Data)