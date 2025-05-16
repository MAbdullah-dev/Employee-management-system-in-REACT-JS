import React, { useEffect, useState } from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = () => {
    const [taskData, settaskData] = useState(null);
    useEffect(() => {
        // Get user data from localStorage
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            settaskData(JSON.parse(storedUser));
            // console.log('User data retrieved from localStorage:', JSON.parse(storedUser));
        }
    }, []);
    // console.log('taskData:', taskData);

    return (
        <>
            <div id='task-list' className="h-[300px] w-ful mt-10 flex gap-4 overflow-x-auto p-4">
                {
                    taskData?.tasks.map((elms, index) => {
                        if (elms.active) {
                            return <AcceptTask key={index} data={elms} />
                        }
                        if (elms.newTask) {
                            return <NewTask key={index} data={elms} />
                        }
                        if (elms.completed) {
                            return <CompleteTask key={index} data={elms} />
                        }
                        if (elms.failed) {
                            return <FailedTask key={index} data={elms} />

                        }
                    })
                }
            </div>
        </>
    )
}

export default TaskList