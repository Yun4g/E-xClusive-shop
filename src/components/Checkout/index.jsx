import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { AlertDialogDemo } from "../AlertDialog";



function Total() {

    const {totalPrice} = useContext(GlobalContext)
    return (
        <section className="  shadow-xl shadow-slate-700 border-slate-950 w-96 bg-white  rounded-2xl ">
           <div className=" p-4 border-b-2 border-black">
          <h1 className=" text-2xl font-sans font-bold">Cart Total</h1>
          </div>

              <div className="p-4 border-b-2 border-black">
                <p className=" text-xl  font-semibold">Subtotal:</p>
                <p className=" text-red-700">price: {totalPrice}</p>
              </div>

              <div  className="p-4 border-b-2 border-black flex justify-between font-bold">
               <p>Shipping</p>  
               <p>Free</p>
              </div>

              <div className="p-4 border-b-2 border-black">
                <p className=" text-xl  font-semibold">Total</p>
                <p className=" text-red-700">price:{totalPrice}</p>
              </div>

              <div className="p-4 flex justify-center">
                <AlertDialogDemo className=" bg-slate-900"/>
              </div>
        </section>
    );
}

export default Total;