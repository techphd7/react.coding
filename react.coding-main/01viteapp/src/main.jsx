import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
 return( <div>
    <h1>Custom React...!</h1>
  </div>)
}


const AnotherElement=(
  <a href="https://google.com" target="_blank">click on Google</a>
)

const what="Search On";
const user=" Himanshu"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  what,
  ' Google',
  user
)



createRoot(document.getElementById('root')).render(

    // <>
    // <MyApp/>
    // <App/></>
     reactElement
     
  
)
