import React from 'react'

const TaskListNumber = () => {
    return (
        <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Row 1 */}
                <div className="bg-blue-500 rounded-xl shadow p-6 text-center">
                    <p className="text-3xl font-bold text-blue-600">0</p>
                    <h2 className="text-xl text-gray-700 mt-2">New Task</h2>
                </div>
                <div className="bg-green-500 rounded-xl shadow p-6 text-center">
                    <p className="text-3xl font-bold text-green-600">0</p>
                    <h2 className="text-xl text-gray-700 mt-2">Completed</h2>
                </div>

                {/* Row 2 */}
                <div className="bg-yellow-500 rounded-xl shadow p-6 text-center">
                    <p className="text-3xl font-bold text-yellow-600">0</p>
                    <h2 className="text-xl text-gray-700 mt-2">Accepted</h2>
                </div>
                <div className="bg-red-500 rounded-xl shadow p-6 text-center">
                    <p className="text-3xl font-bold text-red-600">0</p>
                    <h2 className="text-xl text-gray-700 mt-2">Failed</h2>
                </div>
            </div>
        </>
    )
}

export default TaskListNumber