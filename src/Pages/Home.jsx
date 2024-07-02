import React from 'react'
import {Link} from 'react-router-dom'
import { getHomeBookAPI } from '../Services/allAPIs';
import {useEffect,useState } from 'react';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn, MDBCardImage
} from 'mdb-react-ui-kit';
import Header from '../Components/Header'
import BookCard from '../Components/BookCard'
function Home() {
  const[homeBook,setHomeBook]= useState([]) // for book viewing in home page
  
  
  const getHomeBooks=async(req,res)=>
    {
      const result =await getHomeBookAPI()
        console.log(result)
        if(result.status==200)
        {
          setHomeBook(result.data)
        }
        else
        {
          console.log(result.response.data);
        }
      
    }
    console.log(homeBook);

    useEffect(()=>
      {
        
        getHomeBooks()// 2
      
        
      },[])

    
  return (

    <div>
      <Header/>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="row" style={{ width: '100%' }}>
        <div className="col-lg-12 col-sm-12">
          <div className="banner bg-blur" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/63/69/91/360_F_663699184_oV2haGVhzafnqdu4PZUIBNpglGwyBbZD.jpg)' }}>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
            <h1 className='text-center mt-5' style={{ color: '#5499C7  ', fontSize: '75px' }}>BOOK HAVEN</h1>
            <h4 className='text-center mt-lg-' style={{ color: 'white ', }}>Dive into a world of endless stories and knowledge at Book Haven - Your Ultimate Library Experience!</h4>
            <center>
             <Link to={'/register'}> <button className='btn btn-outline-light m-4 ' style={{ height: '70px', width: '220px', fontSize: '24px', textTransform: 'none', borderRadius: '50px', }}>Discover More</button></Link>
            </center>
          </div>
        </div>
      </div >
      {/* ------------------------------------------------------------------------------------------------------------ */}
           <br id='welcome'></br> <br></br> <br></br><br></br><br></br>
      <div  style={{ textAlign: 'justify' }} className="container">
        <h1  id='welcome' style={{ fontSize: '50px' }} className='text-center  text-dark  '>Welcome to <span >BookHive</span></h1>
        <br></br><br></br>
        <h4>Welcome to the ultimate realm of literary treasures where books come to life and knowledge reigns supreme! Dive
          into a world where every page holds a new adventure waiting to be discovered.</h4>
        <h4 className='my-3'>Embark on a literary adventure like never before with our innovative online library management system.Whether you're a bookworm or a knowledge seeker,
          <span style={{ color: '#5499C7' }}> BookHive</span>  offers a seamless experience for both users and admins.</h4>
        <h4 className='mb-3'>Join us in revolutionizing the way you interact with books and information!</h4>
        <h4>Let BookHive be your guide in the enchanting realm of literature. Unleash your imagination and expand your horizons with every page you turn.</h4>
      </div> <br></br> <br></br> <br></br><br></br><br></br>
      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* login */}

      <div className="row" style={{ width: '100%' }}>
        <div className="col-lg-12 col-sm-12">
          <div className="banner1 bg-blur" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/63/69/91/360_F_663699184_oV2haGVhzafnqdu4PZUIBNpglGwyBbZD.jpg)' }}>
            <br></br><br></br>
            <div className="container">

              <div  >
                <MDBCard  >
                  <MDBCardBody style={{backgroundColor:'white ',border:'0px white solid',borderRadius:'75px'}}>
                       <br></br>
                    <h1 className='text-center' style={{fontSize:'65px'}}>Explore Limitless </h1>
                    <h1  className='text-center' style={{fontSize:'65px'}}>Reading Adventures </h1>
                    <h1  className='text-center' style={{fontSize:'65px'}}>Today! </h1>
                    <h5 className='text-center'>Dive into a World of Books and Knowledge. Join Now!</h5>
                    <br></br>
                    <Link to ={'/register'}> <center><button style={{backgroundColor:'#5499C7',height: '55px', width: '190px', fontSize: '22px', borderRadius: '50px', textTransform: 'none'}} className='btn'>Get Started</button></center></Link>
                    <br></br>
                  </MDBCardBody>
                </MDBCard>

              </div>
            </div>


          </div>
        </div>
      </div>




      {/* ---------------------------------------------------------------------------------------------------------- */}
      <br></br><br></br>
      <h1 style={{ fontSize: '40px', color: '#5499C7' }} className='text-center mt-5 text-dark  '>BOOK COLLECTION</h1>
      <br></br>

      
                  <div className="row">
                     {// 2
                homeBook.length>0?homeBook.map(i=>(
                  <div className="col">
                    <div className='col mt-5'>
                         <BookCard book={i}/>
                  </div>
                  </div>
                ))

                :'Null'
              }

                  </div>
     

      {/* --------------------------------------------------------------------------------------------------------- */}
      <br id='features'></br><br></br>
      <h1 style={{ fontSize: '40px' }} className='text-center mt-5 text-dark  '>FEATURES</h1>

      <div className="container">


        <div className="row">
          <div  className="col-lg-4 col-sm-12 my-4 pt-2 ">
            <MDBCard id='card1' ><br></br>
              <MDBCardBody>
                <MDBCardTitle><h2 style={{ color: 'black' }} className='text-center m-3'>Book Collect</h2></MDBCardTitle>
                <MDBCardText>
                  <h5 className='text-center text-black'>Build your virtual library with just a click.</h5>
                </MDBCardText>

              </MDBCardBody><br></br><br></br>
            </MDBCard>
          </div>
          <div className="col-lg-4 col-sm-12 my-4 pt-2 ">
            <MDBCard id='card2'>
              <MDBCardBody><br></br>
                <MDBCardTitle><h2 style={{ color: 'black' }} className='text-center m-3'>Read Anywhere</h2></MDBCardTitle>
                <MDBCardText>
                  <h5 className='text-center text-black '>Access your favorite books anytime, anywhere.</h5>
                </MDBCardText>

              </MDBCardBody><br></br><br></br>
            </MDBCard>
          </div>
          <div className="col-lg-4 col-sm-12 my-4 pt-2 ">
            <MDBCard id='card3'><br></br>
              <MDBCardBody>
                <MDBCardTitle><h2 style={{ color: 'black' }} className='text-center m-3'>User Friendly Interface</h2></MDBCardTitle>
                <MDBCardText>
                  <h5 className='text-center text-black mb-4'>Emphasize the intuitive design and easy navigation  </h5>
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>


          </div>
        </div>


      </div>
    </div>




  )
}

export default Home