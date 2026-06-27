import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from'./hooks/useCurrencyInfo'


function App() {


  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
 const options= Object.keys(currencyInfo);

 const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }

 return (
  <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/11182439/pexels-photo-11182439.jpeg')`,
    }}
    
  >
    <div className='navbar '> <nav className=" shadow-md fixed top-0 left-0 w-full bg-blue-700   backdrop-blur-md px-8 py-3 flex items-center justify-between z-50 h-15">
  {/* Left Side */}
 
<div  >
  <img 
  src="photo/logo.png" 
  alt="logo" 
  className='absolute top-0 w-30 h-30 p-5'/>
  </div>
  <div className='text-4xl flex items-center-safe text-white ml-35'><h1> Currency Convertor</h1></div>

  
  {/* Right Side */}
  <ul className="flex gap-6">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav></div>
   
    <div className="w-full">
      <div
        className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
               label="From"
               amount={amount}
               currencyOptions={options}
               onCurrencyChange={(currency)=>setFrom(currency)}
               selectCurrency={from}
               onAmountChange={(amount)=>setAmount(amount)}/>
            </div>
            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute left-1/2
              -translate-x-1/2
              -translate-y-1/2 border-2
              border-white rounded-md
              bg-blue-600 text-white px-2 py-0.5 '
              onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
               label="To"
               amount={convertedAmount}
               currencyOptions={options}
               onCurrencyChange={(currency)=>setTo(currency)}
               selectCurrency={to}
               amountDisable
               />
            </div>
            <button type='submit'
            className='w-full bg-blue-600
            text-white px-4 py-3 rounded-lg'>
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>


            </form>
            </div>
          </div>
          </div>
          
  )
}

export default App
