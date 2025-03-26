import { useSelector } from 'react-redux'
import { motion} from "motion/react"
import { Card } from '@/components/Card'
import { Search } from '@/components/Search'
import { getProducts } from '@/hooks/getProducts'
import { DashboardNavbar } from '@/components/DashboardNavbar'
import { auth } from "../firebase";

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = ()=>{
    const nav = useNavigate()
    useEffect(()=>{
        const user = auth.currentUser;

        if (user) {
          return
        } else {
            nav("/")
        }
    },[])
      const {loading,allProducts} = getProducts()
    
      console.log(loading,allProducts)
    
    
      const searchKeyword = useSelector(state => state.searchKeyword);
    
      const filterPrice = useSelector(state=> state.filterPrice)
    
    
    
      const filteredProducts = allProducts?.filter(({ title, category, price }) => {
        const matchesSearch = title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
                              category?.name?.toLowerCase().includes(searchKeyword.toLowerCase());
      
        const matchesPrice = Number(price) <= Number(filterPrice);
      
        return matchesSearch && matchesPrice;
      }) ?? [];
    
    return(
        <>
           <DashboardNavbar/>
              <Search/>

              <section className='flex w-full justify-center '>
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.8,duration:0.4, ease: "easeInOut" }}
    className=' flex flex-wrap w-[90vw] gap-6 flex ml-6 '>
      {

        filteredProducts.length === 0 ? 
        <div className='flex justify-center w-full font-primary tracking-tighter '>
          <h1 className='font-semibold text-xl'>No Products Found.</h1>
        </div>
        :
        filteredProducts.map(({title,id,price,images,category})=>(
                  //@ts-ignore

          <Card id={id} key={id} name={title} cost={price} img={images[0]} category={category.name} />
        ))
      }
    </motion.div>



    </section>

            
        </>
    )
}