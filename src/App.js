import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Services/>
    <Works/>
    <Contact/>
    </div>
  );
}

export default App;
