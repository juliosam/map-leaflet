import { useEffect } from "react";
import axios from "axios";

const Fetcher = ({setInfo}) => {
  
  useEffect( () => { dataGeter()} ,[])

  const dataGeter = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setInfo(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
    </>
  )
}

export default Fetcher
