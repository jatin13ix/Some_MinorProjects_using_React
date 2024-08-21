import React, { useContext } from 'react'
import userContext from '../context/UserContextCreate'
import UserContextProvider from '../context/userContextProvider'

function Profile() {
    const {user} = useContext(userContext)

    if (!user) return <div>please Login</div>
    
    return <div>Welcome { user.username}</div>
}

export default Profile