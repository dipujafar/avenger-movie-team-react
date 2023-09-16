import { useState } from 'react'
import './App.css'
import Cards from './Component/Cards/Cards'
import Carts from './Component/Carts/Carts'
import Header from './Component/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 const [selected, setSelected] = useState([]);
 const [cost,setCost] = useState(0)
 const [budget,setBudget] = useState(20000)

const handleSelected = actor => {
  const selectedMem = selected.find(mem=> mem.id === actor.id)
  if(selectedMem){
    toast.error("This Member already your team!");
  }
  else{
    let cost = actor.salary;
    selected.forEach(mem =>{
      cost += mem.salary
    })
    const remainingBudget = 20000 - cost;
    if(remainingBudget < 0){
      toast.error("You don't have enough budget!");
    }
    else{
      setBudget(remainingBudget)
      setCost(cost)
       setSelected([...selected,actor])
    }
  }
  
}
  return (
    <div className='bg-hero-pattern bg-no-repeat bg-cover bg-blend-overlay'>
      <Header/>
      <main className='md:flex justify-between gap-4 max-w-6xl mx-auto mt-5 '>
        <Cards handleSelected={handleSelected}></Cards>
        <Carts cost={cost} selected={selected} budget={budget}></Carts>
        <ToastContainer/>
      </main>
      
    </div>
  )
}

export default App
