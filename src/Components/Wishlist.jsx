// import React, { useContext } from 'react';
// import { WishlistContext } from '../Context API/ContextShare';
// import BookCard from '../Components/BookCard'; // Import the BookCard component or the component used to display books
// import { MdDelete } from "react-icons/md";
// function Wishlist() {
//   const { wishlist,removeFromWishlist } = useContext(WishlistContext);

//   return (
//     <div className="container">
//       <h2 className="my-4">Wishlist</h2>
//       <div className="row">
//         {wishlist.map(book => (
//           <div key={book._id} className="col-md-4 mb-4">
//             <BookCard book={book} /> {/* Pass the 'book' prop to the BookCard component */}
//             <div className='text-center'>
//             <MdDelete onClick={() => removeFromWishlist(book._id)} style={{ cursor: 'pointer', color: 'red', fontSize: '25px' }} />
//                 </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;

import React, { useContext } from 'react';
import { WishlistContext } from '../Context API/ContextShare';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { MdDelete } from "react-icons/md";
import { serverURL } from '../Services/serverURL';
import UserHeader from './UserHeader';
import AddOrder from './AddOrder';

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
   <div>
    <UserHeader/>
    <br></br><br></br><br></br><br></br><br></br><br></br>
     <div className="container mt-5">
       
     
        {
          wishlist.length===0?(
            
            <div className="div">
              <br></br><br></br><br></br>
              <h3 className='m-5 text-center text-success'> Your wishlist is empty!!!</h3>
              <br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
          ):
          <div className="row">
          {wishlist.map(book => (
            <div key={book._id} className="col-md-4 mb-4">
              <MDBCard style={{ width: '300px', alignItems: 'center' }}>
                <MDBCardImage src={book ? `${serverURL}/uploads/${book.bookImage}` : "https://cdn-icons-png.flaticon.com/256/2475/2475235.png"} height={300} position='top' alt={book.title} />
                <MDBCardBody>
                  <MDBCardTitle className='text-center'>{book.title}</MDBCardTitle>
                  <MDBCardText className='text-center'>{book.author}</MDBCardText>
                  <MDBCardText className='text-center'>{`₹${book.price}`}</MDBCardText>
                  
                  <div className='text-center d-flex justify-content-center align-items-center'>
                  <AddOrder bookName={book.title}/>
                    <MdDelete className='mx-3' onClick={() => removeFromWishlist(book._id)} style={{ cursor: 'pointer', color: 'red', fontSize: '25px' }} />
                  </div>
                 
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
        }
      </div>
   </div>
  );
}

export default Wishlist;


