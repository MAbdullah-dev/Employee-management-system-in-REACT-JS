import React from 'react';

const tasks = [
    {
        id: 1,
        title: 'Design Homepage',
        description: 'Create the homepage layout and responsive design.',
        status: 'In Progress',
        priority: 'High',
        dueDate: '2025-05-10',
    },
    {
        id: 2,
        title: 'Fix Login Bug',
        description: 'Resolve issue preventing user login on mobile.',
        status: 'Pending',
        priority: 'Medium',
        dueDate: '2025-05-07',
    },
    {
        id: 3,
        title: 'Deploy to Production',
        description: 'Push latest version to production server.',
        status: 'Completed',
        priority: 'Low',
        dueDate: '2025-05-05',
    },
];

const getPriorityColor = (priority) => {
    switch (priority) {
        case 'High':
            return 'bg-red-600'; // Darker Red
        case 'Medium':
            return 'bg-yellow-500'; // Yellow
        case 'Low':
            return 'bg-green-600'; // Darker Green
        default:
            return 'bg-gray-400';
    }
};

const AllTask = () => {
    return (
        <div className="p-4 bg-gray-50">
            <h2 className="text-xl font-bold mb-4">All Tasks</h2>
            <div className="grid gap-3">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-white p-2 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-1">
                            <span
                                className={`text-white text-xs px-2 py-1 rounded-full ${getPriorityColor(
                                    task.priority
                                )}`}
                            >
                                {task.priority}
                            </span>
                            <span className="text-xs text-gray-500">Due: {task.dueDate}</span>
                        </div>
                        <h3 className="text-sm font-semibold">{task.title}</h3>
                        <p className="text-gray-600 text-xs mt-1">{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
