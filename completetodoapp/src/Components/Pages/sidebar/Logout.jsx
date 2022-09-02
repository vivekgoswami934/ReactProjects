import React from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'


const Logout = () => {
  const {params} = useParams()
  console.log(params)
  return (
    <div>
      <Link to="/addnewTask">
      <button>AddNewTask</button>
      </Link>
      <br />
      <button>Logout</button>
    </div>
  )
}

export default Logout
