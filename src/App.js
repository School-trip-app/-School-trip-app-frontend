import './App.css';
import About from './pages/About/aboutus/About';
import Headern from './components/header/Headern';
import Travel from './components/travel/Travel';
import Video from './components/videotour/Video';
import JoPics from './components/jorPics/JoPics';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SpecialTrips from './components/specialTrips/SpecialTrips';
import TripDetails from './components/tripsDetails/TripDetails';
function App() {
  return (
    <div >
      <TripDetails />
      <Navbar />
      <Headern />
      <Travel />
      <About />
      <SpecialTrips/>
      <Video />
      <JoPics />
      <Footer/>
    </div>
  );
}

export default App;
