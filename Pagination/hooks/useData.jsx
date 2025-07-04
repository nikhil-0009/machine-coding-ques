import React, { useEffect, useState } from 'react'

const useData = () => {
    const [data,setData]=useState([])
     const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500");
    const data = await res.json();
    setData(data.products)
  };
  useEffect(()=>{
      fetchData()
},[])
  return data
}

export default useData