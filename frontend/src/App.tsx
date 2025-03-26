
import { CheckoutCard } from './components/CheckoutCard'

import { getProducts } from './hooks/getProducts'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { DescriptionModal } from './components/DescriptonModal'
import { FilterModal } from './components/FilterModal'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
function App() {
  const {loading,allProducts} = getProducts()

  console.log(loading,allProducts)


  const ismodalOpen = useSelector(state => state.isCheckoutModalOpen);

  const isFilterModalOpen = useSelector(state => state.isFilterModalOpen);

  const isDescriptionmodalOpen = useSelector(state => state. showDescriptionModal.value);




  return (
    <>
    <AnimatePresence>
    {
      ismodalOpen &&
        <CheckoutCard/>
      }
  {isDescriptionmodalOpen && <DescriptionModal />}

  {
      isFilterModalOpen && <FilterModal/>
    }

    </AnimatePresence>

    
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>



    </>
  )
}

export default App
