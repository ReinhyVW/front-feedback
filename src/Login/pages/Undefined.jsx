import LoginForm from "../components/LoginForm.jsx";
import images from "../../shared/images/images.js";

export default function Undefined() {
    function hideDialog(id) {
        document.getElementById(id).style.display = "none";
    }

    return (
        <div
            className="w-full h-full absolute flex items-center justify-center bg-center"
            style={{ backgroundImage: `url(${images.loginBg})` }}
        >
            <LoginForm />

            <div id="del-backdrop" className="flex items-center justify-center absolute h-full w-full bg-opacity-75 bg-gray-950 z-50">
                <div id="deleteDialog" className="flex flex-col items-center justify-evenly h-80 w-10/12 sm:w-1/2 xl:w-1/3 bg-red-50">
                    <div className="flex justify-end w-full h-9">
                        <button onClick={() => { hideDialog("del-backdrop") }} className=" p-2 text-2xl text-black">✖</button>
                    </div>

                    <div className="w-full h-full flex flex-col justify-evenly items-center">
                        <h3 className="text-red-950 text-2xl sm:text-3xl xl:text-4xl">INCORRECT PASSWORD</h3>

                        <p className="w-10/12 text-justify">You have entered an incorrect password. Please try again or contact the administrator for support</p>


                        <button type="button" onClick={() => { hideDialog("del-backdrop") }} className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <img src={images.retry} alt="" className="w-4 h-4 text-white mr-2" />
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}