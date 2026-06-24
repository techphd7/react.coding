import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [count,setCount] =useState(0)

   //let count=15;
   
  const increase=()=>{
    if(count<20){
   
  //use arroe function to increase by any time because setcount send it in batches
   setCount(prevCounter=>prevCounter+1)
   setCount(prevCounter=>prevCounter+1)
   setCount(prevCounter=>prevCounter+1)
 
   
  
    }else{
      alert("count is not increase after 20")
    }
   
  }

  const decrease=()=>{
    if(count>0){   
       count=count-1
    }else{
      alert("count can not be negative")
    }
    console.log("count :",count);
    setCount(count)
  }


  return (
    <div >
      <h1>PH learner</h1>
    <h2>Counter Value :{count}</h2>
    <button onClick={increase}>Increase</button>
    <br />
    <button onClick={decrease}>Decrease</button>
    </div>
    
    
  )
}

export default App
