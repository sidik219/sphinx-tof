import React from 'react'
import Navbar from './components/Navbar';
import Sphinx from './components/Sphinx';
import About from './components/About';
import Request from './components/Request';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Firebase
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div>
      <Navbar/>
      <Sphinx/>
      <About/>
      <Request/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
