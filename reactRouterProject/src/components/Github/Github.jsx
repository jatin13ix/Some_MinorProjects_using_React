import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/jatin13ix')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    
    return (
        <>
            <div className='bg-gray-500 text-3xl'>Github Followers of {data.login}: { data.followers } <br /> Github Follwing: {data.following}
               <img src={data.avatar_url} width={250} alt="" />
            </div>
           
        </>
    
  )
}

export default Github