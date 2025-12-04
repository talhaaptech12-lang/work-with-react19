import React from 'react'

const Userinput = (props) => {
  return (
    <div>
        <input type="text" ref={props.refri} />
    </div>
  )
}

export default Userinput