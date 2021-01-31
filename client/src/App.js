import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import { Router } from '@reach/router';
import Schedule from './components/Schedule';
import NowStreaming from './components/NowStreaming';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [isLive, setIsLive] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // const headers = {
    //   Client_ID: client_id
    // };

    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`)
      .then(response => setAccessToken(response.data.access_token))
      .then(() => {
        axios.get('')
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div id="container">
      <Header/>
      {
        isLive ?
        <NowStreaming/>
        :
        ''
      }
      <Router>
        <Home isLive={ isLive } setIsLive={ setIsLive } path="/"/>
        <Schedule path="/schedule"/>
      </Router>
    </div>
  );
}

export default App;
