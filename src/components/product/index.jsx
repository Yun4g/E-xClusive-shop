import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../useFetch/indx";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";

function Product() {
    const { data, isLoading } = useFetch('https://fakestoreapi.com/products');
     const {searchItem, addToCart} = useContext(GlobalContext)


    const filterData = searchItem
    ? data.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()))
    : data;
         
    useEffect(()=>{
        filterData.length === 0 && localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).length && localStorage.setItem('data', JSON.stringify(JSON.parse(localStorage.getItem('data')).filter(item => item.stock > 0)))
     },[data])

    return (
        <>
            {isLoading ? (
                <div className="bg-gray-600 bg-opacity-50 w-full h-screen overflow-hidden pb-5">
                    <div className="flex flex-col justify-center items-center h-screen w-full">
                        <div className="border-4 border-black animate-spin w-14 h-14 border-dotted rounded-full"></div>
                    </div>
                </div>
            ) : (
                <div className=" flex  flex-wrap    w-full justify-center  border-2 rounded-lg gap-4 p-4">
                    {  filterData.map((product) => (
                        <div className=" border p-4  w-full lg:w-[20%] bg-white rounded-xl shadow-lg shadow-slate-200 " key={product.id}>
                            <div className=" h-44 mb-3">
                            <img src={product.image} alt={product.title} className=" w-full h-full object-contain " />
                            </div>
                            <h3 className=" font-semibold text-red-800 line-clamp-1">{product.title}</h3>
                            <h3 className=" font-semibold text-red-800">Price: ${product.price}</h3>
                            <h3 className=" font-semibold text-red-800">Rating: {product.rating.rate}</h3>
                            <button onClick={()=> addToCart(product)} className=" w-full  h-9 text-white rounded-lg bg-black  mt-4  ">   <FontAwesomeIcon className=" text-white" icon={ faShoppingCart } /> Add to cart</button>
                            
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Product;
