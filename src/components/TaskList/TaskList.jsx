import React from 'react'

const TaskList = () => {
    return (
        <>
            {/* Bottom Box Row */}
            {/* Bottom Task Cards Section */}
            <div id='task-list' className="h-[300px] w-ful mt-10 flex gap-4 overflow-x-auto p-4">
                {/* Task Card */}
                <div className="h-full bg-red-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">High</span>
                            <span className="text-sm text-gray-700">Due: 2025-05-10</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">Task Title</h3>
                        <p className="text-sm text-gray-800">This is a short description of the task explaining what needs to be done.</p>
                    </div>
                </div>

                {/* Duplicate as needed */}
                <div className="h-full bg-blue-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Medium</span>
                            <span className="text-sm text-gray-700">Due: 2025-05-12</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">Second Task</h3>
                        <p className="text-sm text-gray-800">Another description goes here with details of the second task.</p>
                    </div>
                </div>

                <div className="h-full bg-green-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Low</span>
                            <span className="text-sm text-gray-700">Due: 2025-05-15</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">Third Task</h3>
                        <p className="text-sm text-gray-800">Final task with a lower priority. Still needs completion.</p>
                    </div>
                </div>
                <div className="h-full bg-yellow-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Low</span>
                            <span className="text-sm text-gray-700">Due: 2025-05-15</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">Third Task</h3>
                        <p className="text-sm text-gray-800">Final task with a lower priority. Still needs completion.</p>
                    </div>
                </div>
                <div className="h-full bg-red-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Low</span>
                            <span className="text-sm text-gray-700">Due: 2025-05-15</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">Third Task</h3>
                        <p className="text-sm text-gray-800">Final task with a lower priority. Still needs completion.</p>
                    </div>
                </div>
            </div>



        </>
    )
}

export default TaskList