import './index.css';
import Header from './components/Header';
import { Router } from '@reach/router';
import Schedule from './components/Schedule';
// import NowStreaming from './components/NowStreaming';
import l_i_z_a_r_d from './imgs/l_i_z_a_r_d.png';
import Profile from './components/Profile';
import { useState } from 'react';
import Home from './components/Home';
// import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';



function App() {
  const [isLive, setIsLive] = useState(true);
  const { user, isAuthenticated, isLoading } = useAuth0();

  

  if(isLoading){
    return <div>Loading ...</div>
  }

  return (
    <div id="container">
      <Header user={user} isAuthenticated={isAuthenticated}/>
      {/* {
        isLive ?
        <NowStreaming/>
        :
        ''
      } */}
      <Router>
        <Home isLive={ isLive } setIsLive={ setIsLive } path="/"/>
        <Schedule user={user} isAuthenticated={isAuthenticated} path="/schedule"/>
        <Profile path="/profile"/>
      </Router>
      <img id="l_i_z_a_r_d" src={l_i_z_a_r_d} alt="l i z a r d"/>
    </div>
  );
}

export default App;
