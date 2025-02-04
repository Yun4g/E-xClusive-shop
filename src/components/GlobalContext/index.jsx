import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export const GlobalContext =  createContext(null)





function GlobalState({children}) {

const publicKey = "pk_test_ef545c8d586d88daee8f055eb3f3f42d136d4865"
    
     const [searchItem, setSearchItem] =  useState('')
     const [cartItem, setCartItem] = useState( ()=>{
        const storeData = localStorage.getItem('cartItem');
        return storeData ? JSON.parse(storeData) : [];
     })
    const [totalPrice, setTotalPrice] = useState(0)
     const navigate = useNavigate()

    const [firstName, setFirstName]  =  useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [amount, setAmount] = useState("")
   
   
   
    const componentProps = {
        email,
        amount: totalPrice * 100,
        metadata: {
            name: `${firstName} ${lastName}`,
            phone,
            city,
            state,
            address,
            firstName,
            lastName,
        },
        publicKey,
        embed: true,
        text: "pay with PayStack",
        onSuccess : ()=> alert('Payment successful'),
        onclose : ()=> alert('are you sure you want to close'),
        
    }

     const handleSearch =(e)=>{
          const Value = e.target.value
          setSearchItem(Value)
          console.log(searchItem)
     }


      
     const updateCartQuantity = (itemId, newQuantity)=>{
           const updatedCart = cartItem.map((item)=>(
            item.id === itemId ? {...item, quantity: newQuantity }  : item 
            
           ))           
           setCartItem(updatedCart)
           localStorage.setItem("cartItem", JSON.stringify(updatedCart));
     }


     
   const handleOnchange = (event)=>{
    const {name, value} = event.target;
      switch (name) {
          case 'firstName':
             setFirstName(value);   
             console.log(value)       
              break;
              
          case 'lastName':
              setLastName(value); 
              console.log(value)            
              break;
              
          case 'email':
              setEmail(value);   
              console.log(value)          
              break;
              
          case 'amount':
              setAmount(value);  
              console.log(value)          
              break;
              
          case 'address':
              setAddress(value); 
              console.log(value)            
              break;

           case 'phone':
               setPhone(value)
               console.log(value)   
               break;
              
          case'city':
              setCity(value);  
              console.log(value)         
              break;
              
          case 'state':
              setState(value);  
              console.log(value)         
              break;
  
      
          default:
              break;
      }



}
    
     const addToCart = (newItem) => {
        const existingCart = cartItem.find((item)=> item.id === newItem.id)
     
        if (existingCart) {        

           const updatedCart = cartItem.map((item)=>(
            item.id === newItem.id ? {...item, quantity : item.quantity + 1 }  : item 
            
           ))           
           setCartItem(updatedCart)
           localStorage.setItem("cartItem", JSON.stringify(updatedCart));
         
          alert('already added to cart')
       
        } else {
            const updatedCart = [...cartItem, { ...newItem, quantity: 1 }];
            setCartItem(updatedCart)
            localStorage.setItem('cartItem', JSON.stringify(updatedCart))
         
        }

           
    }


    const removeFromCart = (itemId)=>{
           const updatedCart = cartItem.filter((item)=> item.id!== itemId)
           setCartItem(updatedCart)
           localStorage.setItem('cartItem', JSON.stringify(updatedCart))
    }


    useEffect(() => {
        const total = cartItem.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        setTotalPrice(total);
    }, [cartItem]);


    return  <GlobalContext.Provider value={
         {
            searchItem, 
            setSearchItem,
            handleSearch,
            navigate,
            addToCart,
            cartItem,
            totalPrice,
            removeFromCart,
            updateCartQuantity,
            firstName, 
            setFirstName,
            lastName, 
            setLastName,
            email, 
            setEmail,
            address,
            setAddress,
            phone,
            setPhone,
            city,
            setCity,
            state,
            setState,
            handleOnchange,
            amount,
            componentProps
        }
        }>{children}</GlobalContext.Provider>
    
}

export default GlobalState;