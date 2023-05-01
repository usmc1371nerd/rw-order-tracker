import React from 'react'

const OrderForm = ({username}) => {
  return (
    <div>
           
      <h1>Welcome {username} </h1>
      <a href="/"><button>Home</button></a>
    
    </div>
  )
}

export default OrderForm

// Order for needs to submit the order to 2 different emails
// 1 email is the standing order
// 2 email is the event/wedding orders
