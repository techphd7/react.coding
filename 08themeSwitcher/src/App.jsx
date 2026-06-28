import { useState } from 'react'
import { useEffect } from 'react'


import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  //actual change in theme 

  useEffect (()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
    
      },[themeMode])


      
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center justify-center
bg-white dark:bg-gray-900
text-black dark:text-white
transition-colors duration-300">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                
                
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
    

)
}

export default App
