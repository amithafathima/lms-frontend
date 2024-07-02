import React from 'react'
import { useState } from 'react'
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
import { registerAPI,loginAPI} from '../Services/allAPIs'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


function Auth({register}) {
  const [isOpen, setIsOpen] = React.useState(false); // header
  const navigate=useNavigate () //This line initializes the navigate function using the useNavigate hook from React Router. 
  const [userData,setUserData]=useState({ // 
    username:"",
    email:"",
    password:"",
  })//This initializes a state variable userData using the useState hook, which holds user data from the form.
  
  

  // for validation(email)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validate password
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister=async(e)=>{
    e.preventDefault()// The e.preventDefault() method is a common technique used in JavaScript to prevent
    // the default behavior of an event. In the context of a form submission, it's often used
    // to prevent the page from refreshing when the form is submitted.
    console.log(userData);
    if(!userData.username||!userData.email||!userData.password)
    {
      // alert('Please fill the form')
      Swal.fire("Please fill the form!");
    }

    // for validation(email)
          
    else if(!emailRegex.test(userData.email)) 
      {
      Swal.fire("Invalid email format!");
      }
      
      // for validation (password)

      else if (!passwordRegex.test(userData.password)) {
        
        Swal.fire("Password must be at least 8 characters long");

      }

    else{
      //api call to register
      // the entered data will be passed to backend via commonAPI and allAPIs
      // in the backend, if that particular email is there means that user is already registered else if,,, that email is no there means
      // that data will be added as newUser and is saved in backend and passed to frontend for any use in future
      const result=await registerAPI(userData) // registerApi() de ullil kodkunne aanu req.body
      console.log(result); // result is the second object created
      if(result.status===200)// 200 aanel newUser aanu
      {
        // alert("Successfully registered")
        Swal.fire({
          title: "Successfully registered!",
          
          icon: "success"
        });
        setUserData( // register form empty aakan
          {
            username:"",
            email:"",
            password:""
          }
        )
        navigate('/login')
        
        
      }
      else if(result.response.status===406)
      {
        Swal.fire({
          title: 'Error!',
          text: result.response.data, // "user already registered" from backend 
         icon:'error',
         confirmButtonText:'Back'
      })
      }

      // for validation(email)
      //email validation
      else{
        Swal.fire({
          text: "Registration failed. Please try again.",
          icon: "error"
        });
      }

    }

    console.log(userData); // what is the output look
  }
// ------------------------------------------LOGIN LOGIC----------------------------------------------------------------

const handleLogin=async(e)=>{
  e.preventDefault()// The e.preventDefault() method is a common technique used in JavaScript to prevent
  // the default behavior of an event. In the context of a form submission, it's often used
  // to prevent the page from refreshing when the form is submitted.
  console.log(userData);
  if(!userData.email||!userData.password)
  {
    // alert('Please fill the form')
    Swal.fire("Please fill the form!");
  }
  else{
    //api call to login
    const result=await loginAPI(userData)
    console.log(result);// oru object varum athil data il existingUser und
    if(result.status===200)
    {

      sessionStorage.setItem("username",result.data.existingUser.username)
      sessionStorage.setItem("email",result.data.existingUser.email)
      sessionStorage.setItem("token",result.data.token)
      // alert("Successfully registered")
      Swal.fire({
        title: "Login Successfull !",
       
        icon: "success"
      });
      setUserData(
        {
         
          email:"",
          password:""
        }
      )
      if(result.data.existingUser.email=='admin@gmail.com')
        {
          navigate('/admin')
        }
        else{
          navigate('/user')
          window.location.reload(); // very important ....this refreshes the dashuser when loads 
          //so headercount of cart and wishlist get reflected
        }

      
    }
    else if(result.response.status===404)
    {
      // alert(result.response.data)
      
        Swal.fire({
          title: 'Error!',
          text: result.response.data,
         icon:'error',
         confirmButtonText:'Back'
      })
    }
  }
  console.log(userData);
  
}

  return (
    <div>
      <MDBNavbar
      id='nav'
      expand='lg'
      dark
      style={{
        backgroundColor: '#ECF0F1',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwkaXGNazoyymUDsRh5q3HNuG-tnWhm32uiiLhq8umcbRx6XvHVm9FnjEMWiz6XvwF3E&usqp=CAU)',
      }}
    >
      <MDBContainer fluid>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ border: '0px black solid', borderRadius: '50%' }}
            className='me-2'
            src='https://cdn-icons-png.flaticon.com/512/330/330731.png'
            height={80}
            width={80}
            alt='Logo'
          />
          <MDBNavbarBrand style={{ color: '#5499C7', fontSize: '45px' }} href='#'>
            BookHive
          </MDBNavbarBrand>
        </div>

        {/* Navbar toggler for responsiveness */}
        <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <MDBCollapse show={isOpen} navbar>
          {/* Add additional links or content here */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div id='login'  className="container" >
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
       {
        register?
        <h2  className='m-4 text-center text-dark'>REGISTER</h2>
        :
        <h2 className='m-5 p-2 text-center text-dark'>LOGIN</h2>
       }

       <div>
        {
          register &&
          <input  onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username}  type="text" placeholder='Username:' className='form-control my-4'/>
        }
        <input onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} type="text" placeholder='Email:' className='form-control my-4'/>
        <input  onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password}  type="password" placeholder='Password:' className='form-control my-4'/>
       </div>

       <div className='d-flex align-items-center justify-content-center' >
            {
              register?
              <div>
                <button onClick={handleRegister} style={{height:'42px',width:'133px',fontSize:'16px'}} className='btn btn-primary my-3 mx-auto ms-5 '>Register</button>
                <p className='my-4 mb-4 text-center'>Already Registered...? <a href="/login">login here</a></p> 
              </div>
              :
              <div>
                <button onClick={handleLogin} style={{height:'42px',width:'133px',fontSize:'16px'}}  className='btn btn-primary mx-auto ms-5'>Login</button>
                <p className='my-4 mb-5 pb-1 text-center'>New to here...?  <a href="/register">Register here</a></p>
              </div>
            }
           </div>

             
        </div>
        <div className="col-2"></div>
      </div>
    </div>
        <br></br><br></br><br></br>
    </div>
  )
}

export default Auth