import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Home from "./pages/DashBoard/Home"
import Expense from "./pages/DashBoard/Expense"
import Income from "./pages/DashBoard/income"
import UserProvider from './context/UserContext'
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <UserProvider>
    <div className=''>
      <Router>
        <Routes>
            <Route path='/' element = {<Root/>} />
            <Route path='/login' exact element={<Login/>} />
            <Route path='/signUp' exact element={<Signup/>} />
            <Route path='/dashboard' exact element={<Home/>} />
            <Route path='/income' exact element={<Income/>} />
            <Route path='/expense' exact element={<Expense/>} />
        </Routes>
      </Router>
    </div>

    <Toaster
          toastOptions = {{
            className : "",
            style : {
              fontSize : '13px'
            }
          }}
          />
    </UserProvider>
  )
}

const Root = ()=>{
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to = "/dashboard"/>
  ) : (
    <Navigate to = "/login"/>
  )
}

export default App
