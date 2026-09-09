import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  	return (
    	<BrowserRouter>
      	<h1>My React Application</h1>
<nav>
        	<Link to="/">Home</Link>
        	<br/>
        	<Link to="/about">About</Link>
        	<br/>
        	<Link to="/contact">Contact</Link>
      	</nav>
<hr />
<Routes>
        	<Route path="/" element={<Home />} />
        	<Route path="/about" element={<About />} />
        	<Route path="/contact" element={<Contact />} />
      	</Routes>
    	</BrowserRouter>
  	);
}
export default App;

