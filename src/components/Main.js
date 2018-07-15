require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tables from './Tables';
import SignIn from './SignIn'

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <img src="images/relayr_small_logo.png"></img>
          <p>DEPLOYER</p>
          <div id="btn">
            <SignIn/>
          </div>
        </div>
        <div id="main">
          <div className="container">
            <div className="belt"></div>
            <div id="app">
              <Tables/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MainComponent.defaultProps = {
};
export default MainComponent;
//ngrok http 8080 -host-header="localhost:8080"
