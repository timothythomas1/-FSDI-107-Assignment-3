import React from 'react'
import "./QuantityPicker.css"
import { useState } from 'react';

const QuantityPicker = () => {
  let [currentQnty,setCurrentQnty] = useState(1);

  const increase = () => {
      ++currentQnty;
      setCurrentQnty(currentQnty)
      console.log(`Added one item. your item count is now ${currentQnty}`)
      
  }

  const decrease = () => {
    if (currentQnty===1) {
        console.log(`Subtracted one item. your item count is now ${currentQnty}`)
      
    }
    else{
      --currentQnty;
        setCurrentQnty(currentQnty)
        console.log(`Subtracted one item. your item count is now ${currentQnty}`)
    }
  }

  return (
      <div className="qty-picker">
          <button className="qty-btn-neg" onClick={decrease}>
            <i className="fa-solid fa-minus"></i>
          </button >
          <div className="qty">{currentQnty}</div>
          <button className="qty-btn-neg" onClick={increase}>
                <i className="fa-solid fa-plus"></i>
        </button >
      </div>

  )
}

export default QuantityPicker