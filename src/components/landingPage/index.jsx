import { useNavigate } from "react-router-dom"
import NavBar from "./navBar"
import '../../App.css'; 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AccordionItem, AccordionContent, AccordionTrigger, Accordion } from "../ui/accordion";
import { CarouselSpacing } from "../carousel";
import Footer from "../footer";








function LandingPage() {
  
    const navigate = useNavigate()
 
    const handleNavigate = () => {
            navigate('/shop')
    }

  


  return (
    <>
      <div className=" h-full w-full bgImage overflow-hidden ">
        <header className=" fixed top-0 w-full z-[2000] ">
        <NavBar />
        </header>
        <main>
          <section className="  h-screen flex items-center  gap-4  z-[1000]    ">
            <div className=" h-full  flex flex-col justify-center  w-full  items-center  md:h-1/2 lg:pt-[100px] z-[1000] ">
              <h1 className=" text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white" >Welcome to  E-<span className=" text-red-700">Xclucive</span></h1>
              <p className=" text-white  text-center text-base md:text-xl lg:text-normal mt-8 mb-8 leading-6 md:leading-8    lg:w-1/2 ">
                Your One-Stop Shop for your favourite shopping Items

              Shop now and experience quality like never before
                Free Shipping on Orders Over [Amount]
                24/7 Customer Support
                Hassle-Free Returns Within 30 Days.
              </p>
              <button onClick={handleNavigate} className=" bg-red-800 text-white font-bold w-60 h-12 rounded ">
                 Shop Demo 
                  <FontAwesomeIcon icon={faShoppingCart} />
                 </button>
            </div>
            
          </section>      
        </main>

      </div>


      <section className=" h-[70vh]  lg:h-[90vh] relative flex flex-col justify-center items-center   p-7    "  >

     <h1 className=" absolute top-[70px]  p-7 lg:p-0  lg:left-[90px] text-xl text-center md:text-3xl lg:text-5xl font-bold "> View 
     <span className="  font-serif font-bold text-black" > E-<span className=" text-red-700">Xclucive</span></span>  Product Gallery</h1>
     <CarouselSpacing/>
      </section>

      <section className=" py-4  border md:h-[80vh] flex flex-col justify-center items-center   bg-slate-950 ">

        

        <div className=" h-[70vh] flex flex-col justify-center p-2  items-center lg:w-[49rem] ">
      
        <h1 className=" text-3xl lg:text-5xl mb-8 text-white font-mono font-semibold">Frequently Asked Question</h1>
        <div className=" w-full">
      <Accordion className=" w-full border rounded-2xl bg-slate-100 shadow-lg shadow-slate-800" type="single" collapsible>
  <AccordionItem value="item-1" className=" p-2  ">
    <AccordionTrigger className="text-sm md:text-xl">What shipping options do you offer?</AccordionTrigger>
    <AccordionContent className="text-lg">
    We offer standard, express, and overnight shipping options. You can select your preferred method at checkout.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="p-2  border-0 border-b-2">
    <AccordionTrigger className="text-sm md:text-xl">Do you ship internationally?</AccordionTrigger>
    <AccordionContent className="text-lg">
    Yes, we ship to many countries worldwide. Please check our shipping policy for specific locations and rates.
    </AccordionContent>
  </AccordionItem>
 
  <AccordionItem value="item-3" className="p-2  border-0 border-b-2">
    <AccordionTrigger className="text-sm md:text-xl">Can I exchange an item?</AccordionTrigger>
    <AccordionContent className="text-lg">
    Yes, exchanges can be made within 30 days of purchase. Please follow our return process and place a new order for the desired item.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="p-2  border-0 ">
    <AccordionTrigger className="text-sm md:text-xl">How long will it take to receive my order?</AccordionTrigger>
    <AccordionContent className="text-lg">
    Delivery times vary based on your location and the shipping method selected. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
</div>
      </section>

     <Footer/>
      
    </>
  )
}

export default LandingPage