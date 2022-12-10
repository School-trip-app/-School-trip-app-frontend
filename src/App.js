import './App.css';
import Headern from './components/header/Headern';
import Navbar from './components/navbar/Navbar';
import Travel from './components/travel/Travel';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Headern/>
     <Travel/>
    </div>
  );
}

export default App;
