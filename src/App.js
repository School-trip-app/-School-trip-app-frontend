import './App.css';
import About from './pages/About/aboutus/About';
import Headern from './components/header/Headern';
import Travel from './components/travel/Travel';
import Video from './components/videotour/Video';
function App() {
  return (
    <div >
      <Headern />
      <Travel />
      <About />
      <Video/>
    </div>
  );
}

export default App;
