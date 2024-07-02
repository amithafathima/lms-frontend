import React, { useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { useState } from 'react';
 

  
function OrderCard({order}) {

 

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
     
     
     <MDBCard className='m-4' style={{height:'360px',width:'300px'}}>
      <MDBCardBody>
        <MDBCardTitle style={{color:'red'}}>{order.name}</MDBCardTitle>
        <MDBCardText>
          <span style={{color:'blue'}}>ID</span> : {order.userId}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Book</span> : {order.bookName}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Contact</span> : {order.contactNo}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Address</span> : {order.address}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}>Pincode</span> : {order.pincode}
        </MDBCardText>
        <MDBCardText>
        <span style={{color:'blue'}}> Date</span> : {order.orderDateTime}
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

export default OrderCard