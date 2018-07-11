require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
<<<<<<< HEAD
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import Table1 from './Table1';
import Table2 from './Table2';


class AppComponent extends React.Component {
  render() {
    return (
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Webhooks">
        <Table1/>
      </Tab>
      <Tab eventKey={2} title="Paths">
        <Table2/>
      </Tab>
    </Tabs>
    );
  }
}
AppComponent.defaultProps = {
};

export default AppComponent;
=======
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

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
},{
  id: "dephook",
  branch: "dep",
  price: 100,
  url: "http://builds.proximetry.com:10005/notifications/mail",
  active: false,
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
<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Topology">
    <BootstrapTable data={products} striped={true} hover={true}>
      <TableHeaderColumn width='10%' dataField="id" dataSort={true} isKey={true} dataAlign="center">NAME</TableHeaderColumn>
      <TableHeaderColumn width='12%'dataField="branch" dataSort={true} dataAlign="center">BRANCH</TableHeaderColumn>
      <TableHeaderColumn width='12%'dataField="price" dataSort={true} dataAlign="center">COMPANY</TableHeaderColumn>
      <TableHeaderColumn width='45%'dataField="url" dataSort={true} dataAlign="center">URL</TableHeaderColumn>
      <TableHeaderColumn width='10%'dataField="active" dataSort={true} dataAlign="center">ACTIVE</TableHeaderColumn>
      <TableHeaderColumn width='13%'dataField="trigger" dataSort={true} dataAlign="center">TRIGGER</TableHeaderColumn>
    </BootstrapTable>
  </Tab>
  <Tab eventKey={2} title="Deployment">
    <BootstrapTable data={products} striped={true} hover={true}>
      <TableHeaderColumn width='10%' dataField="id" dataSort={true} isKey={true} dataAlign="center">NAME</TableHeaderColumn>
      <TableHeaderColumn width='12%'dataField="branch" dataSort={true} dataAlign="center">BRANCH</TableHeaderColumn>
    </BootstrapTable>
  </Tab>
</Tabs>
    );
  }
}

AppComponent1.defaultProps = {
};

export default AppComponent1;
>>>>>>> 97b92824d14bc2c50d4ce8816befaa249b82cfc5
