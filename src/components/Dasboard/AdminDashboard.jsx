import React from 'react'
import CreatTask from '../other/CreatTask'
import AllTask from '../other/AllTask'

function AdminDashboard() {
    return (
        <>
            <div className="max-w-5xl mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg mt-10">
                <CreatTask />
                <AllTask />
            </div>
        </>
    )
}

export default AdminDashboard