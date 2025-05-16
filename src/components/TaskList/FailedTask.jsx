import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className="h-full bg-red-500 w-[300px] min-w-[300px] rounded-xl shadow p-4 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">{data.category}</span>
                    <span className="text-sm text-gray-700">{data.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{data.title}</h3>
                <p className="text-sm text-gray-800">{data.description}</p>
            </div>
            <div className='mt-2'>
                <button>completed</button>
            </div>
        </div>
    )
}

export default FailedTask