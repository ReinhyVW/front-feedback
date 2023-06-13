import { useState } from 'react';

import Button from '../../shared/components/Button.jsx'

import getCredentials from '../domain/getCredentials.js';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getCredentials(username, password)
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly items-center min-w-[350px] min-h-[450px] max-h-[50%] bg-sky-800 rounded-md p-4' style={{ borderTop: "10px solid rgb(96, 165, 250)", borderBottom: "10px solid rgb(34, 197, 94)" }}>
            <h1 className='text-white text-4xl text-center'>FeedbackApp</h1>
            <div className='flex flex-col items-center justify-evenly h-1/4 w-full'>
                <label htmlFor="username" className='text-neutral-400 text-left text-xl w-full'>Username</label>
                <input
                    className='w-full h-12 rounded-2xl bg-blue-400 text-white placeholder:text-white p-2'
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    placeholder="e.x Administrator"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className='flex flex-col items-center justify-evenly h-1/4 w-full'>
                <label htmlFor="password" className='text-neutral-400 text-left text-xl w-full'>Password</label>
                <input
                    className='w-full h-12 rounded-2xl bg-blue-400 text-white placeholder:text-white p-2'
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="●●●●●●●●●●●●"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <Button content='Sign In' size={"lg"} />
        </form>
    );
}