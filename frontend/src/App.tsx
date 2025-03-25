
import { Card } from './components/Card'
import { CheckoutCard } from './components/CheckoutCard'
import { DashboardNavbar } from './components/DashboardNavbar'
import { Search } from './components/Search'
import { getProducts } from './hooks/getProducts'
import { useSelector } from 'react-redux'
import {motion} from "motion/react"
function App() {
  const {loading,allProducts} = getProducts()

  console.log(loading,allProducts)

  const ismodalOpen = useSelector(state => state.isCheckoutModalOpen);



  return (
    <>

      {
      ismodalOpen &&
        <CheckoutCard/>
      }
      
      <DashboardNavbar/>
      <Search/>

    <section className='flex w-full justify-center'>
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.4,duration:0.4, ease: "easeInOut" }}
    className=' flex flex-wrap w-[60vw] gap-6'>
      {
        allProducts.map(({title,id,price,images,category})=>(
                  //@ts-ignore

          <Card key={id} name={title} cost={price} img={images[0]} category={category.name} />
        ))
      }
    </motion.div>



    </section>

    </>
  )
}

export default App
