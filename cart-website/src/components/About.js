import React from 'react'

const obj = [
    {name : "Vivek Goswami"},
    {"Contact No" : "No Need to know "},
    {email : "vivekgoswamidbng@gmail.com"},
]
   

const About = () => {
  return (
    <div>
     
        <h1> Name :-- { obj[0].name}</h1>

        <h1>Contact No :--{obj[1]['Contact No']}</h1>

        <h1> Email :--{obj[2].email}</h1>
    
    </div>
  )
}

export default About
