import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((data) =>{
       setProducts(data)
       console.log(products)
      
    })
},[]);

  return (
    <div className="">

    
    </div>
  );
}

export default App;
