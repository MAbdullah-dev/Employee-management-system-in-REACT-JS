import React from 'react'

const CompleteTask = () => {
    return (
        <>
            <div className="h-full bg-green-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Low</span>
                        <span className="text-sm text-gray-700">Due: 2025-05-15</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">Third Task</h3>
                    <p className="text-sm text-gray-800">Final task with a lower priority. Still needs completion.</p>
                </div>
                <div className='mt-2'>
                    <button>completed</button>
                </div>
            </div>
        </>
    )
}

export default CompleteTask