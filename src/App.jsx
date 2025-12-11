import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Star from './components/services/Params';
import Counter from './context/Counter';
import Login from './pages/login';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/star/:id" element={<Star />} />
        <Route path="/counter" element={<Counter />} />
       <Route path="/login" element={<Login />} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App
