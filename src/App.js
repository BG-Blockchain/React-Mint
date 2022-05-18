import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';


import MintPage from './components/MintPage';


class App extends Component {

render = () => {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact>
            <MintPage />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
