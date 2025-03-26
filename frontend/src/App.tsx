
import { CheckoutCard } from './components/CheckoutCard'

import { getProducts } from './hooks/getProducts'
import { useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { DescriptionModal } from './components/DescriptonModal'
import { FilterModal } from './components/FilterModal'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Layout } from './components/Layout'
import { Orders } from './pages/orders'
import { Account } from './pages/account'
import { LandingPage } from './pages/landing'
import Login from './pages/signin'
import { Signup } from './pages/signup'
import { Purchase } from './components/Purchasing'
import { RootState } from './store'

function App() {
  const {loading,allProducts} = getProducts()

  console.log(loading,allProducts)


  const ismodalOpen = useSelector((state:RootState) => state.modal.isCheckoutModalOpen);
  const isFilterModalOpen = useSelector((state:RootState) => state.modal.isFilterModalOpen);


  const isDescriptionmodalOpen = useSelector((state:RootState) => state.modal.showDescriptionModal.value);
  const isPurchaseModalOpen = useSelector((state:RootState)=> state.modal.isPurchaseModalOpen);




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

  {/* Modal for processing order */}
    {
      
      isPurchaseModalOpen && <Purchase/>
    }
    </AnimatePresence>

    
    <Routes >
      <Route element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/my-orders' element={<Orders/>}/>
      <Route path='/my-account' element={<Account/>}/>
\

      </Route>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>


    </Routes>



    </>
  )
}

export default App
