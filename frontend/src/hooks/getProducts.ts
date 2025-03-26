import { RootState } from "@/store"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const getProducts = ()=>{

    const filterCategory = useSelector((state:RootState)=>state.modal.filterCategory)
    const [loading,isLoading] = useState(true)
    const [allProducts,setAllProducts] = useState([])

    const url = filterCategory === 'all'? 'https://api.escuelajs.co/api/v1/products' : `https://api.escuelajs.co/api/v1/products?categorySlug=${filterCategory}`
    console.log(url)
    useEffect(()=>{
        (async()=>{
            const response = await axios.get(url,{
                params:{
                    limit:20,
                    offset:0
                }
            })
            console.log(response)
            setAllProducts(response.data)
            isLoading(false)
        })()
    },[filterCategory])


    return {loading,allProducts}
}