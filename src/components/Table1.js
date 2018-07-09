require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import SweetAlert from 'sweetalert-react'; // eslint-disable-line import/no-extraneous-dependencies
import 'sweetalert/dist/sweetalert.css';

var products = [{
  id: "mail",
  branch: "asp",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: true,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  activ: false,
  trigger: "hook"
}];

//------------------------------AXIOS-RestAPI-GET------------------------------------------
class PersonList extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
function personList() {
  return (
    <PersonList/>
  );
}
//--------------------------------TRIGGER-COLUMN------------------------------------------
class ActiveFormatter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false
        };
      }
// function to authorization
    checked(){
      this.setState({ show: false }),
      this.props.active;
    }
    render() {
      return (
        <div>
        <input type='button' value="O" onClick={() => this.setState({ show: true })}/>
        <SweetAlert
        show={this.state.show}
        title="Authorization"
        text="Confirm your identity"
        showCancelButton
        onConfirm={() => this.checked()} // sign in google
        onCancel={()=> this.setState({ show: false })}
        />
        </div>
      );
    }
  }
  function activeFormatter() {
    return (
      <ActiveFormatter/>
    );
  }

//------------------------------------MAIN-COMPONENT-------------------------------------------------------
class AppComponent1 extends React.Component {
  render() {
    return (
    <BootstrapTable data={products} striped={true} hover={true} search={false}>
      <TableHeaderColumn width='80'dataField="id" dataSort={true} isKey={true} dataAlign="center">NAME</TableHeaderColumn>
      <TableHeaderColumn width='70'dataField="branch" dataSort={true} dataAlign="center">BRANCH</TableHeaderColumn>
      <TableHeaderColumn width='70'dataField="price" dataSort={true} dataAlign="center">STAGE</TableHeaderColumn>
      <TableHeaderColumn width='350'dataField="url" dataSort={true} dataAlign="center">URL</TableHeaderColumn>
      <TableHeaderColumn width='67'dataField="activ" dataSort={true} dataAlign="center">ACTIVE</TableHeaderColumn>
      <TableHeaderColumn width='40'dataField='active' dataFormat={ activeFormatter } dataSort={false} dataAlign="center">TRIGGER</TableHeaderColumn>
    </BootstrapTable>
    );
  }
}
AppComponent1.defaultProps = {
};

export default AppComponent1;
