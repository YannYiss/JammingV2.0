import React from 'react'

function Input({handleNameInput}) {
  return (
    <input onChange={handleNameInput} type='text' placeholder='Name you playlist here ✏️'/>
  )
}

export default Input