import React from 'react'

const Custominput = (props) => {
    const {type ,name ,placeholder ,classname,onChange }=props
  return (
    <div>
      <input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`form-control ${classname}`}
      />
    </div>
  )
}

export default Custominput
