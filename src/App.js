// *CSS
import './App.css';

// *lib
import { Route, Routes } from 'react-router-dom';

// *component
import Home from './component/pages/home';
import Navbar from './component/navbar/index';
import About from './component/pages/about';
import Contact from './component/pages/contact';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </>
  );
}

export default App;
