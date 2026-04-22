
import React from 'react'

function Button(props) {
  return (
    <button style ={{background:"skyblue", padding : "10px 20px", textAlign: "center"}}>{props.value}</button>
  )
}

export default Button
