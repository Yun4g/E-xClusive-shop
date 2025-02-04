
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/landingPage'
import ShopComponent from './components/shopComponent'
import CartComponent from './components/cart'
import Form from './components/CheckoutForm'



function App() {
  

  return (
    <>
       <main className=' h-full w-full ' >
         
         <Routes>
           <Route path='/' element={<LandingPage/>} />
           <Route path='/shop' element={<ShopComponent/>} />
           <Route path='/shop/:id' element={<CartComponent/>} />
           <Route path='/Payment' element={<Form/>}/>
           <Route path='*' element={() => <h1>Page Not Found</h1>} />
         </Routes>
        </main> 
    </>
  )
}

export default App
