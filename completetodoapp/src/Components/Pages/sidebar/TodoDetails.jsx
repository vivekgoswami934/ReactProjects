import "../page.css"
import React from 'react'

const TodoDetails = () => {
  return (
    <div className='todoDetails'>
      TodoDetails
       <br />
      <input type="checkbox"  />
      <label>      All</label>
      <br />
      <input type="checkbox"  />
      <label>Personal</label>
      <br />
      <input type="checkbox"  />
      <label>Official</label>
      <br />
      <input type="checkbox"  />
      <label>Others</label>
      <br />
    </div>
  )
}

export default TodoDetails
