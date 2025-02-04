import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../GlobalContext";
import { PaystackButton } from "react-paystack";

function Form() {
    
    const { totalPrice, handleOnchange,  componentProps} = useContext(GlobalContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmitForm(data) {
        console.log("Form Submitted:", data);
    
    }

    return (
        <section className=" bgImage  flex justify-center w-full ">


        <form
            id="checkout-form"
            onSubmit={handleSubmit(onSubmitForm)}
            className="flex flex-wrap gap-2  z-[1000]  md:w-2/5  rounded-2xl p-5"
        >
            <h1 className="text-3xl text-white font-bold text-center mb-5 w-full ">
                Payment Details
            </h1>

            <div className="w-full ">
                <input
                   onChange={handleOnchange}
                    type="text"
                    required
                    name="firstName"
                    placeholder="First Name"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 focus:bg-transparent w-full ps-4 text-lg"
                    {...register("firstName", { required: true })}
                />
             
            </div>

            <div className="w-full ">
                <input
                    onChange={handleOnchange}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 w-full ps-4 text-lg"
                    required
                   
                />
                {errors.lastName && <p>Last name is required</p>}
            </div>

            <div className="w-full">
                <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 w-full ps-4 text-lg"
                    required
                    name="email"
                    onChange={ handleOnchange}
                />
               
            </div>

            <div className="w-full ">
                <input
                    {...register("phone", { required: true, minLength: 8 })}
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 w-full ps-4 text-lg"
                     required
                     minLength={11}
                     maxLength={11}
                    onChange={ handleOnchange}
                />
               
            </div>

            <div className="w-full">
                <input
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Address"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 w-full ps-4 text-lg"
                    required
                    name="address"
                    onChange={ handleOnchange}
                />
               
            </div>

            <div className="w-full ">
                <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="City"
                    name="city"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 w-full ps-4 text-lg"
                    required
                    onChange={ handleOnchange}
                />
                
            </div>

            <div className="w-full ">
                <input
                    {...register("state", { required: true })}
                    type="text"
                    name="state"
                    placeholder="State"
                    className="h-10 md:h-16 text-white bg-transparent border-b-2 outline-none focus:border-b-red-600 w-full ps-4 text-lg"
                    required
                    onChange={ handleOnchange}
                />
              
            </div>
            <div>
                <h1 className="text-white">
                    Total Price: ${totalPrice}
                    <span className="text-sm ml-2  text-slate-400">
                        (Shipping included)
                    </span>
                </h1>
            </div>
           
           
          <PaystackButton type="submit" onClick={handleSubmit(onSubmitForm)}   {...componentProps} className="bg-red-500 text-white p-2 rounded-lg w-full ">
                Pay with Paystack
              
          </PaystackButton>
            
        </form>
        </section>
    );
}

export default Form;
