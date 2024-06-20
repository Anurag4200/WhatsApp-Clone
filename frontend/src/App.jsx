import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import  {useAuth}  from './context/Authprovider'
import { Navigate, Route, Routes } from 'react-router-dom'
const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  return (
    <>
    {/* <div className='flex min-h-screen text-gray-500'>
    <Left/>
    <Right/>
    </div> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={
        authUser?(<div className='flex min-h-screen text-gray-500'>
        <Left/>
        <Right/>
        </div>): (<Navigate to={"/login"}/>)
      }/>

      <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>}></Route>
      <Route path='/signup' element={authUser?<Navigate to="/"/>:<Signup/>}></Route>
    </Routes>
    </>
  )
}

export default App