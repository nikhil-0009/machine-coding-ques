import './App.css'
import Allitems from '../components/Allitems'
import useData from '../hooks/useData';

function App() {
   const data=useData();
  
  return (
    <>
    <h1 className='text-center bg-amber-600 text-3xl p-2.5'>Pagination</h1>
    <Allitems data={data}/>
    </>
  )
}

export default App
