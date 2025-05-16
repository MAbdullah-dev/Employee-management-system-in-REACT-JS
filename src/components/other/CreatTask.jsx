import React, { useState } from 'react';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');
    const [task, setTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };

        const data = JSON.parse(localStorage.getItem('employees')) || [];

        data.forEach((employee) => {
            if (asignTo === employee.firstName) {
                employee.tasks.push(newTask);

                // Update task counts
                employee.taskCounts.newTask += 1;
                employee.taskCounts.active += 1;
            }
        });

        localStorage.setItem('employees', JSON.stringify(data));

        // Clear form
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAsignTo('');
        setCategory('');
    };


    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">📝 Create Task</h2>

            <form className="space-y-4" onSubmit={submitHandler}>
                <div>
                    <label className="block text-sm text-white mb-1">Task Title</label>
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder="Make a UI design"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white mb-1">Description</label>
                    <textarea
                        rows="4"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        placeholder="Describe the task..."
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white resize-none"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white mb-1">Date</label>
                    <input
                        type="date"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white mb-1">Assign To</label>
                    <input
                        type="text"
                        value={asignTo}
                        onChange={(e) => setAsignTo(e.target.value)}
                        placeholder="Employee ID or name"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm text-white mb-1">Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Design, Development, etc."
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default CreateTask;
