import { useEffect } from 'react';
import images from '../../shared/images/images';
import requireAuth from '../../shared/domain/requireAuth';

function Thanks() {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.location.href = "/survey";
        }, 10000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="flex flex-col absolute w-full h-full items-center justify-center gap-12">
            <h1 className="text-sky-800 text-9xl m-5">Thank you for your answer</h1>
            <p className="text-sky-700 text-6xl text-justify italic w-4/5">
                Your feedback is incredibly valuable to us and will help us improve our service to better meet your needs. We appreciate your support and look forward to serving you in the future.
            </p>
            <img src={images.dhg} alt="" />
        </div>
    );
}


export default requireAuth(Thanks)