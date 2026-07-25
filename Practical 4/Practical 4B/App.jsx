import Header from "./components/Header";
import HotelCard from "./components/HotelCard"
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <HotelCard 
      restaurant = "Urban Pizza"
      food = "Simply Cheese Pizza"
      price = {199}
      discount = {20}
      rating = {4.5}
      />

      <HotelCard 
      restaurant = "Barbeque Nation"
      food = "Unlimited Buffet"
      price = {700}
      discount = {20}
      rating = {4.5}
      />

      <HotelCard 
      restaurant = "Mao Restaurant"
      food = "Triple Schezwan Fried Rice"
      price = {450}
      discount = {20}
      rating = {4.5}
      />
      <Footer />
    </div>
  );
}
export default App;
