// ./src/App.js
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Subscribe from './pages/Subscribe'
import ThankYou from './pages/ThankYou'
import ThirdPage from './pages/ThirdPage'
import PageShell from './components/PageShell'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={PageShell(Subscribe)}></Route>
        <Route path="/thanks" exact component={PageShell(ThankYou)}></Route>
        <Route path="/thirdpage" exact component={PageShell(ThirdPage)}></Route>
      </div>
    );
  }
}
export default App;
