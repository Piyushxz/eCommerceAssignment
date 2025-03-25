import axios from "axios"
import { useEffect, useState } from "react"

export const getProducts = ()=>{

    const [loading,isLoading] = useState(true)
    const [allProducts,setAllProducts] = useState([])

    useEffect(()=>{
        (async()=>{
            const response = await axios.get("https://api.escuelajs.co/api/v1/products",{
                params:{
                    limit:20,
                    offset:0
                }
            })
            console.log(response)
            setAllProducts(response.data)
            isLoading(false)
        })()
    },[])


    return {loading,allProducts}
}