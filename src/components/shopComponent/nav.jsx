import { Link, useNavigate } from "react-router-dom";
import '../../App.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function NavHead() {
        const [toggleState, setToggleState] = useState(false)
       
        const handleToggleState = () => {
            return  setToggleState(!toggleState)
       }

    const {cartItem} = useContext(GlobalContext)
    const navigate = useNavigate()
    console.log(cartItem)

    const handleNavigate = () => {
            navigate('/shop')
    }
    return (
        <>
        <nav className=" bg-slate-100 flex  h-20 justify-between lg:px-28 fixed top-0  px-2 md:px-0  w-full   items-center " >
            <h1 className=" text-4xl font-serif font-bold">E-<span className=" text-red-700">Xclucive</span></h1>
            <div className=" hidden lg:flex justify-between items-center  gap-16 bg-transparent">           
                <Link to="/" className=" text-red-950 transition-colors duration-100 hover:text-red-500 font-bold"> Home</Link>   
                <button onClick={handleNavigate} className="font-semibold text-white bg-black h-12  w-32 flex justify-center items-center rounded-lg">  Shop For Demo  </button>    

                <div onClick={()=> navigate('/shop/:id')} className=" relative  h-12   pt-4 flex items-end cursor-pointer">
                    <p className=" absolute top-0  mb-8 right-0 font-bold  text-red-700 text-lg ">{cartItem.length}</p>
                    <FontAwesomeIcon className=" text-2xl text-slate-900" icon={faShoppingCart}/>
                   
                    </div> 
            </div>
      <div className=" lg:hidden">
                {
                    toggleState ? <FontAwesomeIcon icon={faTimes} className=" text-2xl" onClick={handleToggleState} /> : <FontAwesomeIcon icon={faBars} className=" text-2xl" onClick={handleToggleState} />
                }
            </div>

           

        </nav>
            
            {
                 toggleState ?
                 
                  <div className=" fixed top-20 w-full backdrop-blur-lg bg-black/30  flex flex-col lg:hidden justify-center items-center  p-3 gap-4  h-72"> 
                   
                 <div onClick={()=> navigate('/shop/:id')} className=" relative  h-12   pt-4 flex items-end cursor-pointer">
                    <p className=" absolute top-0  mb-8 right-0 font-bold  text-red-700 text-lg ">{cartItem.length}</p>
                    <FontAwesomeIcon className=" text-2xl text-slate-900" icon={faShoppingCart}/>
                   
                    </div>           
                 <Link to="/" className=" text-red-700  transition-colors duration-100 hover:text-red-500 font-bold"> Home</Link>   
                 <button onClick={handleNavigate} className="font-semibold text-white bg-black h-12  w-32 flex justify-center items-center rounded-lg">  Shop For Demo  </button>      
                
                 </div> 
                  
                  : ''
            }
            </>
    )

}
