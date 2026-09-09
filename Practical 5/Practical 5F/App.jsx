import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products));
  }, []);
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Products List</h1>
      <input
        placeholder="Search..."
        onChange={e => setSearch(e.target.value)}
      />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
