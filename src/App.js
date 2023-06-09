import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ClockLoader from 'react-spinners/ClockLoader';

function App() {
  const [ preLoader, setPreLoader ] = useState(false);
  const loaderStyle = {
    display: 'grid',
    placeItems: 'center',
    height: '100vh'
  }

  useEffect(()=>{
    setPreLoader(true);
    setTimeout(()=>{
      setPreLoader(false)
    }, 2000)
  },[]);

  return (
    preLoader ? <div style={loaderStyle}><ClockLoader size={40} /></div> :
    <div className='App'>
      <Header />
      <Products />
      <About />
      <Contact />
    </div>
  );
}

export default App;
