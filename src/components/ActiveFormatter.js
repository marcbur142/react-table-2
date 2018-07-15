require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SweetAlert from 'sweetalert-react';
import axios from 'axios';
import 'sweetalert/dist/sweetalert.css';

let tokenStr = 'UUU';
var postData = {
  email: "test@test.com",
  password: "password"
};

class ActiveFormatter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  check(){
    if(gapi.auth2.init().isSignedIn.get()==false){
      this.setState({ show: true })
    }
    else{
      axios.post(`https://api.github.com/repos/marcbur142/react-table-2/hooks/UUU/pings`, JSON.stringify(postData), { headers: {"Authorization" : `Bearer ${tokenStr}`}})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(err =>{
          console.log(err);
        })
      }
  }
  render() {
    return (
      <div>
        <input type='button' value="O" onClick={() => this.check()}/>
        <SweetAlert
        custom
        show={this.state.show}
        title="Authorization"
        html
        text="You need to confirm your ID. Please Sign In."
        confirmButtonText = "OK"
        onConfirm={()=> this.setState({ show: false })}
        />
      </div>
    );
  }
}
ActiveFormatter.defaultProps = {
};
export default ActiveFormatter;
