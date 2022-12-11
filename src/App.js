import './App.css';
import About from './components/aboutus/About';
import Headern from './components/header/Headern';
import Navbar from './components/navbar/Navbar';
import Travel from './components/travel/Travel';
 // testing contact us page 
 import Contact  from './components/contact/Contact';
function App() {
  return ( 
    
    <div className="App">
        
        <Contact/>
        

     <Navbar/>
     <Headern/>
     <Travel/>
     <About/>
    </div>
  );
}

export default App;
