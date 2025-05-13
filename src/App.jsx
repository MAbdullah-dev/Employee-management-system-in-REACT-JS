import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { Admin, employees, getLocalStorage, setLocalStorage } from './utilities/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // useEffect(() => {
  //   setLocalStorage("employees", employees);
  //   setLocalStorage("Admin", Admin);
  //   getLocalStorage("employees");
  //   console.log(getLocalStorage("employees"));
  //   getLocalStorage("Admin");
  // }, [])
  const [User, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  const hanldleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      console.log('admin');

      console.log('Admin logged in');
    } else if (email === 'employee1@example.com' && password === '123') {
      setUser('employee');
      console.log('employee');

    } else {
      alert('Invalid credentials');
    }
  }




  return (
    <>
      {!User ? <Login hanldleLogin={hanldleLogin} /> : ''}
      {User === 'employee' ? <EmployeeDashboard /> : <AdminDashboard />}
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App