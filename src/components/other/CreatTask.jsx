import React from 'react'

const CreatTask = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-6 text-center">📝 Create Task</h2>

            <form className="space-y-4">
                {/* Task Title */}
                <div>
                    <label className="block text-sm mb-1">Task Title</label>
                    <input
                        type="text"
                        placeholder="Make a UI design"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm mb-1">Description</label>
                    <textarea
                        rows="4"
                        placeholder="Detailed description of task (Max 500 words)"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input
                        type="date"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Assign To */}
                <div>
                    <label className="block text-sm mb-1">Assign To</label>
                    <input
                        type="text"
                        placeholder="Enter name or ID"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm mb-1">Category</label>
                    <input
                        type="text"
                        placeholder="Design, Development, etc..."
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition"
                >
                    Create Task
                </button>
            </form>
        </>
    )
}

export default CreatTask