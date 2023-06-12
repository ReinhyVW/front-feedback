import images from '../images/images'
import logout from '../domain/logout'

export default function NavBar() {
    return (
        <nav className='w-2/12 h-full absolute left-0 flex flex-col items-center bg-sky-50'>
            <div className='w-full flex justify-center m-2'>
                <img src={images.dhg} alt="" className='w-[90%]' />
            </div>

            <div className='h-[50%] w-[100%] text-black text-2xl flex flex-col gap-2 mt-8'>
                <a href='/portal' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100'>
                    <img src={images.home} alt="Home icon" className='h-[50%] w-[20%]' />
                    <h2 className='h-full flex items-center w-[70%]'>Home</h2>
                </a>
                <a href='/survey' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100'>
                    <img src={images.survey} alt="Home icon" className='h-[50%] w-[20%]' />
                    <h2 className='h-full flex items-center w-[70%]'>Survey</h2>
                </a>
                <a href='/dashboard' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100'>
                    <img src={images.dashboard} alt="Home icon" className='h-[50%] w-[20%]' />
                    <h2 className='h-full flex items-center w-[70%]'>Dashboard</h2>
                </a>
                <a href='/admin' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100'>
                    <img src={images.admin} alt="Home icon" className='h-[50%] w-[20%]' />
                    <h2 className='h-full flex items-center w-[70%]'>Admin</h2>
                </a>
                <a href='/data' className='flex h-[15%] w-full items-center gap-3 cursor-pointer hover:bg-sky-100'>
                    <img src={images.data} alt="Home icon" className='h-[50%] w-[20%]' />
                    <h2 className='h-full flex items-center w-[70%]'>Data</h2>
                </a>
            </div>

            <div className='flex flex-col w-full items-center bottom-4 left-0 absolute'>
                <button onClick={logout} className='h-12 w-12 flex items-center justify-center'>
                    <img src={images.logout} alt="" className='h-full' />
                </button>
            </div>
        </nav>
    )
}