import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
function App() {
   return (
       <BrowserRouter>
           <div>
               <nav>
                   <Link to="/">Dashboard</Link> |{" "}
                   <Link to="/statistics">Statistics</Link> |{" "}
                   <Link to="/jobs">Jobs</Link> |{" "}
                   <Link to="/profile">Profile</Link>
               </nav>
               <hr />
               <Routes>
                   <Route path="/" element={<Dashboard />} />
                   <Route path="/statistics" element={<Statistics />} />
                   <Route path="/jobs" element={<Jobs />} />
                   <Route path="/profile" element={<Profile />} />
               </Routes>
           </div>
       </BrowserRouter>
   );
}
export default App;
