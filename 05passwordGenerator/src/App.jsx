import { useState,useRef,useCallback,useEffect } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [addNumber,setAddNumber]=useState(false)
  const[addCharacters,setAddCharacters]=useState(false)
  const[password,setPassword]=useState()

  //useRef hook
  const passwordRef=useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password)
  },[password])

const passwordGenerator=useCallback(()=>{
let pass=""
let str ="ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"
if(addNumber){
  str +="0123456789"
}
if(addCharacters){
  str +="!@#$%^&*"
}

for (let i = 0; i <= length; i++) {
  let char=Math.floor(Math.random()*str.length+1)
  pass +=str.charAt(char)
}
setPassword(pass)


},[length,addNumber,addCharacters,setPassword])

useEffect(()=>{passwordGenerator()},[length,addNumber,addCharacters,passwordGenerator])

  return (
 <>
 
 <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8  bg-gray-800 text-orange-500'>
  <h5 className='text-white-500  text-2xl text-center my-3  '>Password Generator</h5>
  <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
    <input 
    type="text"
     value={password} 
     className=' outline-none w-full py-1 px-3 bg-yellow-100'
      placeholder='password'
       readOnly
       ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex item-center gap-x-1'>
      <input
       type="range"
       min={6}
       max={100}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{setLength(e.target.value)}}
      />
      <label htmlFor="">length:{length}</label>
    </div>
    <div className='flex item-center gap-x-1'>
      <input
       type="checkbox"
        defaultChecked={addNumber}
        id='numberInput'
       onChange={(e)=>{setAddNumber((prev=>!prev))}}
      />
      <label >Number</label>
      </div>
    <div className='flex item-center gap-x-1'>
      <input
       type="checkbox"
        defaultChecked={addCharacters}
        id='numberInput'
       onChange={(e)=>{setAddCharacters((prev=>!prev))}}
      />
      <label >Characters</label>
    </div>
    
    </div>
 </div>
 </>
  )
}

export default App
