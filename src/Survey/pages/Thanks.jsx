import { useEffect } from 'react';
import images from '../../shared/images/images.js';
import requireAuth from '../../shared/domain/requireAuth.jsx';

function Thanks() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.location.href = "/survey";
        }, 30000); //10000

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="flex flex-col absolute w-full h-full items-center justify-center gap-12">
            <h1 className="text-sky-800 text-2xl sm:text-3xl md:text-5xl lg:text-7xl w-5/6 font-bold">Thank you for your answer</h1>
            <p className="text-sky-700 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-justify italic w-5/6">
                Your feedback is incredibly valuable to us and will help us improve our service to better meet your needs. We appreciate your support and look forward to serving you in the future.
            </p>
            <img src={images.dhg} alt="" />
        </div>
    );
}


export default requireAuth(Thanks)