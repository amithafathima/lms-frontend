// import React, { useState } from 'react'
// import { createContext } from 'react'
// export const addBookResponseContext=createContext()
// export const editBookResponseContext= createContext()
// export const CartContext = createContext();

// function ContextShare({children}) {
//     const [addBookResponse,setAddBookResponse]=useState("")
//     const [editBookResponse,seteditBookResponse]=useState("")
 

    
//     const [cart, setCart] = useState([]);

//   const addToCart = (book) => {
//     setCart((prevCart) => [...prevCart, book]);
//   };

//   const removeFromCart = (bookId) => {
//     setCart((prevCart) => prevCart.filter(book => book._id !== bookId));
//   };
//   return (
//     <>
//     <addBookResponseContext.Provider value={{addBookResponse,setAddBookResponse}} >
//     <editBookResponseContext.Provider value={{editBookResponse,seteditBookResponse}}>
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//           {children}
//         </CartContext.Provider>
//       </editBookResponseContext.Provider>
//     </addBookResponseContext.Provider>
    
//     </>
//   )
// }

// export default ContextShare
// ----------------------------------------------------2-------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { createContext } from 'react';

// export const addBookResponseContext = createContext();
// export const editBookResponseContext = createContext();
// export const CartContext = createContext();
// export const WishlistContext = createContext();

// function ContextShare({ children }) {
//     const [addBookResponse, setAddBookResponse] = useState("");
//     const [editBookResponse, setEditBookResponse] = useState("");
//     const [cart, setCart] = useState(() => {
//         const savedCart = localStorage.getItem('cart');
//         return savedCart ? JSON.parse(savedCart) : [];
//     });
//     const [wishlist, setWishlist] = useState(() => {
//         const savedWishlist = localStorage.getItem('wishlist');
//         return savedWishlist ? JSON.parse(savedWishlist) : [];
//     });

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     useEffect(() => {
//         localStorage.setItem('wishlist', JSON.stringify(wishlist));
//     }, [wishlist]);

//     const addToCart = (book) => {
//         setCart((prevCart) => [...prevCart, book]);
//     };

//     const removeFromCart = (bookId) => {
//         setCart((prevCart) => prevCart.filter(book => book._id !== bookId));
//     };

//     const addToWishlist = (book) => {
//         setWishlist((prevWishlist) => [...prevWishlist, book]);
//     };

//     const removeFromWishlist = (bookId) => {
//         setWishlist((prevWishlist) => prevWishlist.filter(book => book._id !== bookId));
//     };

//     return (
//         <addBookResponseContext.Provider value={{ addBookResponse, setAddBookResponse }}>
//             <editBookResponseContext.Provider value={{ editBookResponse, setEditBookResponse }}>
//                 <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//                     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//                         {children}
//                     </WishlistContext.Provider>
//                 </CartContext.Provider>
//             </editBookResponseContext.Provider>
//         </addBookResponseContext.Provider>
//     );
// }

// export default ContextShare;

// ------------------------------------------------3--------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const addBookResponseContext = createContext();
export const editBookResponseContext = createContext();
export const CartContext = createContext();
export const WishlistContext = createContext();

function ContextShare({ children }) {
    const [addBookResponse, setAddBookResponse] = useState("");
    const [editBookResponse, setEditBookResponse] = useState("");
    const [cart, setCart] = useState(() => {
        const email = sessionStorage.getItem('email');
        const savedCart = localStorage.getItem(`cart_${email}`);
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const email = sessionStorage.getItem('email');
        const savedWishlist = localStorage.getItem(`wishlist_${email}`);
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        const email = sessionStorage.getItem('email');
        localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const email = sessionStorage.getItem('email');
        localStorage.setItem(`wishlist_${email}`, JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
    };

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter(book => book._id !== bookId));
    };

    const addToWishlist = (book) => {
        setWishlist((prevWishlist) => [...prevWishlist, book]);
    };

    const removeFromWishlist = (bookId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(book => book._id !== bookId));
    };

    return (
        <addBookResponseContext.Provider value={{ addBookResponse, setAddBookResponse }}>
            <editBookResponseContext.Provider value={{ editBookResponse, setEditBookResponse }}>
                <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
                    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
                        {children}
                    </WishlistContext.Provider>
                </CartContext.Provider>
            </editBookResponseContext.Provider>
        </addBookResponseContext.Provider>
    );
}

export default ContextShare;
