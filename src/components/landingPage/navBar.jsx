import { Link, useNavigate } from "react-router-dom";
import '../../App.css'; 
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [toggleState, setToggleState] = useState(false)
   
    const handleToggleState = () => {
        return  setToggleState(!toggleState)
   }


    const navigate = useNavigate()


    const handleNavigate = () => {
            navigate('/shop')
    }
    return (
        <section>
        <nav className=" bg-slate-100 flex w-full  h-20 justify-between px-3 lg:px-28 text-content   items-center " >
            <h1 className=" text-3xl lg:text-4xl font-serif font-bold">E-<span className=" text-red-700">Xclucive</span></h1>
            <div className=" hidden lg:flex justify-between items-center  gap-16 bg-transparent">           
                <Link to="/" className=" text-red-950 transition-colors duration-100 hover:text-red-500 font-bold"> Home</Link>   
                <button onClick={handleNavigate} className="font-semibold text-white bg-black h-12  w-32 flex justify-center items-center rounded-lg">  Shop For Demo  </button>      
            </div>

            <div className=" lg:hidden">
                {
                    toggleState ? <FontAwesomeIcon icon={faTimes} className=" text-2xl" onClick={handleToggleState} /> : <FontAwesomeIcon icon={faBars} className=" text-2xl" onClick={handleToggleState} />
                }
            </div>

           

        </nav>
            
            {
                 toggleState ? <div className=" backdrop-blur-lg bg-white/20  flex flex-col lg:hidden justify-center items-center  p-3 gap-4  h-72 ">           
                 <Link to="/" className=" text-red-700  transition-colors duration-100 hover:text-red-500 font-bold"> Home</Link>   
                 <button onClick={handleNavigate} className="font-semibold text-white bg-black h-12  w-32 flex justify-center items-center rounded-lg">  Shop For Demo  </button>      
                 </div> : ''
            }
        
        </section>
    )
}
