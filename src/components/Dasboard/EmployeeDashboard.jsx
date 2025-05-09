import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
    return (
        <div className="min-h-screen p-8 ">
            <Header />
            <TaskListNumber />
            <TaskList />
        </div>
    );
};

export default EmployeeDashboard;
