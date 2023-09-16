
import { useState } from 'react'
import './App.css'
import Cards from './Component/Cards/Cards'
import Carts from './Component/Carts/Carts'
import Header from './Component/Header/Header'

function App() {
 const [selected, setSelected] = useState([]);
 const [cost,setCost] = useState(0)
 const [budget,setBudget] = useState(20000)

const handleSelected = actor => {
  const selectedMem = selected.find(mem=> mem.id === actor.id)
  if(selectedMem){
    alert("Already Selected")
  }
  else{
    let cost = actor.salary;
    selected.forEach(mem =>{
      cost += mem.salary
    })
    const remainingBudget = 20000 - cost;
    if(remainingBudget < 0){
      alert("Ends Budget")
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
      </main>
    </div>
  )
}

export default App
