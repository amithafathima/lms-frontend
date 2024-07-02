
import React from 'react'
import UserHeader from './UserHeader'
import { getAUserCartOrderAPI } from '../Services/allAPIs'
import { useEffect,useState } from 'react'
import CartOrderCard from './CartOrderCard'
function AllCartOrderUser() {
  const [userCartOrders,setUserCartOrders]=useState([])

  const getUserCartOrders=async()=>//1
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
      const result=await getAUserCartOrderAPI(reqHeader)
      console.log(result);
      if(result.status===200)
      {
        setUserCartOrders(result.data)
      }
      else{
        //err
        console.log(result.response.data);
      }
    }
  }
  useEffect(()=>// 1
{
 getUserCartOrders()
},[])

  return (
    <div>
       <div className="container">
          <div className="row">
            {
                userCartOrders.length>0?userCartOrders.map(i=>(
               <div className="col">
                <CartOrderCard orders={i}/>
               </div>
                ))
                :"Cant fetch"
            }
          </div>
        </div>
    </div>
  )
}

export default AllCartOrderUser