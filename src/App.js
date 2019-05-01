import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Components/Home';
import History from './Components/History';
import Error from './Components/Error';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
              <Navigation />
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/our-history" component={History} />
                      <Route path="/error" component={Error}/>
                    </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;