import React, { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)
  
  function hanldeClick() {
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "white"
  return(
    <button onClick={hanldeClick} style={{ background : color}}> {isOn ? "ON" : "OFF"}</button>
  )
}

export default Toggle