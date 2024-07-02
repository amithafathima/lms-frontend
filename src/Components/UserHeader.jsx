// import React from 'react'
// import {useEffect,useState} from 'react'

// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBNavbarBrand,
//   MDBCollapse
// } from 'mdb-react-ui-kit';
// import {useNavigate} from 'react-router-dom'
// function UserHeader() {
//   const [openNavColorSecond, setOpenNavColorSecond] = useState(false); // for header
//   const navigate =useNavigate()
//   //logout
//   const logout=()=>
//     {
//       sessionStorage.clear()
//       navigate('/')
//     }

//   return (
//     <div>
//       <MDBNavbar id='nav' expand='lg' dark style={{ backgroundColor: '#ECF0F1', position: 'fixed',width: '100%', top: 0, zIndex: 1000,backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwkaXGNazoyymUDsRh5q3HNuG-tnWhm32uiiLhq8umcbRx6XvHVm9FnjEMWiz6XvwF3E&usqp=CAU)' }}>
//         <MDBContainer fluid>
        
//           < img style={{border:'0px black solid',borderRadius:'50%'}} className='me-5 ms-2' src='https://cdn-icons-png.flaticon.com/512/330/330731.png' height={80} width={80}></img>
//           <MDBNavbarBrand style={{color:'#5499C7 ',fontSize:'45px'}} href='#'>BookHive</MDBNavbarBrand>
                 
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarColor02'
//             aria-controls='navbarColor02'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
//           >
//             <MDBIcon style={{color:'#5499C7'}} icon='bars' fas />
//           </MDBNavbarToggler>
//           <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
//             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              
//               <MDBNavbarItem className='active mx-lg-4  px-lg-4'>
//                 <MDBNavbarLink style={{color:'black',fontSize:'18px'}} aria-current='page' href='/allBooks'>
//                   All Books
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
              
//               <MDBNavbarItem className='active mx-lg-4  px-lg-4'>
//                 <MDBNavbarLink style={{color:'black',fontSize:'18px'}} aria-current='' href='/my/cart'>
//                   <i class="fa-solid fa-cart-shopping"></i>
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
              
//               <MDBNavbarItem className='mx-lg-4 px-lg-4'>
                
//                 <MDBNavbarLink style={{color:'black',fontSize:'18px'}} href='/orders'>All orders</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                 <MDBNavbarLink onClick={logout} style={{color:'black',fontSize:'18px'}} href='#'><i class="fa-solid fa-right-from-bracket"></i>logout</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                 <MDBNavbarLink style={{color:'black',fontSize:'18px'}} href='/'>Home</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>

//         </MDBContainer>
//       </MDBNavbar>
//     </div>
//   )
// }

// export default UserHeader


import React, { useContext, useState } from 'react';
import { MDBNavbar, MDBContainer, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBNavbarBrand, MDBCollapse } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context API/ContextShare';
import { FaHeart } from 'react-icons/fa'; // Import wishlist icon
import { WishlistContext } from '../Context API/ContextShare';

function UserHeader() {
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  

  const logout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  

  return (
    <div>
      <MDBNavbar id='nav' expand='lg' dark style={{ backgroundColor: '#ECF0F1', position: 'fixed', width: '100%', top: 0, zIndex: 1000, backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwkaXGNazoyymUDsRh5q3HNuG-tnWhm32uiiLhq8umcbRx6XvHVm9FnjEMWiz6XvwF3E&usqp=CAU)' }}>
        <MDBContainer fluid>
          <img style={{ border: '0px black solid', borderRadius: '50%' }} className='me-5 ms-2' src='https://cdn-icons-png.flaticon.com/512/330/330731.png' height={80} width={80} alt="BookHive Logo" />
          <MDBNavbarBrand style={{ color: '#5499C7', fontSize: '45px' }} href='#'>BookHive</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon style={{ color: '#5499C7' }} icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active mx-lg-3 px-lg-3'>
                <MDBNavbarLink style={{ color: 'black', fontSize: '18px' }} aria-current='page' href='/allBooks'>
                  All Books
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active mx-lg-3 px-lg-3'>
                <MDBNavbarLink style={{ color: 'black', fontSize: '18px' }} aria-current='' href='/cart'>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="badge bg-primary">{cart.length}</span>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active mx-lg-3 px-lg-3'>
                <MDBNavbarLink style={{ color: 'black', fontSize: '20px' }} aria-current='' href='/wishlist'>
                 <FaHeart/>
                  <span className="badge bg-primary">{wishlist.length}</span>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mx-lg-3 px-lg-3'>
                <MDBNavbarLink style={{ color: 'black', fontSize: '18px' }} href='/orders'>All orders</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mx-lg-3 px-lg-3'>
                <MDBNavbarLink onClick={logout} style={{ color: 'black', fontSize: '18px' }} href='#'>
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mx-lg-3 px-lg-3'>
                <MDBNavbarLink style={{ color: 'black', fontSize: '18px' }} href='/'>Home</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default UserHeader;
