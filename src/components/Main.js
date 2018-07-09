require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
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
