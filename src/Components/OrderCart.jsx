// import React, { useState } from 'react';
// import { MDBBtn } from 'mdb-react-ui-kit';
// import Swal from 'sweetalert2';
// import { addUserOrderAPI } from '../Services/allAPIs';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function OrderCart() {

//     const [showModal, setShowModal] = useState(false);
//   const [orderData, setOrderData] = useState({
//     name: "",
//     contactNo: "",
//     address: "",
//     pincode: "",
//     paymentMode: ""
//   });

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderData({ ...orderData, [name]: value });
//   };

//   const handleSubmit = async () => {
//     const { name, contactNo, address, pincode, paymentMode } = orderData;

//     if (!name || !contactNo || !address || !pincode || !paymentMode) {
//       Swal.fire("Please fill all the fields");
//       return;
//     }

//     try {
//       const orderDetails = {
//         name,
//         contactNo,
//         address,
//         pincode,
//         paymentMode,
//         books,
//         userId: sessionStorage.getItem("userId"),
//         orderDateTime: new Date().toISOString()
//       };

//       const response = await addUserOrderAPI(orderDetails);

//       if (response && response.data && response.data.success) {
//         Swal.fire("Order placed successfully!", "", "success");
//         handleCloseModal();
//         setOrderData({
//           name: "",
//           contactNo: "",
//           address: "",
//           pincode: "",
//           paymentMode: ""
//         });
//       } else {
//         Swal.fire("Failed to place order", "", "error");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//       Swal.fire("Failed to place order", "", "error");
//     }
//   };
//   return (
//     <div>
        
//       <MDBBtn color="success" onClick={handleShowModal}>Proceed to Checkout</MDBBtn>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Enter Your Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name</label>
//               <input type="text" className="form-control" id="name" name="name" value={orderData.name} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="contactNo" className="form-label">Contact Number</label>
//               <input type="text" className="form-control" id="contactNo" name="contactNo" value={orderData.contactNo} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <input type="text" className="form-control" id="address" name="address" value={orderData.address} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="pincode" className="form-label">Pincode</label>
//               <input type="text" className="form-control" id="pincode" name="pincode" value={orderData.pincode} onChange={handleChange} />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="paymentMode" className="form-label">Payment Mode</label>
//               <select className="form-select" id="paymentMode" name="paymentMode" value={orderData.paymentMode} onChange={handleChange}>
//                 <option value="">Select Payment Mode</option>
//                 <option value="credit_card">Credit Card</option>
//                 <option value="debit_card">Debit Card</option>
//                 <option value="net_banking">Net Banking</option>
//                 <option value="cash_on_delivery">Cash on Delivery</option>
//               </select>
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//           <Button variant="primary" onClick={handleSubmit}>Order</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }

// export default OrderCart

import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import { UserCartOrderAPI} from '../Services/allAPIs'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function OrderCart({books}) {
  const [showModal, setShowModal] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    contactNo: "",
    address: "",
    pincode: "",
    paymentMode: ""
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  // input field value varan look another method given by miss
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, contactNo, address, pincode, paymentMode } = orderData;

    if (!name || !contactNo || !address || !pincode || !paymentMode) {
      Swal.fire("Please fill all the fields");
      return;
    }

    try {
      // Extract book names from the books array
      const bookNames = books.map(book => book.title).join(', ');
     

      const reqBody = {
        name,
        contactNo,
        address,
        pincode,
        paymentMode,
        bookNames, // Include book names in the order details
        orderDateTime: new Date().toISOString()
      };


      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
      };
      const result = await UserCartOrderAPI(reqBody,reqHeader); // Use the new API for adding cart orders

      if (result.status === 200) {
        Swal.fire("Order placed successfully!", "", "success");
        handleCloseModal();
        setOrderData({ // after order filed empty akana
          name: "",
          contactNo: "",
          address: "",
          pincode: "",
          paymentMode: ""
        });
      } else {
        Swal.fire("Failed to place order", "", "error");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire("Failed to place order", "", "error");
    }
  };

  return (
    <div>
      <MDBBtn color="success" onClick={handleShowModal}>Proceed to Checkout</MDBBtn>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details for{books.bookNames}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={orderData.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNo" className="form-label">Contact Number</label>
              <input type="text" className="form-control" id="contactNo" name="contactNo" value={orderData.contactNo} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" value={orderData.address} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input type="text" className="form-control" id="pincode" name="pincode" value={orderData.pincode} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="paymentMode" className="form-label">Payment Mode</label>
              <select className="form-select" id="paymentMode" name="paymentMode" value={orderData.paymentMode} onChange={handleChange}>
                <option value="">Select Payment Mode</option>
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="net_banking">Net Banking</option>
                <option value="cash_on_delivery">Cash on Delivery</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Order</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderCart;
