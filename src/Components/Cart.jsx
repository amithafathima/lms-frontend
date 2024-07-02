
// import React, { useContext } from 'react';
// import { CartContext } from '../Context API/ContextShare';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { serverURL } from '../Services/serverURL';
// function Cart() {
//   const { cart, removeFromCart } = useContext(CartContext);

//   const totalAmount = cart.reduce((acc, book) => acc + book.price, 0);
//   return (
//     <div className="container">
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map(book => (
//             <div key={book._id} className="row mb-3">
//               <div className="col-4">
//                 <img src={`${serverURL}/uploads/${book.bookImage}`} alt={book.title} className="img-fluid" />
//               </div>
//               <div className="col-4">
//                 <h5>{book.title}</h5>
//                 <p>{book.author}</p>
//                 <p>₹{book.price}</p>
//               </div>
//               <div className="col-4">
//                 <MDBBtn onClick={() => removeFromCart(book._id)} color="danger">
//                   Remove
//                 </MDBBtn>
//               </div>
//             </div>
//           ))}
//           <hr />
//           <h3>Total Amount: ₹{totalAmount}</h3>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart





import React, { useContext } from 'react';
import { CartContext } from '../Context API/ContextShare';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { serverURL } from '../Services/serverURL';
import UserHeader from './UserHeader';
import OrderCart from './OrderCart';


function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div className="mt-5">
      <UserHeader />
      <br /><br /><br />
      <div className="container my-5">
        {cart.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh', flexDirection: 'column' }}>
            <img height={200} src='https://lordicon.com/icons/wired/outline/148-trolley-cross.gif' alt="Empty Cart" />
            <p className="text-danger mt-3">Your cart is empty.</p>
          </div>
        ) : (
          <div className="row">
            {/* Book Cards Column */}
            <div className="col-lg-8 col-md-12 mb-4">
              {cart.map(book => (
                <MDBCard key={book._id} className="mb-3 shadow" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                  <MDBCardImage 
                    src={`${serverURL}/uploads/${book.bookImage}`} 
                    alt={book.title} 
                    style={{ width: '200px', height: '100%', objectFit: 'cover' }} 
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="text-info">{book.title}</MDBCardTitle>
                    <MDBCardText className="text-secondary">{book.author}</MDBCardText>
                    <MDBCardText className="text-success">₹{book.price}</MDBCardText>
                    <MDBBtn onClick={() => removeFromCart(book._id)} color="danger">
                      Remove
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </div>
            {/* Order Summary Column */}
            <div className="col-lg-4 col-md-12 mb-4">
              <MDBCard className="shadow">
                <MDBCardBody>
                  <h3 className="text-success">Order Summary</h3>
                  <hr />
                  <p>Total Items: {cart.length}</p>
                  <p>Total Amount: ₹{totalAmount}</p>
                  <OrderCart books={cart}/>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
