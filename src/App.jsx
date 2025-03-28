import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("black")
  return (
    <>
    <div id='container' style={{backgroundColor:color}}>
    <button className='white' onClick={()=> setColor("white")}>white</button>
    <button className='green' onClick={()=>setColor("green") }>Green</button>
    <button className='blue' onClick={()=>setColor("blue") }>Blue</button>
    <button className='yellow' onClick={()=>setColor("yellow") }>Yellow</button>
    <button className='magenta' onClick={()=>setColor("magenta") }>Magenta</button>
    <button className='purple' onClick={()=>setColor("purple") }>Purple</button>
    <button className='red' onClick={()=>setColor("red") }>Red</button>
    
      <button onClick={()=> setColor("black")}>Reset</button>
   
    </div>
   
   </>
  )
}

export default App
