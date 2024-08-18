import { useEffect, useState } from 'react'
import Hide from './JS_Components/HideText' 
import Count from './JS_Components/counterAdvance'
import './App.css'
import Axios from "axios"
import axios from 'axios'

function App() {
const [fact, setFact] = useState("")

  const click = () => {
    // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => setFact(data.fact));

      axios.get("https://catfact.ninja/fact").then((response) => {
      setFact(response.data.fact)
      } 
 ) }
  useEffect(() => {
    click
   }) 
  return(
    <>
      <button
        onClick={click}
      >CatFact</button>
      <h1>{fact}</h1>
  </>



)}

export default App
