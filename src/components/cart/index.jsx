import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useContext, useEffect, useState } from "react";
import NavBar from "../landingPage/navBar";
import Total from "../Checkout";

function CartComponent() {
    const { cartItem, updateCartQuantity, removeFromCart } = useContext(GlobalContext)
    const [storedData, setStoredData] = useState([])




    useEffect(() => {
        const storeData = localStorage.getItem("cartItem");
        if (storeData) {
            setStoredData(JSON.parse(storeData));
        }
    }, []);


const handleInput = (e, item) => {
  let newQuantity = parseInt(e.target.value, 10);

  // If input is empty, set a default of 1
  if (isNaN(newQuantity) || newQuantity < 1) {
    newQuantity = 1;
  }

  updateCartQuantity(item.id, newQuantity);
};

    console.log(storedData)

    return (
        <>
            {cartItem.length === 0 ? (
                <div className="bg-slate-50 h-screen overflow-y-scroll overflow-x-hidden pb-5">
                    <section className="w-full">
                        <div className="flex flex-col justify-center items-center h-screen w-full">
                            <FontAwesomeIcon icon={faFaceSadTear} className="text-9xl text-gray-700" />
                            <h1 className="text-4xl text-slate-700 font-bold">Your Cart is Empty</h1>
                            <Link to={'/shop'}>
                                <button className="mt-5 text-2xl text-white bg-red-500 px-12 py-2 rounded-full">Continue Shopping</button>
                            </Link>
                        </div>
                    </section>
                </div>
            ) : (
                <section className="bg-slate-100 p-2 py-10 md:p-0 h-30rem md:h-screen flex flex-col justify-center items-center overflow-y-scroll pb-5">
                    <div className="fixed top-0 w-full">
                        <NavBar />
                    </div>

                    <h1 className="text-3xl  font-bold text-center mt-[7rem] md:mt-40  py-4">Shopping Cart</h1>
                    <section className="flex  px-3 justify-center  gap-3    lg:w-[99rem] flex-wrap  items-center">
                        {cartItem.map((item) => (
                            <div key={item.id} className="flex flex-wrap lg:flex-nowrap md:justify-between bg-slate-300 justify-center items-center w-full  md:max-w-lg px-4 rounded-xl py-3 h-fit md:h-32 ">
                                <div className=" h-20 w-20">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />

                                </div>

                                <div className="flex-grow mx-4">
                                    <h2 className="font-semibold w-56">{item.title}</h2>
                                    <p>Price: ${item.price * item.quantity}</p>
                                    <p>Quantity: {item.quantity}</p>


                                </div>
                                <div className=" flex justify-between w-full md:justify-start md:w-40 gap-1">


                                    <div className="flex justify-center items-center mt-4 md:mt-0 space-x-2">
                                        <button
                                            onClick={() => handleInput({ target: { value: item.quantity - 1 } }, item)}
                                            className="bg-gray-300 text-black px-3 py-2 rounded-md hover:bg-gray-400"
                                        >
                                            -
                                        </button>


                                        <input
                                            type="number"
                                            className="border-2 border-slate-950 rounded-lg w-16 p-2 text-center text-lg md:w-18"
                                            onChange={(e) => handleInput(e, item)}
                                            value={item.quantity}
                                            min="1"
                                        />

                                        <button
                                            onClick={() => handleInput({ target: { value: item.quantity + 1 } }, item)}
                                            className="bg-gray-300  text-black  px-3 py-2 rounded-md hover:bg-gray-400"
                                        >
                                            +
                                        </button>
                                    </div>


                                    <button onClick={() => {
                                        removeFromCart(item.id)
                                    }} className="text-sm text-red-900  hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>


                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="flex w-full md:w-96  mt-9">
                        <Total />
                    </section>
                </section>
            )}
        </>
    );
}

export default CartComponent;
