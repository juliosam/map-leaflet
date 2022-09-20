import { useEffect } from "react";

const Fetcher = ({setInfo}) => {
  
  useEffect( () => { dataGeter()} ,[])

  const dataGeter = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    setInfo(data)
    console.log(data)
  }
  
  return (
    <>
    </>
  )
}

export default Fetcher
