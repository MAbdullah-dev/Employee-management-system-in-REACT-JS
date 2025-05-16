import React, { useEffect, useState } from 'react';

const Header = ({ setUser }) => {
    const [user, setLocalUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            setLocalUser(JSON.parse(storedUser));
        }
    }, []);

    const logoutUser = () => {
        localStorage.removeItem('loggedInUser');
        setLocalUser(null);      // optional: just updates Header display
        setUser(null);           // this will show the Login screen
    };

    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <p className="text-2xl text-gray-700">Hello,</p>
                    <h1 className="text-4xl font-bold text-gray-900">{user?.firstName || 'Admin'}</h1>
                </div>

                {user && (
                    <button
                        onClick={logoutUser}
                        className="bg-red-600 text-white px-5 py-2 rounded-2xl hover:bg-red-700 transition duration-300 cursor-pointer"
                    >
                        Logout
                    </button>
                )}
            </div>
        </>
    );
};

export default Header;
