import './NavBar.css'

import images from '../images/images.js'
import logout from '../domain/logout.js'

export default function NavBar() {
    const showBar = () => {
        const sidebar = document.getElementById('sidebar');
        const sidebarOpener = document.getElementById('sidebarOpener');
        const sidebarCloser = document.getElementById('sidebarCloser');

        sidebar.className = 'flex flex-col bg-sky-50 z-20 h-full absolute left-0 items-center w-full sm:w-5/12 xl:w-2/12';
        sidebarOpener.className = 'hidden'
        sidebarCloser.className = 'p-4 text-2xl rounded-full w-16 bg-sky-200 fixed z-40 right-2 bottom-2'
    }

    const hideBar = () => {
        const sidebar = document.getElementById('sidebar');
        const sidebarOpener = document.getElementById('sidebarOpener');
        const sidebarCloser = document.getElementById('sidebarCloser');

        sidebar.className = 'hidden';
        sidebarOpener.className = 'p-4 text-2xl rounded-full w-16 bg-sky-200 fixed z-30 right-2 bottom-2'
        sidebarCloser.className = 'hidden'
    }

    return (
        <>
            <button id="sidebarOpener" onClick={showBar} type="button" className="p-4 text-2xl rounded-full w-16 bg-sky-200 fixed z-10 right-2 bottom-2 xl:hidden">
                <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="show h-8 w-8 top-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>

            <button id="sidebarCloser" onClick={hideBar} type="button" className="p-4 text-2xl rounded-full w-16 bg-sky-200 fixed z-10 right-2 bottom-2 xl:hidden hidden">
                <svg id="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="h-8 w-8 top-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <nav className='flex-col bg-sky-50 z-20 h-full absolute left-0 items-center w-full sm:w-6/12 xl:w-2/12 hidden xl:flex' id='sidebar'>

                <div className='w-full flex justify-center m-2'>
                    <img src={images.dhg} alt="" className='w-[90%]' />
                </div>

                <div className='h-[50%] w-[100%] text-black text-2xl flex flex-col gap-2 mt-8'>
                    <a href='/portal' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100 active'>
                        <img src={images.home} alt="Home icon" className='h-[50%] w-[20%]' />
                        <h2 className='h-full flex items-center w-[70%]'>Home</h2>
                    </a>
                    <a href='/survey' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100 active'>
                        <img src={images.survey} alt="Survey icon" className='h-[50%] w-[20%]' />
                        <h2 className='h-full flex items-center w-[70%]'>Survey</h2>
                    </a>
                    <a href='/dashboard' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100 active'>
                        <img src={images.dashboard} alt="Dashboard icon" className='h-[50%] w-[20%]' />
                        <h2 className='h-full flex items-center w-[70%]'>Dashboard</h2>
                    </a>
                    <a href='/admin' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100 active'>
                        <img src={images.admin} alt="Admin icon" className='h-[50%] w-[20%]' />
                        <h2 className='h-full flex items-center w-[70%]'>Admin</h2>
                    </a>
                    <a href='/data' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100 active'>
                        <img src={images.data} alt="Data icon" className='h-[50%] w-[20%]' />
                        <h2 className='h-full flex items-center w-[70%]'>Data</h2>
                    </a>
                </div>

                <div className='flex flex-col w-full items-center bottom-4 left-0 absolute'>
                    <button onClick={logout} className='h-12 w-12 flex items-center justify-center'>
                        <img src={images.logout} alt="Logout icon" className='h-full' />
                    </button>
                </div>
            </nav>
        </>
    );
}