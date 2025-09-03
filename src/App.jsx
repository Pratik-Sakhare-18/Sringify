import React, { use, useEffect, useState } from 'react'
import './App.css'


const App = () => {

  const [leftstr, setLeftstr] = useState("");
  const [rightstr, setRightstr] = useState("");

  const [msg, setMsg] = useState("Enter Your  Srtings");

  const checstring = () => {
    if (rightstr == leftstr) {
      setMsg("Sring Are Same");
    }
    else {
      setMsg("String Are Not Same");
    }
  }

  useEffect(() => {
    checstring();
  }, [leftstr, rightstr])

  return (
    <div>

      <h1>Stringify</h1>
      <div className='container'>

        <div>
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setLeftstr(e.target.value)} value={leftstr}/>
          <textarea name="" id="" cols="30" rows="10" onChange={(e) => setRightstr(e.target.value)} value={rightstr}/>
        </div>

        <p>{msg}</p>
      </div>
    </div>
  )
}

export default App
