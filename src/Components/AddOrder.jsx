// import React from 'react'
// import { useState } from 'react';
// import { FaCartArrowDown } from "react-icons/fa";
// import { useEffect } from 'react';
// import { MDBBtn} from 'mdb-react-ui-kit';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import {addUserOrderAPI} from '../Services/allAPIs'
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Swal from 'sweetalert2';
// function AddOrder({bookName}) {
    
//       // for token
//     const[token,setToken]=useState("")
//     const navigate = useNavigate(); // Initialize useNavigate hook
//     //second modal form order details
//     const [show1, setShow1] = useState(false);
//     const handleClose1 = () => setShow1(false);
//     const handleShow1 = () => 
//       {
//         if(token)
//           {
//             setShow1(true);
//           }
//           else{
//             // alert("Please do login first")
//             Swal.fire("Please do login first!");
//             navigate('/login')
//           }
//       }

    
    
//   // Track order button click
//   const [orderClicked, setOrderClicked] = useState(false); // modal

//   const handleOrderClick = () => { // modal
//     setOrderClicked(true);
//   };

//   const[orderData,setOrderData]=useState({ // form fill aakumbo values automatically projectData il kerum
//     name:"",
//     contactNo:"",
//     address:"",
//     pincode:"",
//     paymentMode:"",
    
    
//   })
//   console.log(orderData);


//   // order button working code
// const handleAddOrder=async()=>
//     {
//       //data passing
//       const{name,contactNo,address,pincode,paymentMode}=orderData // for form
    
//       if(!name||!contactNo||!address||!pincode||!paymentMode) // for form
//       {
//         // alert("Please fill the following fields")
//         Swal.fire("Please fill the following fields!");
//       }
//       else
//       {

//         const currentDateTime = new Date().toISOString();
//         const reqBody = {
//             name,
//             contactNo,
//             address,
//             pincode,
//             paymentMode,
//             bookName,
//              orderDateTime:currentDateTime,
//           };
//               console.log(reqBody)   // for checking purposes
    
//               if(token)
//               {
//                 const reqHeader={
//                   "Content-Type" :"application/json",
//                   "Authorization":`Bearer ${token}`
//                  }
//                  //multipart form-data kodkan reason image file aayett aahnn kodkunne instaed of string
    
    
//                  //api call
//                const result=await addUserOrderAPI(reqBody,reqHeader)
//                console.log(result);
//                if(result.status==200)
//                {
//                 // alert("order booked successfully")
//                 Swal.fire({
//                   title: "Book ordered successfully!!!",
                  
//                   icon: "success"
//                 });
//                 // setaddProjectResponse(result.data)
//                 handleClose1()// once add aayi kazhinj modal close aakan
//                 setOrderData({name:"",contactNo:"",address:"",pincode:"",paymentMode:""})// ithellam empty aakum
                
//                }
//                else{
//                 // alert(result.response.data)
//                 Swal.fire({
//                   title: 'Error!',
//                   text: result.response.data,
//                  icon:'error',
//                  confirmButtonText:'Back'
//               })
//                }
//               }
               
//       }
      
//     }

//     useEffect(()=>// to get token
// {
//   if(sessionStorage.getItem("token"))
//   {
//     setToken(sessionStorage.getItem("token"));
//   }
//   else 
//   {
//     setToken("")
//   }
// },[])

// const handleAddToCart = ()=> {
//   if (token) {
//     // If logged in, navigate to cart
//     navigate("/my/cart");
    
//   } else {
//     // If not logged in, redirect to login page
//     // alert("Please do login first")
//     Swal.fire("Please do login first!");
//     navigate("/login");
//   }
// };




//   return (
//     <div>

// <MDBBtn style={{ textTransform: 'capitalize' }} className='ml-3' onClick={handleShow1} href='#'>BOOK NOW</MDBBtn>
              
//  {/* <MDBBtn style={{ textTransform: 'capitalize' }} className='mx-3' onClick={handleAddToCart}  href='#'>ADD TO  < FaCartArrowDown className='text-white' style={{fontSize:'18px'}} /> </MDBBtn> */}
//      <Modal show={show1} onHide={handleClose1}>
//   <Modal.Header closeButton>
//     <Modal.Title>Order Details for {bookName}</Modal.Title>

//   </Modal.Header>
//   <Modal.Body>
//     <input onChange={e=>setOrderData({...orderData,name:e.target.value})} type="text" name="" id="" placeholder='Name' className='form-control my-3'/>
//     <input onChange={e=>setOrderData({...orderData,contactNo:e.target.value})} type="text" name="" id="" placeholder='Contact Number' className='form-control my-3'/>
//     <input onChange={e=>setOrderData({...orderData,address:e.target.value})} type="text" name="" id="" placeholder='Address' className='form-control my-3'/>
//     <input onChange={e=>setOrderData({...orderData,pincode:e.target.value})} type="text" name="" id="" placeholder='Pincode' className='form-control my-3'/>
//     <label htmlFor="paymentMode" className="form-label">Mode of Payment:</label>
//     <select onChange={e=> setOrderData({ ...orderData, paymentMode: e.target.value })} className="form-select my-3" id="paymentMode">
//       <option value="">Select Payment Mode</option>
//       <option value="credit_card">Credit Card</option>
//       <option value="debit_card">Debit Card</option>
//       <option value="net_banking">Net Banking</option>
//       <option value="cash_on_delivery">Cash on Delivery</option>
//     </select>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={handleClose1}>
//       Close
//     </Button>

//     {!orderClicked ? (
//             <Button variant="primary" onClick={handleOrderClick}>
//               Order
//             </Button>
//           ) : (
//             <Button onClick={handleAddOrder} variant="success" >
//               Confirm Order
//             </Button>
//           )}
//   </Modal.Footer>
// </Modal>
//     </div>
//   )
// }

// export default AddOrder



import React, { useState, useEffect } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { MDBBtn } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addUserOrderAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddOrder({ bookName }) {
  // For token
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  
  // Second modal form order details
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    if (token) {
      setShow1(true);
    } else {
      Swal.fire("Please do login first!");
      navigate('/login');
    }
  };
  
  // Track order button click
  const [orderClicked, setOrderClicked] = useState(false);

  const handleOrderClick = () => {
    setOrderClicked(true);
  };

  const [orderData, setOrderData] = useState({
    name: "",
    contactNo: "",
    address: "",
    pincode: "",
    paymentMode: ""
  });

  console.log(orderData);

  // Order button working code
  const handleAddOrder = async () => {
    const { name, contactNo, address, pincode, paymentMode } = orderData;

    if (!name || !contactNo || !address || !pincode || !paymentMode) {
      Swal.fire("Please fill the following fields!");
    } else {
      const currentDateTime = new Date().toISOString();
      const reqBody = {
        name,
        contactNo,
        address,
        pincode,
        paymentMode,
        bookName,
        orderDateTime: currentDateTime,
      };

      console.log(reqBody);

      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        const result = await addUserOrderAPI(reqBody, reqHeader);
        console.log(result);

        if (result.status === 200) {
          Swal.fire({
            title: "Book ordered successfully!!!",
            icon: "success"
          });
          handleClose1();
          setOrderData({ name: "", contactNo: "", address: "", pincode: "", paymentMode: "" });
          setOrderClicked(false); // Reset orderClicked state
        } else {
          Swal.fire({
            title: 'Error!',
            text: result.response.data,
            icon: 'error',
            confirmButtonText: 'Back'
          });
        }
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  const handleAddToCart = () => {
    if (token) {
      navigate("/my/cart");
    } else {
      Swal.fire("Please do login first!");
      navigate("/login");
    }
  };

  return (
    <div>
      <MDBBtn style={{ textTransform: 'capitalize' }} className='ml-3' onClick={handleShow1} href='#'>
        BOOK NOW
      </MDBBtn>
      {/* <MDBBtn style={{ textTransform: 'capitalize' }} className='mx-3' onClick={handleAddToCart}  href='#'>
        ADD TO  < FaCartArrowDown className='text-white' style={{ fontSize: '18px' }} /> 
      </MDBBtn> */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details for {bookName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={e => setOrderData({ ...orderData, name: e.target.value })} type="text" placeholder='Name' className='form-control my-3' />
          <input onChange={e => setOrderData({ ...orderData, contactNo: e.target.value })} type="text" placeholder='Contact Number' className='form-control my-3' />
          <input onChange={e => setOrderData({ ...orderData, address: e.target.value })} type="text" placeholder='Address' className='form-control my-3' />
          <input onChange={e => setOrderData({ ...orderData, pincode: e.target.value })} type="text" placeholder='Pincode' className='form-control my-3' />
          <label htmlFor="paymentMode" className="form-label">Mode of Payment:</label>
          <select onChange={e => setOrderData({ ...orderData, paymentMode: e.target.value })} className="form-select my-3" id="paymentMode">
            <option value="">Select Payment Mode</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="net_banking">Net Banking</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          {!orderClicked ? (
            <Button variant="primary" onClick={handleOrderClick}>
              Order
            </Button>
          ) : (
            <Button onClick={handleAddOrder} variant="success">
              Confirm Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddOrder;
