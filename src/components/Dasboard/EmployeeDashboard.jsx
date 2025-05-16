import React, { useEffect, useState } from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ setUser }) => {
    // const [user, setUser] = useState(null); // ✅ State to hold logged-in user
    // useEffect(() => {
    //     // Get user data from localStorage
    //     const storedUser = localStorage.getItem('loggedInUser');
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //         console.log('User data retrieved from localStorage:', JSON.parse(storedUser));
    //     }
    // }, []);

    return (
        <div className="min-h-screen p-8 ">
            <Header setUser={setUser} />
            <TaskListNumber />
            <TaskList />
        </div>
    );
};

export default EmployeeDashboard;
