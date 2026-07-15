import Header from "./components/Header";
import Student from "./components/Student";
import Eligibility from "./components/Eligibility";
import PlacementStatus from "./components/PlacementStatus";
import CompanyOffer from "./components/CompanyOffer";
import SkillProgress from "./components/SkillProgress";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Student />
      <Eligibility />
      <PlacementStatus />
      <CompanyOffer />
      <SkillProgress />
      <Footer />
    </div>
  );
}

export default App;
