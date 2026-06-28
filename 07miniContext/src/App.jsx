import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from '../component/Profile'
import Login from '../component/Login'


function App() {
  return (
<UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-blue-600">
            PH Learner
          </h1>

        

          <Login />

          <Profile />

        </div>
      </div>
    </UserContextProvider>
  )
}

export default App