import './index.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from './components/Home/Home';


//import Carrusel from './components/Carrusel/Carrusel';
//<Carrusel />

function App() {
  return (
    <div className='app' >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
