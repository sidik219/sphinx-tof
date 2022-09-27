import React, {useEffect}  from 'react';
import Navbar from './components/Navbar';
import Sphinx from './components/Sphinx';
import About from './components/About';
import Request from './components/Request';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Firebase
import firebase, {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {getMessaging, getToken} from "firebase/messaging";

function App() {
  // Auth for login user with google
  // eslint-disable-next-line
  const [user] = useAuthState(auth);

  // Get notify
  useEffect(() => {
    const messaging = getMessaging(firebase);
      getToken(messaging, {
        vapidKey: 'BA2VaUIRGfMy2k0fSga_h11I9_9T_L60HOz2v83QZAx2rHf6hAk4yd-9YCW_ceZRIescMS09LyKeTURHc3HLNGE'
      }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
  }, [])

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
