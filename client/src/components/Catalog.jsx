import React from 'react'
import './Catalog.css'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import DataService from '../services/DataServices'

const Catalog = () => {
  const [products, setProduct] = useState([]);
  
  const loadData = () =>  {
	// This function loads a DataService class
    let service = new DataService(); // instance of the class
    let prods = service.getCatalog();
	setProduct(prods)
    // console.log(prods);
  }; 

  useEffect(() => {
      loadData();
  }, []); //Bracket is a dependency. When dependencies change, the function fires. With no dependencies, it means excecute the function when component loads.

  return (
    <div className="catalog">
        <div className="product-list">
          {products.map((prod) => <Product key={prod._id} data={prod}/>)}
        </div>
    </div>
  )
}

export default Catalog;