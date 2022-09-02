import "../../Pages/page.css"

import React from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector"
import Todo from "./Todo"
import InProgress from "./InProgress"
import Completed from "./Completed"

const Content = () => {
 
     const { todoArr, inprogressArr, completedArr} = useSelector(state=>state.reducer2)

  return (
    <>
     <div className="content">
        <Todo todoArr={todoArr} />
        <InProgress inprogressArr={inprogressArr} />
        <Completed completedArr={completedArr} />
      </div>

      
      
    </>
  )
}

export default Content
