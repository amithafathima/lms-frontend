
import React from 'react'
import AdminHeader from './AdminHeader'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCartOrderAPI } from '../Services/allAPIs'
import CartOrderCard from './CartOrderCard'


function AllCartOrderAdmin() {
    const [AllcartOrder, setAllCartOrder] = useState([])
    const getAllCartOrders = async (req, res) => {
        //token authentication
        if (sessionStorage.getItem('token')) {
          const token = sessionStorage.getItem('token')
          const reqHeader =
          {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token // space after Bearer is compulsory
          }
          // APi call
          const result = await getCartOrderAPI(reqHeader)
          console.log(result);
          if (result.status === 200) {
            setAllCartOrder(result.data)
          }
          else {
            //err
            console.log(result.response.data);
          }
        }
      }
      useEffect(() =>//1
  {
    getAllCartOrders()
    

  }, [])
    
  return (
    <div>
        
        <div className="row">
          {// 1
          AllcartOrder.length>0? AllcartOrder.map(i=>(
            <div className="col ">
            <CartOrderCard orders={i}/>
            
          </div>
          ))
          :"Cant fetch"

        }
        </div>
    </div>
  )
}

export default AllCartOrderAdmin