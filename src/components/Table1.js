require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ActiveFormatter from './ActiveFormatter';
import SignIn from './SignIn';

//------------------------------------MAIN-COMPONENT-------------------------------------------------------
class AppComponent1 extends React.Component {
  constructor() {
    super();
    this.state = {
      actions: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/posts`)
      .then(res => {
        const actions = res.data;
        this.setState({ actions });
      })
  }
  //----------------------------------------------TOOLBAR--------------------------------------------------
  createCustomToolBar = props => {
    return (
      <div>
        { props.components.btnGroup }
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          { props.components.searchPanel }
        </div>
      </div>
    );
  }
  activeFormatter() {
    return (
      <ActiveFormatter/>
    );
  }
  render() {
    const options = {
      toolBar: this.createCustomToolBar
    };
    return (
    <BootstrapTable data={this.state.actions} containerClass='table1-container' options={options} striped={true} hover={true} search={true} searchPlaceholder='Search in table'>
      <TableHeaderColumn width='80'dataField="id" dataSort={true} isKey={true} dataAlign="center">NAME</TableHeaderColumn>
      <TableHeaderColumn width='70'dataField="branch" dataSort={true} dataAlign="center">BRANCH</TableHeaderColumn>
      <TableHeaderColumn width='70'dataField="price" dataSort={true} dataAlign="center">STAGE</TableHeaderColumn>
      <TableHeaderColumn width='350'dataField="url" dataSort={true} dataAlign="left" headerAlign='center'>URL</TableHeaderColumn>
      <TableHeaderColumn width='67'dataField="activ" dataSort={true} dataAlign="center">ACTIVE</TableHeaderColumn>
      <TableHeaderColumn width='40'dataField='active' dataFormat={ this.activeFormatter } dataSort={false} dataAlign="center">TRIGGER</TableHeaderColumn>
    </BootstrapTable>
    );
  }
}
AppComponent1.defaultProps = {
};
export default AppComponent1;
