import React from 'react'

const AcceptTask = () => {
    return (
        <>
            <div className="h-full bg-red-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">High</span>
                        <span className="text-sm text-gray-700">Due: 2025-05-10</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">Task Title</h3>
                    <p className="text-sm text-gray-800">This is a short description of the task explaining what needs to be done.</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <button className='bg-green-600 text-white py-1 px-2 text-sm'>mark as Completed</button>
                    <button className='bg-red-600 text-white py-1 px-2 text-sm' >mark as Failed</button>
                </div>
            </div>
        </>
    )
}

export default AcceptTask