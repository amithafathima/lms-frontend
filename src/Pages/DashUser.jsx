import React from 'react'
import {useEffect,useState} from 'react'
import AllBook from '../Components/AllBook';
import UserHeader from '../Components/UserHeader';

function DashUser() {
  const [username,setUsername]=useState("")
 
  

  useEffect(()=>
    {
      if(sessionStorage.getItem("username"))
        {
          setUsername(sessionStorage.getItem("username"))
        }
        else
        {
          setUsername("")
        }
    },)
  return (
    <div>
      {/* ==========================================HEADER======================================================== */}
      <UserHeader/>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <br></br> <br></br> <br></br> <br></br> <br></br> 
      <h2 className='text-center'>Welcome <span className='text-primary'>{username}</span> </h2>
      <AllBook/>
    </div>
  )
}

export default DashUser