
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
        {/* Modal for checkout */}
    {
      ismodalOpen &&
        <CheckoutCard/>
      }
        {/* Modal for items information */}

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
      {/* dashboard page */}
      <Route path='/dashboard' element={<Dashboard/>}/>

      {/* My Orders page */}

      <Route path='/my-orders' element={<Orders/>}/>
       {/* My Account page */}

      <Route path='/my-account' element={<Account/>}/>
\

      </Route>
            {/* Landing/Home page */}

      <Route path='/' element={<LandingPage/>}/>
            {/* Sign in page */}

      <Route path='/signin' element={<Login/>}/>
            {/* Sign up page */}

      <Route path='/signup' element={<Signup/>}/>


    </Routes>



    </>
  )
}

export default App
