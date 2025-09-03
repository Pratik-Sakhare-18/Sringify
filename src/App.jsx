import React, { use, useEffect, useState } from 'react'
import './App.css'


const App = () => {

  const [msg, setMsg] = useState("Enter Your  Srtings");

  const [leftstr, setLeftstr] = useState("");
  const [rightstr, setRightstr] = useState("");

  const checkstring = () => {
    if (rightstr == leftstr) {
      setMsg("String Are Same");
    }
    else {
      setMsg("String Are Not Same");
    }
  }

  useEffect(() => {
    checkstring();
  }, [rightstr, leftstr])

  return (
   <>
      <h1>Stringify</h1>
      <div className='container'>

        <div>
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setLeftstr(e.target.value)}/>
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setRightstr(e.target.value)}/>
        </div>
        
        <p>{msg}</p>
      </div>
    </>
  )
}

export default App
