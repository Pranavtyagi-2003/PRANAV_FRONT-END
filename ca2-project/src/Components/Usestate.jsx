import React, { useEffect, useState } from 'react'

function Usestate() {
    const [data, setData] = useState(false)
    const change = () =>{
        setData(true)
    }
    useEffect(()=>{
        //api calll
    },[newdata])
  return (
    <div>
        <div>{
            data ? <h1>I am true</h1> : <h1>I am false</h1> 
            }</div>
        {/* <button onClick={change}>Change</button> */}
    </div>
  )
}

export default Usestate