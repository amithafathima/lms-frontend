import React,{useContext} from 'react'
import BookCard from './BookCard'
import {useEffect,useState} from 'react'
import {getAllBooksAPI} from '../Services/allAPIs'
import AdminHeader from './AdminHeader'
import { WishlistContext } from '../Context API/ContextShare'

import UserHeader from './UserHeader'
import { editBookResponseContext } from '../Context API/ContextShare';

function AllBook() {
  const {editBookResponse,seteditBookResponse} = useContext(editBookResponseContext)
// for accessing book in wishlist
  const { addToWishlist } = useContext(WishlistContext);

  // for username getting
  const[userName,setUserName]=useState("")
  const [searchKey,setSearchKey] = useState("")
  console.log(searchKey);
  
  const[AllBooks,setAllBooks]=useState([])

   const getAllAdminBooks=async(req,res)=>
    {
      //token authentication
      if(sessionStorage.getItem('token'))
      {
        const token=sessionStorage.getItem('token')
        const reqHeader=
        {
            "Content-Type":"application/json",
            "Authorization":"Bearer "+ token // space after Bearer is compulsory
        }
        // APi call
        const result=await getAllBooksAPI(searchKey,reqHeader)
        console.log(result);
        if(result.status===200)
        {
          setAllBooks(result.data)
        }
        else
        {
          //err
          console.log(result.response.data);
        }
      }
    }

    useEffect(()=>//1
{

  getAllAdminBooks()
  if(sessionStorage.getItem("username"))
    {
      setUserName(sessionStorage.getItem("username"));
    }
    else 
    {
      setUserName("")
    }

},[searchKey,editBookResponse])

  return (
    <div>

      {/* ===============================HEADER===================================================================== */}
          {
            userName==="Admin"?
            (
              <div>
                <AdminHeader/>
              </div>
            ):
            <div>
              <UserHeader/>
            </div>
          }
      
      {/*=============================================================================================================== */}

     <div className="container">
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <input onChange={e=>setSearchKey(e.target.value)}  style={{width:'400px'}} className='form-control mx-auto ' placeholder='Search Book '></input>
      <div className="row my-4">
        {
        // 1
          AllBooks.length>0 ? AllBooks.map(item=>(
            <div  className="col m-3">
            <BookCard book={item} getAllBookProp={getAllAdminBooks} addToWishlist={addToWishlist}  />
          </div>
          ))
          :"Cant fetch"

        }
      </div>
     </div>
    </div>
  )
}

export default AllBook