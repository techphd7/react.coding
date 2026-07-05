import React,{ useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appWrite/auth.js'
import { login, logout } from './store/authSlice.js'
import { Footer, Header } from './components/index.js'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({ userData }));
    } else {
      dispatch(logout());
    }
  })
  .finally(() => {
    setLoading(false);
  } )
  },[])

  if (!loading) {
    return <div className='min-h-screen flex flex-wrap content -between bg-gray-900 items-center justify-center' 
     style={{backgroundImage: `url(https://images.pexels.com/photos/29708308/pexels-photo-29708308.jpeg)`}}
     >
      <div>
        <Header/>
        <main> outlet
          {/* outlet */}
        </main>
        <Footer/>
      </div>
     </div>
  }else{
    return (
      <div className='min-h-screen flex flex-wrap content -between bg-gray-900 items-center justify-center text-4xl text-white' style={{backgroundImage: `url(https://images.pexels.com/photos/29708308/pexels-photo-29708308.jpeg)`}}>
        <h1>Welcome to PH LEARNER ! <br/>
       <h4 className="text-xl">Please Login And Continue...</h4> </h1>
      </div>
    )
  }
}

export default App
