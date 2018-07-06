require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var products = [{
  id: "mail",
  branch: "asp",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  active: true,
  trigger: "hook"
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  active: false,
  trigger: "hook"
}];


class AppComponent1 extends React.Component {
  render() {
    return (
      <BootstrapTable data={products} striped={true} hover={true}>
        <TableHeaderColumn width='10%' dataField="id" dataSort={true} isKey={true} dataAlign="center">NAME</TableHeaderColumn>
        <TableHeaderColumn width='12%'dataField="branch" dataSort={true} dataAlign="center">BRANCH</TableHeaderColumn>
        <TableHeaderColumn width='12%'dataField="price" dataSort={true} dataAlign="center">COMPANY</TableHeaderColumn>
        <TableHeaderColumn width='45%'dataField="url" dataSort={true} dataAlign="center">URL</TableHeaderColumn>
        <TableHeaderColumn width='10%'dataField="active" dataSort={true} dataAlign="center">ACTIVE</TableHeaderColumn>
        <TableHeaderColumn width='13%'dataField="trigger" dataSort={true} dataAlign="center">TRIGGER</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

AppComponent1.defaultProps = {
};

export default AppComponent1;
