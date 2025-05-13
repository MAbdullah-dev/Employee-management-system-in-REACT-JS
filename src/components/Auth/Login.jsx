import React, { useState } from 'react'

const Login = ({ hanldleLogin }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submitHandle = (e) => {
        e.preventDefault();
        // You can log or process the form here
        console.log('Email:', email, 'Password:', password);
        hanldleLogin(email, password);
        setemail('');
        setpassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">Log In</h2>
                </div>
                <div className="mt-6">
                    <form onSubmit={submitHandle} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            autoComplete="username"
                            className="w-full px-4 py-2 mb-4 text-white bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            className="w-full px-4 py-2 mb-4 text-white bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-white">
                                <input type="checkbox" className="mr-2" /> Remember me
                            </label>
                            <a href="#" className="text-red-600 hover:underline">Forget Password</a>
                        </div>
                        <button type="submit" className="w-full py-2 text-white bg-red-600 rounded-full hover:bg-red-700 cursor-pointer">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
