import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} style={{height:"100px", width:"70%", display:"block", marginLeft:"auto", marginRight:"auto"}} alt='' />
              </div>
              {/* <h4>{val.name}</h4> */}
              {/* <span>${val.price}</span> */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
