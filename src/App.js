import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Stocks from './Pages/Stocks'
import Dashboard from './Pages/Dashboard'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
  
<Nav/>
      <Routes>
        <Route path='/' element={<Dashboard />}/> 
        <Route path='/about' element={<About />}/> 
        <Route path='/stocks' element={<Dashboard />}/> 
        <Route path='/stocks/:symbol' element={<Stocks />}/> 
        <Route path='/dashboard' element={<Dashboard />}/> 

      </Routes>
   
 
    </div>
  );
}

export default App;
