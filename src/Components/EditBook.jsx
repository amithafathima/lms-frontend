import React,{useContext}from 'react'
import {
    
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { FaEdit } from "react-icons/fa";
  import Modal from 'react-bootstrap/Modal';
  import Button from 'react-bootstrap/Button';
  import {useEffect,useState} from 'react'
  import { serverURL } from '../Services/serverURL';
import { updateAdminBookAPI } from '../Services/allAPIs';
import { editBookResponseContext } from '../Context API/ContextShare';
import Swal from 'sweetalert2';
function EditBook({newbooks}) {
  const {editBookResponse,seteditBookResponse} = useContext(editBookResponseContext)
    console.log(newbooks);
   
    // for modal working
  const [show, setShow] = useState(false); 
  const handleClose = () => {
    setShow(false);
    setbookData({
      id:newbooks._id,
    title:newbooks.title,
    author:newbooks.author,
    genre:newbooks.genre,
    price:newbooks.price,
    availability:newbooks.availability,
    description:newbooks.description,
    bookImage:""
    })
    setPreview("")
  }
   const handleShow = () => setShow(true);
   const[preview,setPreview]=useState("")// setting image
   const[fileStatus,setFileStatus]=useState(false)//please upload following image extension(png/jpeg/jpg) only.....

   // 1 Edit book data
  const[bookData,setbookData]=useState({
    id:newbooks._id,
    title:newbooks.title,
    author:newbooks.author,
    genre:newbooks.genre,
    price:newbooks.price,
    availability:newbooks.availability,
    description:newbooks.description,
    bookImage:""
  })
  console.log(bookData);

  
  // 2 image extension checking
  useEffect(()=>// image extension checking
  {
  console.log(bookData.bookImage.type);
  // if(projectData.projectImage.type=="image/png" || projectData.projectImage.type=="image/jpg"||projectData.projectImage.type=="image/jpeg")
    if (bookData.bookImage && (bookData.bookImage.type === "image/png" || bookData.bookImage.type === "image/jpeg" || bookData.bookImage.type  === "image/jpg"))
  {
    console.log("Generated image url");
    //file to url conversion
    console.log(URL.createObjectURL(bookData.bookImage));
    setPreview(URL.createObjectURL(bookData.bookImage))// setting image
  
    setFileStatus(false)
  }
  else{
    setFileStatus(true)
    console.log("please upload following image extension(png/jpeg/jpg) only..... ");
  }
  },[bookData.bookImage])

 // 3 function for update book

 const updateBook=async()=>
    {
      // 1
      const {id,title,author,genre,price,availability,description,bookImage}=bookData
  
      const reqBody =new FormData() // image ullond aanu FormData() use aakith...image illel formdata venda
      reqBody.append("title",title)
      reqBody.append("author",author)
      reqBody.append("genre",genre)
      reqBody.append("price",price)
      reqBody.append("availability",availability)
      reqBody.append("description",description)
      preview?reqBody.append("bookImage",bookImage):reqBody.append("bookImage",newbooks.bookImage)
  
      // 2 req header
      const token =sessionStorage.getItem("token");
      // if there is  a change  in image
  
      if(preview) //3 image change aakumbo mathram update aaku....ivda multipart data aahnn
        {
          const reqHeader={
            "Content-Type": "multipart/form-data",
            "Authorization" :`Bearer ${token} `
          }
  
          // 4 api call
          const result =await updateAdminBookAPI(id,reqBody,reqHeader)
          
          console.log(result);
          if(result.status==200)
            {
              Swal.fire({
                title: "Book edited successfully !",
               
                icon: "success"
              });
             
              handleClose()// once update kazhinjal close aavanam
              window.location.reload();// context api not working so to solve refresh
              seteditBookResponse(result.data) // context api
              
            }
            else
            {
              Swal.fire({
                title: "Book not edited !",
               
                icon: "success"
              });
              seteditBookResponse(result.response.data)
            }
        }
        else// 5 image update aakunnilla.....that is not multipart data
        {
  
          const reqHeader={
            "Content-Type": "application/json",
            "Authorization" :`Bearer ${token} `
          }
  
          //  api call
          const result = await updateAdminBookAPI(id,reqBody,reqHeader)
          
          console.log(result);
          if(result.status==200)
            {
              Swal.fire({
                title: "Book edited successfully !",
               
                icon: "success"
              });
             
              handleClose()// once update kazhinjal close aavanam
              window.location.reload();// context api not working so to solve refresh
               seteditBookResponse(result.data)
            }
            else
            {
              Swal.fire({
                title: "Book not edited !",
               
                icon: "success"
              });
               seteditBookResponse(result.response.data)
            }
        }
    }



  return (
    <div>
        <div className="container">
        <MDBBtn  onClick={handleShow} style={{backgroundColor:'white',boxShadow:'none',color:'green',fontSize:'25px'}}  href=''><FaEdit /></MDBBtn>
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
          <input onChange={e=>setbookData({...bookData,bookImage:e.target.files[0]})}    style={{display:'none'}} type='file'></input>
        <img src={preview?preview:`${serverURL}/uploads/${newbooks.bookImage}`}  className='img-fluid m-4 p-4 '  alt="" height={200} width={200} />
         <p>Add project by clicking above add icon</p>
         {
          fileStatus ?  <p className='text-warning'>please upload following image extension(png/jpeg/jpg) only.....</p>
          : <p className='text-warning'>correct formatting</p>
         }
         
        </label>
            </div>
            <div className="col-7">
              <input onChange={e=>setbookData({...bookData,title:e.target.value})} value={bookData.title}  type="text"   name="" id="" placeholder=' Title' className='form-control my-3'/>
              <input onChange={e=>setbookData({...bookData,author:e.target.value})} value={bookData.author}  type="text"  name="" id="" placeholder='Author' className='form-control my-3'/>
              <input onChange={e=>setbookData({...bookData,genre:e.target.value})} value={bookData.genre} type="text"  name="" id="" placeholder='Genere' className='form-control v'/>
              <input onChange={e=>setbookData({...bookData,price:e.target.value})} value={bookData.price} type="text"  name="" id="" placeholder='Price' className='form-control my-3'/>
              <input onChange={e=>setbookData({...bookData,availability:e.target.value})} value={bookData.availability}  type="text"  name="" id="" placeholder='Availability' className='form-control my-3'/>
              <input onChange={e=>setbookData({...bookData,description:e.target.value})} value={bookData.description}  type="text"  name="" id="" placeholder='Description' className='form-control my-3'/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={updateBook}  variant="primary">Edit</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  )
}

export default EditBook