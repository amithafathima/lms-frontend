
// card  for cart order 

import React, { useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { useState } from 'react';
function CartOrderCard({orders}) {

    const[userName,setUserName]=useState("")
  
  useEffect(()=>
  {
    if(sessionStorage.getItem("username"))
      {
        setUserName(sessionStorage.getItem("username"));
      }
      else 
      {
        setUserName("")
      }
  })
  return (
    <div style={{fontSize:'15px'}} className=' d-flex justify-content-center' >
     
     
     <MDBCard className='m-4' style={{height:'380px',width:'300px'}}>
      <MDBCardBody>
        <MDBCardTitle style={{color:'red'}}>{orders.name}</MDBCardTitle>
        <MDBCardText>
          <span style={{color:'blue',}}>ID</span> : {orders.userId}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Books</span> : {orders.bookNames}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Contact</span> : {orders.contactNo}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Address</span> : {orders.address}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Pincode</span> : {orders.pincode}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}> Date</span> : {orders.orderDateTime}
        </MDBCardText>
        
        {
          userName=="Admin"&&(
            <div  >
           <center> <MDBBtn  className='m-2' > APPROVE</MDBBtn></center>
                {/* <MDBBtn className='m-2' > Edit RESPONSE</MDBBtn></center> */}

            
            
            </div>
          )
          
        }
      </MDBCardBody>
    </MDBCard>
     
     
     
    </div>
  )
}

export default CartOrderCard