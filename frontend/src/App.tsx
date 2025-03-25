
import { Plus } from 'lucide-react'
import './App.css'
import { DashboardNavbar } from './components/DashboardNavbar'
import { Search } from './components/Search'

function App() {

  return (
    <>
      <DashboardNavbar/>
      <Search/>

    <section className='flex w-full justify-center'>
    <div className=' flex flex-wrap w-[70vw]'>
    <div className="w-[200px] h-[200px] border border-black/15 relative">
  <img 
    src="https://placeimg.com/640/480/cotton" 
    alt="Product" 
    className="w-full h-full object-cover"
  />

  <div className="absolute top-2 right-2">
    <Plus className="text-black" />
  </div>

  <div className="absolute bottom-2 left-2 font-primary tracking-tight border rounded-2xl bg-white text-black py-1 px-2">
    Clothes
  </div>
  <div className='flex justify-between font-primary'>
      <h1 className='tracking-tight text-sm'>Majestic Mountain Graphic T-Shirt</h1>
      <h1 className='tracking-tight text-sm'>$100</h1>
    </div>
</div>

    </div>



    </section>

    </>
  )
}

export default App
