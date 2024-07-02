// import React from 'react'
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { serverURL } from '../Services/serverURL';
// function BookCard({book}) {
//   //console.log(`${serverURL}/uploads/${book.bookImage}`);

//   return (
//     <div>

// <MDBCard style={{ width: '300px', alignItems: 'center' }}>
//       <MDBCardImage src={book?`${serverURL}/uploads/${book.bookImage}`:"https://mdbootstrap.com/img/new/standard/nature/184.webp"} height={300}  position='top' alt='...' />
//       <MDBCardBody>
//         <MDBCardTitle>{book.title}</MDBCardTitle>
//         <MDBCardText>
//           {book.author}
//         </MDBCardText>
//         <MDBCardText>
//           {`₹${book.price}`}
//         </MDBCardText>
//         <MDBBtn href='#'>ORDER NOW</MDBBtn>
//       </MDBCardBody>
//     </MDBCard>
//     </div>
//   )
// }

// export default BookCard


// -------------------------------------------------- 2 MAIN---------------------------------------------------------
// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { FaEdit } from "react-icons/fa";
// import { serverURL } from '../Services/serverURL';
// import { MdDelete } from "react-icons/md";
// import { deleteAdminBookAPI } from '../Services/allAPIs';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import {useState } from 'react';
// import AddOrder from './AddOrder';
// import EditBook from './EditBook'
// function BookCard({ book,getAllBookProp }) {
  
// // first modal for showing book
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);



//   // Retrieve user role from session storage
//   const userRole = sessionStorage.getItem('username') === 'Admin' ? 'admin' : 'user';
  

//   // delete book

//  const deleteAdminbook=async(bid)=>{
//   const token =sessionStorage.getItem('token')
//   if(token){
//     const reqHeader ={
//       "Content-Type":"application/json",
//       "Authorization":"Bearer " + token // space sfter Bearer is compulsory
//     }
//     const result = await deleteAdminBookAPI(bid,reqHeader)
//     console.log(result);
//     alert("book deleted successfully")
//     getAllBookProp()
// }
// }







//   return (
//     <div className=' d-flex justify-content-center'>
//       <MDBCard  style={{ width: '300px', alignItems: 'center' }}>
//         <MDBCardImage onClick={handleShow} src={book?`${serverURL}/uploads/${book.bookImage}`:"https://cdn-icons-png.flaticon.com/256/2475/2475235.png"} height={300} position='top' alt='...' />
//         <MDBCardBody>
//           <MDBCardTitle className='text-center'>{book.title}</MDBCardTitle>
//           <MDBCardText className='text-center'>
//             {book.author}
//           </MDBCardText>
//           <MDBCardText className='text-center'>
//             {`₹${book.price}`}
//           </MDBCardText>
//           {userRole === 'admin' ? (
//             <div className="d-flex" >
//              <EditBook newbooks={book}/>
//               <MDBBtn onClick={() => deleteAdminbook(book._id)} style={{backgroundColor:'white',boxShadow:'none',color:'red',fontSize:'25px'}}  href=''><MdDelete />
// </MDBBtn>
//             </div>
//           ) : (
//             <div className="d-flex justify-content-between">
              
//                 <AddOrder  bookName={book.title}  /> 
//                 {/* In AddOrder, BOOK NOW and ADD TO CART button and modal after clicking BookNow is given
//                 So i have self enclosed it here */}
//             </div>
//           )}
//         </MDBCardBody>
//       </MDBCard>
// {/* ----------------------------------------------FIRST MODAL---------------------------------------------------- */}
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="row">
//             <div className="col-6">
//               <img src={book ? `${serverURL}/uploads/${book.bookImage}` : "https://mdbootstrap.com/img/new/standard/nature/184.webp"} alt="" className='img-fluid' />
//             </div>
            
//             <div className="col-6 ">
//             <p style={{fontSize:'16px'}}><span style={{color:'blue'}}>Title :</span> {book.title}</p>
//             <p style={{fontSize:'16px'}}><span style={{color:'blue'}}>Author :</span> {book.author}</p>
//             <p style={{fontSize:'16px'}}><span style={{color:'blue'}}>Category :</span> {book.genre}</p>
//               <p style={{ textAlign: 'justify' }}><span style={{color:'blue'}}>Description :</span> {book.description}
//               </p>
//               <p style={{fontSize:'16px'}}></p>
//             </div>

//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <div>
            
//             <Button className='ms-2' variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </div>

//         </Modal.Footer>
//       </Modal>

      
      



//     </div>
//   );
// }

// export default BookCard;

// ----------------------------------------------------3---------------------------------------------------------------

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaEdit } from "react-icons/fa";
import { serverURL } from '../Services/serverURL';
import { MdDelete } from "react-icons/md";
import { deleteAdminBookAPI } from '../Services/allAPIs';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddOrder from './AddOrder';
import EditBook from './EditBook';
import { CartContext } from '../Context API/ContextShare';
import { WishlistContext } from '../Context API/ContextShare';
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa'; // Import wishlist icon
import { editBookResponseContext } from '../Context API/ContextShare';
function BookCard({ book, getAllBookProp }) {
  const {editBookResponse,seteditBookResponse} = useContext(editBookResponseContext)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const navigate = useNavigate();
  // // Implement function to add book to wishlist and cart
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext) //addToWishlist---.> setWishlist aanu indirectly 

  const userRole = sessionStorage.getItem('username') === 'Admin' ? 'admin' : 'user';

  const deleteAdminbook = async (bid) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      };
      const result = await deleteAdminBookAPI(bid, reqHeader);
      console.log(result);
      alert("book deleted successfully");
      getAllBookProp();
    }
  };
// Implement function to add book to cart
  const handleAddToCart = () => {
    addToCart(book);
   
  };

  // Implement function to add book to wishlist
  const handleAddToWishlist = () => {
    
    addToWishlist(book);  // addToWishlist---.> setWishlist aanu indirectly 
   
  };
  useEffect(()=>
  {

  },[editBookResponse])
  return (
    <div className='d-flex justify-content-center'>
      <MDBCard style={{ width: '300px', alignItems: 'center' }}>
        <MDBCardImage onClick={handleShow} src={book ? `${serverURL}/uploads/${book.bookImage}` : "https://cdn-icons-png.flaticon.com/256/2475/2475235.png"} height={300} position='top' alt='...' />
        
        <MDBCardBody>
          <MDBCardTitle className='text-center'>{book.title}</MDBCardTitle>
          <MDBCardText className='text-center'>
            {book.author}
          </MDBCardText>
          <MDBCardText className='text-center'>
            {`₹${book.price}`}
            {userRole !== 'admin' && ( // Only render wishlist icon for non-admin users
            
          <FaHeart className='mx-4' onClick={handleAddToWishlist} style={{ cursor: 'pointer',  fontSize: '24px', color: 'red' }} />
        )}
          </MDBCardText>
          {userRole === 'admin' ? (
            <div className="d-flex">
              <EditBook newbooks={book} />
              <MDBBtn onClick={() => deleteAdminbook(book._id)} style={{ backgroundColor: 'white', boxShadow: 'none', color: 'red', fontSize: '25px' }}>
                <MdDelete />
              </MDBBtn>
            </div>
          ) : (
            
            <div className="d-flex  justify-content-between">
          
        
              <AddOrder bookName={book.title}  />
              {/* <MDBBtn onClick={handleAddToCart}>Add to Cart</MDBBtn> */}
              <MDBBtn style={{ textTransform: 'capitalize' }} className='mx-3' onClick={handleAddToCart}  href='#'>ADD TO  < FaCartArrowDown className='text-white' style={{fontSize:'18px'}} /> </MDBBtn>
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img src={book ? `${serverURL}/uploads/${book.bookImage}` : "https://mdbootstrap.com/img/new/standard/nature/184.webp"} alt="" className='img-fluid' />
            </div>
            <div className="col-6">
              <p style={{ fontSize: '16px' }}><span style={{ color: 'blue' }}>Title :</span> {book.title}</p>
              <p style={{ fontSize: '16px' }}><span style={{ color: 'blue' }}>Author :</span> {book.author}</p>
              <p style={{ fontSize: '16px' }}><span style={{ color: 'blue' }}>Category :</span> {book.genre}</p>
              <p style={{ textAlign: 'justify' }}><span style={{ color: 'blue' }}>Description :</span> {book.description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='ms-2' variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookCard;

