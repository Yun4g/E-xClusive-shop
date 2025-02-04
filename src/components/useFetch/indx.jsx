import { useEffect, useState } from "react";
import axios from 'axios';

function UseFetch(url) {
     const [data, setData] = useState([]);
     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

    


     const getdata =  async () => {
        setIsLoading(true)
           try {
               const response = await axios.get(url)
               setData(response.data)
            
               setIsLoading(false)
           } catch (error) {
               console.log(error)
               setError('failed to get data')
           }finally {
            setIsLoading(false); 
        }
     }




     useEffect(()=>{
       url ? getdata() : ''

     },[url])

    return   { 
        data, error, isLoading
    }
    
}

export default UseFetch