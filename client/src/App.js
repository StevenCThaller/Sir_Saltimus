import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import { Router } from '@reach/router';
import Schedule from './components/Schedule'

function App() {
  return (
    <div id="container">
      <Header/>
      <Router>
        <Schedule path="/schedule"/>
      </Router>
    </div>
  );
}

export default App;
