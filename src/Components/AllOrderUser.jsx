import React from 'react'
import UserHeader from './UserHeader'
import { getAUserOrderAPI } from '../Services/allAPIs'
import { useEffect,useState } from 'react'
import OrderCard from './OrderCard'
import AllCartOrderUser from './AllCartOrderUser'
function AllOrderUser() {
    const [userOrders,setUserOrders]=useState([])

    const getUserOrders=async()=>//1
  {
    //token?
    if(sessionStorage.getItem('token'))
    {
      const token=sessionStorage.getItem('token')

      const reqHeader={
        "Content-Type" :"application/json",
        "Authorization":"Bearer " + token
      }

      //api call
      const result=await getAUserOrderAPI(reqHeader)
      console.log(result);
      if(result.status===200)
      {
        setUserOrders(result.data)
      }
      else{
        //err
        console.log(result.response.data);
      }
    }
  }

  useEffect(()=>// 1
{
 getUserOrders()
},[])

  return (
    <div>
        <UserHeader/>
        <br></br> <br></br> <br></br> <br></br><br></br><br></br>
        <div className="container">
          <div className="row">
            {
                userOrders.length>0?userOrders.map(i=>(
               <div className="col">
                <OrderCard order={i}/>
               </div>
                ))
                :"Cant fetch"
            }
            <AllCartOrderUser/>
          </div>
        </div>
    </div>
  )
}

export default AllOrderUser