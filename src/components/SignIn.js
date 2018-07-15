require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Popup extends React.Component{

  componentDidMount() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 76.5,
      'height': 30,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    });
  }
  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
  }
  render() {
    return (
      <div id="my-signin2" data-onsuccess={this.onSignIn}></div>
    );
  }
}
Popup.defaultProps = {
};
export default Popup;
