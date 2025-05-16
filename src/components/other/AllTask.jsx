import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const getStatus = (task) => {
    if (task.completed) return { label: 'Completed', color: 'bg-green-500' };
    if (task.failed) return { label: 'Failed', color: 'bg-red-500' };
    if (task.active) return { label: 'Active', color: 'bg-blue-500' };
    if (task.newTask) return { label: 'New', color: 'bg-yellow-500' };
    return { label: 'Unknown', color: 'bg-gray-400' };
};

const AllTask = () => {
    const { employees } = useContext(AuthContext);

    const allTasks = employees.flatMap((employee) =>
        employee.tasks.map((task, index) => ({
            ...task,
            employeeName: employee.firstName,
            taskId: `${employee.id}-${index + 1}`,
        }))
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6">All Employee Tasks</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow">
                    <thead className="bg-gray-200 text-gray-700 text-sm">
                        <tr>
                            <th className="py-3 px-4 text-left">#</th>
                            <th className="py-3 px-4 text-left">Employee</th>
                            <th className="py-3 px-4 text-left">Title</th>
                            <th className="py-3 px-4 text-left">Description</th>
                            <th className="py-3 px-4 text-left">Category</th>
                            <th className="py-3 px-4 text-left">Date</th>
                            <th className="py-3 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {allTasks.map((task, idx) => {
                            const status = getStatus(task);
                            return (
                                <tr key={task.taskId} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{idx + 1}</td>
                                    <td className="py-3 px-4">{task.employeeName}</td>
                                    <td className="py-3 px-4 font-medium">{task.title}</td>
                                    <td className="py-3 px-4">{task.description}</td>
                                    <td className="py-3 px-4">{task.category}</td>
                                    <td className="py-3 px-4">{task.date}</td>
                                    <td className="py-3 px-4">
                                        <span className={`text-white text-xs px-2 py-1 rounded-full ${status.color}`}>
                                            {status.label}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                        {allTasks.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-6 text-gray-500">
                                    No tasks found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTask;
