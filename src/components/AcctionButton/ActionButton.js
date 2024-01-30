import React from 'react'

function ActionButton({action, handleClick}) {
  return (
    <button onClick={handleClick}>{action}</button>
  )
}

export default ActionButton;