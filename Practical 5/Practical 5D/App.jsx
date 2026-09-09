import axios from "axios";
import { useEffect , useState } from "react";
function App(){
  const[products , setProducts]=useState([]);
  useEffect(()=> {axios.get("https://dummyjson.com/products")
    .then((response)=>{
      setProducts(response.data.products);
    });
  },[]);
  return(
    <div>
      <h1>Products List</h1>
      <hr/>
      {products.map((product)=>
      <div key ={product.id}>
        <h2>{product.title}</h2>
        <p>Price: Rs.{product.price}</p>
      </div>
      )}
    </div>
  );
}
export default App;
