import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <p>{val.desc}</p>
          <button className='price-button'><span>BUY $MDU</span></button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
