import React from 'react'
import {useEffect,useState} from 'react'
import { useContext } from 'react';
import AddBook from '../Components/AddBook'
import AdminHeader from '../Components/AdminHeader';
import { editBookResponseContext } from '../Context API/ContextShare';
function DashAdmin() {
  const [username,setUsername]=useState("")
  const {editBookResponse,seteditBookResponse} = useContext(editBookResponseContext)
 
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
  },[editBookResponse])
  return (
    <div>
     {/* -----------------------------------------------HEADER-------------------------------------------- */}
     
      <AdminHeader/>
      {/* --------------------------------------------------------------------------------------------------------- */}
      <br></br> <br></br> <br></br> <br></br> <br></br> 
      <h2 className='text-center'>Welcome <span className='text-primary'>{username}</span> </h2>
      <center><AddBook/></center>
              
               <div className="container">
                <center><img src='https://mintbook.com/assetsNew/img/animated5.gif'></img></center>
               </div>
              
      
    </div>
  )
}

export default DashAdmin