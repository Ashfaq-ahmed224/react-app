
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Poems from './components/Poems';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <>
      <Header />
      
  
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/quotes' element={<Quotes />} />
        <Route exact path='/poems' element={<Poems />} />
      </Routes>
      

    
    
      </>
     
  );
}

export default App;
