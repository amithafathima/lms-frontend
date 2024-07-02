// component api fetching codes

import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// 1 register API call
export const registerAPI = async (user) => {
    return await commonAPI("post", `${serverURL}/register`, user, "")

}

//2 login API call
export const loginAPI = async (user) => {
    return await commonAPI("post", `${serverURL}/login`, user, "")

}
// 3 add Book API CALL
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("post", `${serverURL}/book/add`, reqBody, reqHeader)
}

// 4 to display all books API call 
  export const getAllBooksAPI=async(searchKey,reqHeader)=>
{
    return await commonAPI("get", `${serverURL}/all/admin/book?search=${searchKey}`, "", reqHeader)// added query parameter for searching purposes
}  

//5 delete particular Admin BOOK API call
export const deleteAdminBookAPI= async(BookId,reqHeader)=>
    {
        return await commonAPI("delete",`${serverURL}/book/delete-admin-book/${BookId}`,{},reqHeader)
        // we can use bid instead of BookId......here  in delete function  when deleteAdminAPi is called then bid becomes BookId 
    }

  
 
 // 6 add order by user API Call
 export const addUserOrderAPI = async (reqBody, reqHeader) => {
    return await commonAPI("post", `${serverURL}/add/order`, reqBody, reqHeader)
}

//7 view home books for everyone without logging

export const getHomeBookAPI=async()=>
    {
        return await commonAPI("get",`${serverURL}/book/home-book`,"","")
    }
 //8  view all users order in Admin side
 export const getUsersOrderAPI=async(reqHeader)=>
    {
        return await commonAPI("get",`${serverURL}/all/user/order`,"",reqHeader)// added query parameter for searching purposes
    }   

    //9 view a particular users all orders in user side
    export const getAUserOrderAPI=async(reqHeader)=>
        {
            return await commonAPI("get",`${serverURL}/my/orders`,"",reqHeader)
        }

     // 10 update book details by admin in admin side
     export const updateAdminBookAPI= async(BookId,reqBody,reqHeader)=>
        {
            return await commonAPI("put",`${serverURL}/book/update-admin-book/${BookId}`,reqBody,reqHeader)
        }  

      // 11 view all users in admin
      
      export const getAllUsersAPI=async(reqHeader)=>
        {
            return await commonAPI("get", `${serverURL}/all/users`, "", reqHeader)// added query parameter for searching purposes
        } 
        

        // 12 add cartorder by user API Call
        export const UserCartOrderAPI = async (reqBody, reqHeader) => 
            {
        return await commonAPI("post", `${serverURL}/cart/order`, reqBody,reqHeader)
            }

            
        //13  view all users order in Admin side
 export const getCartOrderAPI=async(reqHeader)=>
    {
        return await commonAPI("get",`${serverURL}/all/user/cart/order`,"",reqHeader)// added query parameter for searching purposes
    }

    //14  view a particular users all orders in user side
    export const getAUserCartOrderAPI=async(reqHeader)=>
        {
            return await commonAPI("get",`${serverURL}/my/cart/orders`,"",reqHeader)
        }
      