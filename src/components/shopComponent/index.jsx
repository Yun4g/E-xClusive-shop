import Product from "../product";
import SearchComponet from "../searchComponent"
import '../../../src/App.css'

import NavHead from "./nav";

function ShopComponent() {
    return (
        <main className=" h-screen ">
          
            <header className=" h-1/2 bgImage1">
            <NavHead/> 
            </header>

            <section className=" flex p-4 lg:ps-32 lg:pe-32 lg:pt-32 border-2 border-slate-900 bg-slate-200  h-fit ">
      

                 <div className="  h-full flex flex-wrap w-[100%]">
                 <h1 className=" text-4xl font-serif font-bold mb-6">E-<span className=" text-red-700">Xclucive</span></h1>
                    <div className=" bg-white rounded-xl border border-slate-900 flex justify-center mb-7 items-center w-full ">
                    <SearchComponet/>
                   
               
   
                    </div>
                 
                 <Product/>
                 </div>                
                  <div>
                  
                  </div>
            </section>
          
       
        </main>
    );
}

export default ShopComponent;