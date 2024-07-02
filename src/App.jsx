
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import DashUser from './Pages/DashUser'
import DashAdmin from './Pages/DashAdmin'
import {Routes,Route} from 'react-router-dom'
import AllBook from './Components/AllBook'
import Cart from './Components/Cart'
import AllOrderAdmin from './Components/AllOrderAdmin'
import AllUserAdmin from './Components/AllUserAdmin'
import AllOrderUser from './Components/AllOrderUser'
import Wishlist from './Components/Wishlist'

function App() {
  

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Auth/>}/>
        <Route path={'/register'} element={<Auth register />}/>
        <Route path={'/user'} element={<DashUser/>}/>
        <Route path={'/admin'} element={<DashAdmin/>}/>
        <Route path={'/allbooks'} element={<AllBook/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
        <Route path={'/alluser/order'} element={<AllOrderAdmin/>}/>
        <Route path={'/allusers'} element={<AllUserAdmin/>}/>
        <Route path={'/orders'} element={<AllOrderUser/>}/>
        <Route path={'/wishlist'} element={<Wishlist/>}/>
       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
