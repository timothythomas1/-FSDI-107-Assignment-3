import React from 'react'
import QuantityPicker from './QuantityPicker'
import './Product.css'

const Product = (props) => { //This brings all of the properties input into the parent component
console.log(props.data.image)
  return (
    <div className="product-container">

        <a href={props.data.link} className="product-heading">
        <img className="product-img" src={"images/" + props.data.image} alt="A Product" />
          <h5 className="product-heading">{props.data.title}</h5>
        </a>
        <p>${props.data.price.toFixed(2)}</p>
        <QuantityPicker />
        <div className="d-grid gap-2 col-6 mx-auto">
          <button id='addCart' className="btn btn-warning" type="button">Add to cart</button>
        </div>
    </div>
  )
}

export default Product