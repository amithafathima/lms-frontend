import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect,useState} from 'react'
import {addBookAPI} from '../Services/allAPIs'
import { addBookResponseContext } from '../Context API/ContextShare';
import Swal from 'sweetalert2';
function AddBook() {
  const {addBookResponse,setAddBookResponse}=useContext(addBookResponseContext)//ContextShare
    //first state aayitt kodknm contextshare
    // ini view cheyyande avdem kodknm
  const[preview,setPreview]=useState("")// setting image
  const[fileStatus,setFileStatus]=useState(false)//please upload following image extension(png/jpeg/jpg) only.....
  const[token,setToken]=useState("")
  
    
   //Add Book details
  const[bookDetails,setBookDetails]=useState({
    title:"",
    author:"",
    genre:"",
    price:"",
    availability:"",
    description:"",
    bookImage:""
  })
  console.log(bookDetails);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(()=>
  {
    console.log(bookDetails.bookImage.type);
    if(bookDetails.bookImage.type=="image/png" || bookDetails.bookImage.type=="image/jpg"||bookDetails.bookImage.type=="image/jpeg")
      {
        console.log("Generated image url");
        //file to url conversion
        console.log(URL.createObjectURL(bookDetails.bookImage));
        setPreview(URL.createObjectURL(bookDetails.bookImage))// setting image
      
        setFileStatus(false)
      }
      else{
        setFileStatus(true)
        console.log("please upload following image extension(png/jpeg/jpg) only..... ");
      }
  },[bookDetails.bookImage.type])


  const handleAddBook=async()=>
    {
      //data passing
      const{title,author,genre,price,availability,description,bookImage}=bookDetails
    
      if(!title||!author||!genre||!price||!availability||!description||!bookImage)
      {
        Swal.fire("Please fill the form!");
      }
      else
      {
             const reqBody=new FormData() // image illel formData venda appol append um venda
             reqBody.append("title",title)
             reqBody.append("author",author)
             reqBody.append("genre",genre)
             reqBody.append("price",price)
             reqBody.append("availability",availability)
             reqBody.append("description",description)
             reqBody.append("bookImage",bookImage)

             //console.log(reqBody); // for testing purposes
    
              if(token)
              {
                const reqHeader={
                  "Content-Type" :"multipart/form-data", // image illel content-type :"application/json"
                  "Authorization":`Bearer ${token}`
                 }
                 //multipart form-data kodkan reason image file aayett aahnn kodkunne instaed of string
    
    
                 //api call
               const result=await addBookAPI(reqBody,reqHeader)
               console.log(result);
               if(result.status==200)
               {
                // alert("book added successfully")
                Swal.fire({
                  title: "Book added successfully!!!",
                  
                  icon: "success"
                });
                setAddBookResponse(result.data)
                handleClose()// once add aayi kazhinj modal close aakan
                setBookDetails({title:"",author:"",genre:"",price:"",availability:"",description:"",bookImage:""})// ithellam empty aakum
                setPreview("")// ithum empty aakum
               }
               else{
                // alert(result.response.data) // Book already exists
                Swal.fire({
                  title: 'Error!',
                  text: result.response.data,
                 icon:'error',
                 confirmButtonText:'Back'
              })
               }
              }
               
      }
      
    }

    useEffect(() => {
      const storedToken = sessionStorage.getItem("token");
      console.log(storedToken);
      if (storedToken) {
          setToken(storedToken);
      } else {
          setToken("");
      }
  }, []);


   

  return (
    <div>
      <div className="container ">
      <button onClick={handleShow} className='btn btn-primary my-5  '>Add </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'// just to increase modal size
      >
        <Modal.Header closeButton>
          <Modal.Title>About Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-5">
           <label>
          <input onChange={e=>setBookDetails({...bookDetails,bookImage:e.target.files[0]})}   style={{display:'none'}} type='file'></input>
        <img  className='img-fluid m-4 p-4 ' src={preview?preview:"https://cdn-icons-png.freepik.com/256/1092/1092216.png"} alt="" height={200} width={200} />
        <p>Add project by clicking above add icon</p>
         {
          fileStatus &&  <p className='text-warning'>please upload following image extension(png/jpeg/jpg) only.....</p>
         }
        </label>
            </div>
            <div className="col-7">
              <input onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text"  name="" id="" placeholder=' Title' className='form-control my-3'/>
              <input onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text"  name="" id="" placeholder='Author' className='form-control my-3'/>
              <input onChange={e=>setBookDetails({...bookDetails,genre:e.target.value})} type="text"  name="" id="" placeholder='Category' className='form-control v'/>
              <input onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text"  name="" id="" placeholder='Price' className='form-control my-3'/>
              <input onChange={e=>setBookDetails({...bookDetails,availability:e.target.value})} type="text"  name="" id="" placeholder='Availability' className='form-control my-3'/>
              <input onChange={e=>setBookDetails({...bookDetails,description:e.target.value})} type="text"  name="" id="" placeholder='Description' className='form-control my-3'/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleAddBook}  variant="primary">Add</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      


      </div>
    </div>
  )
}

export default AddBook