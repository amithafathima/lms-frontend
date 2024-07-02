import React from 'react'
import AdminHeader from './AdminHeader'
import OrderCard from './OrderCard'
import { useState } from 'react'
import { getUsersOrderAPI } from '../Services/allAPIs'
import { useEffect } from 'react'
import { getCartOrderAPI } from '../Services/allAPIs'
import CartOrderCard from './CartOrderCard'
import AllCartOrderAdmin from './AllCartOrderAdmin'

function AllOrderAdmin() {
  //1
  const [AllUserOrder, setAllUserOrder] = useState([])

  const getAllUserOrders = async (req, res) => {
    //token authentication
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token')
      const reqHeader =
      {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token // space after Bearer is compulsory
      }
      // APi call
      const result = await getUsersOrderAPI(reqHeader)
      console.log(result);
      if (result.status === 200) {
        setAllUserOrder(result.data)
      }
      else {
        //err
        console.log(result.response.data);
      }
    }
  }

  useEffect(() =>//1
  {
    getAllUserOrders()
    

  }, [])
 
return (
    <div>
      <br></br><br></br><br></br><br></br><br></br>

      <AdminHeader />
     <div className="container">
        <div className="row">
          {// 1
          AllUserOrder.length>0? AllUserOrder.map(i=>(
            <div className="col ">
            <OrderCard order={i}/>
            
          </div>
          ))
          :"Cant fetch"
          

        }

      <AllCartOrderAdmin/>
        </div>
        
        
     </div>


     

     

    </div>
  )
}

export default AllOrderAdmin