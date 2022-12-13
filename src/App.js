import './App.css';
import About from './pages/About/aboutus/About';
import Headern from './components/header/Headern';
import Travel from './components/travel/Travel';
import Video from './components/videotour/Video';
import Product from './pages/Products/Products';

function App() {
  return (
    <div >
      <Product />
      <Headern />
      <Travel />
      <About />
      <Video/>
    </div>
  );
}

export default App;
