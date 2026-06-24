import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}></div>
    
      <div className=' ml-90 mr-90 rounded-2xl fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-2 bg-white'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={()=>setColor("red")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"red"}}>Red</button>
              <button onClick={()=>setColor("blue")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"blue"}}>Blue</button>
              <button onClick={()=>setColor("green")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"green"}}>Green</button>
              <button onClick={()=>setColor("yellow")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"yellow"}}>Yellow</button>
              <button onClick={()=>setColor("purple")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"purple"}}>Purple</button>
              <button onClick={()=>setColor("pink")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"pink"}}>Pink</button>
              <button onClick={()=>setColor("orange")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"orange"}}>Orange</button>
              <button onClick={()=>setColor("cyan")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"cyan"}}>Cyan</button>
              <button onClick={()=>setColor("black")}  className='outline-none px-4 rounded-2xl' style={{backgroundColor:"black", color:"white"}}>Black</button>
          </div>
      </div>
    
    </>
  )
}

export default App;
