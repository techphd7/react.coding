import { useState } from 'react'
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';


function App() {
  return (
   <div class='bg-red-600 w-full min-h-screen p-10'>
    <h1 className='bg-green-400 text-black-800 text-center p-10 rounded-xl  font-bold text-4xl'>
      Tailwind Working
    </h1>
<div className="flex justify-center ">
  <div className="grid grid-cols-5 gap-2">
    <Card1 wallpaper="changing image"  btn="AUr jano"/>
    <Card2 user="badlta Monkey"/>
    <Card1 wallpaper="new image"  btn="Find More"/>
    <Card2 user="monkey gif"  price="1000$"/>
     <Card1 wallpaper="beautiful wallpaper"  btn="Let's see"/>
    
  </div>
</div>
</div>
 
    
  )
}

export default App;


