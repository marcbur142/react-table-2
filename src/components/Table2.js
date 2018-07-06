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

class AppComponent2 extends React.Component {
  render() {
    return (
      <BootstrapTable data={products} striped={true} hover={true}>
        <TableHeaderColumn width='12%'dataField="price" dataSort={true} dataAlign="center">COMPANY</TableHeaderColumn>
        <TableHeaderColumn width='45%'dataField="url" dataSort={true}>URL</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

AppComponent2.defaultProps = {
};

export default AppComponent2;
