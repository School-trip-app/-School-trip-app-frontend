import './App.css';
import About from './components/aboutus/About';
import Headern from './components/header/Headern';
import Navbar from './components/navbar/Navbar';
import Travel from './components/travel/Travel';
import Video from './components/videotour/Video';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Headern/>
     <Travel/>
     <About/>
     <Video/>
     <Footer/>
    </div>
  );
}

export default App;
