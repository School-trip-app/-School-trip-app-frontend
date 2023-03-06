import './App.css';
import About from './pages/About/aboutus/About';
import Headern from './components/header/Headern';
import Travel from './components/travel/Travel';
import JoPics from './components/jorPics/JoPics';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SpecialTrips from './components/specialTrips/SpecialTrips';
function App() {
  return (
    <div >
      <Navbar />
      <Headern />
      <Travel />
      <About />
      <SpecialTrips/>
      <JoPics />
      <Footer/>
    </div>
  );
}

export default App;
