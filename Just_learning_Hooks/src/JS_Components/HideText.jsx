import { useState } from 'react'


function Hide() {

  const [hideText, setHideText] = useState(true)

  return(
  <>
      <button
      onClick={()=>setHideText(!hideText)}>Show/Hide</button>
      <div>
          <div>
          {hideText  && <h1>Click the Button to Show or Hide me</h1>}
          </div>
      </div>
  
  
  
  </>



)}

export default Hide
