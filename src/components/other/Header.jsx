import React, { useEffect, useState } from 'react'

const Header = () => {
    const [user, setUser] = useState(null); // ✅ State to hold logged-in user
    useEffect(() => {
        // Get user data from localStorage
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            // console.log('User data retrieved from localStorage:', JSON.parse(storedUser));
        }
    }, []);
    console.log('User data:', user);

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <p className="text-2xl text-gray-700">Hello,</p>
                    <h1 className="text-4xl font-bold text-gray-900"> {user?.firstName || 'Guest'}</h1>
                </div>
                <button className="bg-red-600 text-white px-5 py-2 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer">
                    Logout
                </button>
            </div>
        </>
    )
}

export default Header