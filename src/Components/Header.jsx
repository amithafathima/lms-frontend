//THIS IS THE HOME PAGE HEADER
import React,{ useState } from 'react'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';
function Header() {
const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
const location = useLocation();
    const currentPath = location.pathname;
 
  return (
    <div>
        <MDBNavbar id='nav' expand='lg' dark style={{ backgroundColor: '#ECF0F1', position: 'fixed',width: '100%', top: 0, zIndex: 1000,backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwkaXGNazoyymUDsRh5q3HNuG-tnWhm32uiiLhq8umcbRx6XvHVm9FnjEMWiz6XvwF3E&usqp=CAU)' }}>
        <MDBContainer fluid>
        
          < img style={{border:'0px black solid',borderRadius:'50%'}} className='me-5 ms-2' src='https://cdn-icons-png.flaticon.com/512/330/330731.png' height={80} width={80}></img>
          <MDBNavbarBrand style={{color:'#5499C7 ',fontSize:'45px'}} href='#'>BookHive</MDBNavbarBrand>
                 
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon style={{color:'#5499C7'}} icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              
              <MDBNavbarItem className='active mx-lg-4  px-lg-4'>
                <MDBNavbarLink style={{color:'black',fontSize:'18px'}} aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mx-lg-4 px-lg-4'>
              <MDBNavbarLink style={{color:'black',fontSize:'18px'}} href='#welcome'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mx-lg-4 px-lg-4'>
                
                <MDBNavbarLink style={{color:'black',fontSize:'18px'}} href='#features'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='mx-lg-4 px-lg-4'>
                <MDBNavbarLink style={{color:'black',fontSize:'18px'}} href='#features'>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>

        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBNavbarBrand,
//     MDBCollapse
// } from 'mdb-react-ui-kit';

// function Header() {
//     const [openNav, setOpenNav] = useState(false);
//     const location = useLocation();
//     const currentPath = location.pathname;

//     // Conditionally render the header content based on the current path
//     return (
//         <div>
//             <MDBNavbar
//                 expand='lg'
//                 dark
//                 style={{ backgroundColor: '#ECF0F1', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}
//             >
//                 <MDBContainer fluid>
//                     {/* Brand icon and name */}
//                     <img
//                         style={{ border: '0px black solid', borderRadius: '50%' }}
//                         className='me-5 ms-2'
//                         src='https://cdn-icons-png.flaticon.com/512/330/330731.png'
//                         height={80}
//                         width={80}
//                     />
//                     <MDBNavbarBrand style={{ color: '#5499C7', fontSize: '45px' }} href='#'>
//                         BookHive
//                     </MDBNavbarBrand>
                    
//                     {/* Conditionally render navigation links based on current path */}
//                     {(currentPath === '/') && (
//                         <>
//                             {/* Navbar toggler */}
//                             <MDBNavbarToggler
//                                 type='button'
//                                 aria-controls='navbarContent'
//                                 aria-expanded={openNav}
//                                 aria-label='Toggle navigation'
//                                 onClick={() => setOpenNav(!openNav)}
//                             >
//                                 <MDBIcon icon='bars' fas />
//                             </MDBNavbarToggler>
//                             {/* Navbar collapse */}
//                             <MDBCollapse show={openNav} navbar id='navbarContent'>
//                                 <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//                                     <MDBNavbarItem className='active mx-lg-4 px-lg-4'>
//                                         <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} aria-current='page' href='#'>
//                                             Home
//                                         </MDBNavbarLink>
//                                     </MDBNavbarItem>
//                                     <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                         <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#welcome'>
//                                             About
//                                         </MDBNavbarLink>
//                                     </MDBNavbarItem>
//                                     <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                         <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#features'>
//                                             Features
//                                         </MDBNavbarLink>
//                                     </MDBNavbarItem>
//                                     <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                         <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#contact'>
//                                             Contact Us
//                                         </MDBNavbarLink>
//                                     </MDBNavbarItem>
//                                 </MDBNavbarNav>
//                             </MDBCollapse>
//                         </>
//                     )}
//                 </MDBContainer>
//             </MDBNavbar>
//         </div>
//     );
// }

// export default Header;




// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBCollapse,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
// } from 'mdb-react-ui-kit';

// function Header() {
//     const [openNav, setOpenNav] = useState(false);
//     const location = useLocation();
//     const currentPath = location.pathname;

//     return (
//         <MDBNavbar id='nav' expand='lg' dark style={{ backgroundColor: '#ECF0F1', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
//             <MDBContainer fluid>
//                 {/* Left-most side: logo and "BookHive" brand */}
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img
//                         src='https://cdn-icons-png.flaticon.com/512/330/330731.png'
//                         height={50}
//                         width={50}
//                         alt='Logo'
//                         style={{ borderRadius: '50%', marginRight: '10px' }}
//                     />
//                     <MDBNavbarBrand style={{ color: '#5499C7', fontSize: '45px' }} href='#'>
//                         BookHive
//                     </MDBNavbarBrand>
//                 </div>

//                 {/* Conditional rendering: navbar toggler and links for the home page */}
//                 {currentPath === '/' && (
//                     <>
//                         {/* Navbar toggler */}
//                         <MDBNavbarToggler
//                             type='button'
//                             data-target='navbarContent'
//                             aria-controls='navbarContent'
//                             aria-expanded='false'
//                             aria-label='Toggle navigation'
//                             onClick={() => setOpenNav(!openNav)}
//                         >
//                             <MDBIcon style={{color:'black'}} icon='bars' fas />
//                         </MDBNavbarToggler>
                        
//                         {/* Navbar collapse */}
//                         <MDBCollapse show={openNav} navbar id='navbarContent'>
//                             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//                                 {/* Navigation links */}
//                                 <MDBNavbarItem className='active mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} aria-current='page' href='#'>
//                                         Home
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#welcome'>
//                                         About
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#features'>
//                                         Features
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#contact'>
//                                         Contact Us
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                             </MDBNavbarNav>
//                         </MDBCollapse>
//                     </>
//                 )}


//                 {/* Conditional rendering: navbar toggler and links for the home page */}
//                 {currentPath === '/admin' && (
//                     <>
//                         {/* Navbar toggler */}
//                         <MDBNavbarToggler
//                             type='button'
//                             data-target='navbarContentAdmin'
//                             aria-controls='navbarContentAdmin'
//                             aria-expanded='false'
//                             aria-label='Toggle navigation'
//                             onClick={() => setOpenNav(!openNav)}
//                         >
//                             <MDBIcon icon='bars' fas />
//                         </MDBNavbarToggler>
                        
//                         {/* Navbar collapse */}
//                         <MDBCollapse show={openNav ? 'true':'undefined'} navbar id='navbarContentAdmin'>
//                             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//                                 {/* Navigation links */}
//                                 <MDBNavbarItem className='active mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} aria-current='page' href='#'>
//                                         All Books
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         New Arrivals
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         All Users
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         All orders
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-4 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         Logout
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                             </MDBNavbarNav>
//                         </MDBCollapse>
//                     </>
//                 )}

//                 {/* Conditional rendering: navbar toggler and links for the home page */}
//                 {currentPath === '/user' && (
//                     <>
//                         {/* Navbar toggler */}
//                         <MDBNavbarToggler
//                             type='button'
//                             data-target='navbarContentUser'
//                             aria-controls='navbarContentUser'
//                             aria-expanded='false'
//                             aria-label='Toggle navigation'
//                             onClick={() => setOpenNav(!openNav)}
//                         >
//                             <MDBIcon icon='bars' fas />
//                         </MDBNavbarToggler>
                        
//                         {/* Navbar collapse */}
//                         <MDBCollapse show={openNav} navbar id='navbarContentUser'>
//                             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//                                 {/* Navigation links */}
//                                 <MDBNavbarItem className='active mx-lg-1 px-lg-2'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} aria-current='#' href='#'>
//                                         All Books
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-1 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         New Arrivals
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-1 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         Orders
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-1 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
                                        
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-1 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         Cart
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                                 <MDBNavbarItem className='mx-lg-1 px-lg-4'>
//                                     <MDBNavbarLink style={{ color: 'black', fontSize: '21px' }} href='#'>
//                                         Logout
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                             </MDBNavbarNav>
//                         </MDBCollapse>
//                     </>
//                 )}


                

                
//             </MDBContainer>
//         </MDBNavbar>
//     );
// }

// export default Header;







