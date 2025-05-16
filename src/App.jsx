import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dasboard/EmployeeDashboard'
import AdminDashboard from './components/Dasboard/AdminDashboard'
import { Admin, employees, getLocalStorage, setLocalStorage } from './utilities/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [User, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser', '');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
    }
  }, []);

  const hanldleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ email, password, role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser({ role: 'employee' });
        const loggedInUser = {
          ...employee,
          role: 'employee',
        };
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      }

    } else {
      alert('Invalid credentials');
    }
  }
  return (
    <>
      {!User ? (
        <Login hanldleLogin={hanldleLogin} />
      ) : User.role === 'employee' ? (
        <EmployeeDashboard setUser={setUser} />
      ) : (
        <AdminDashboard setUser={setUser} />
      )}

    </>
  );
};


export default App