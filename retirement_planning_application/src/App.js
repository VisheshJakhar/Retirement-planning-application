import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Summary from './components/Summary';
import Errror from './components/Errror';
import {Routes, Route} from "react-router-dom"
import Survey from './components/Survey';
function App() {
  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/summary' element={<Summary/>}/>
      <Route path='/survey' element={<Survey/>}/>
      <Route path='*' element={<Errror />} />
    </Routes> 
    </>
  );
}

export default App;
