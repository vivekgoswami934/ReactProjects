import "../page.css"
import React from 'react'
import SinglePage from "./SinglePage"

const InProgress = ({inprogressArr}) => {
  return (
    <div className="progress">
         <h3>InProgress</h3>

         {
          inprogressArr.map((elem)=>{
            return <SinglePage key ={elem.id} datas={elem} />
          })
         }
      
    </div>
  )
}

export default InProgress
