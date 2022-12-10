import './App.css';
import About from './components/aboutus/About';
import Headern from './components/header/Headern';
import Navbar from './components/navbar/Navbar';
import Travel from './components/travel/Travel';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Headern/>
     <Travel/>
     <About/>
    </div>
  );
}

export default App;
