import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";







function SearchComponet() {
       const {handleSearch} = useContext(GlobalContext)

    return(
        <form className=" w-11/12" action="">
          <input type="text" className=" w-full h-12 outline-none  bg-transparent " onChange={handleSearch}  placeholder="Search products..." />
        </form>
       

    )
}

export default  SearchComponet;