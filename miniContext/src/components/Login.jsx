import React,{useContext,useState} from 'react'
import UserContextProvider from '../context/userContextProvider'
import userContext from '../context/UserContextCreate'
export default function () {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(userContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div>
          <h2>Login</h2>
          <input type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)
              }
              
              placeholder='username'
             />
          <input type="text" placeholder='password' />
          <button
          onClick={handleSubmit}>Submit</button>
      </div>
  )
}
