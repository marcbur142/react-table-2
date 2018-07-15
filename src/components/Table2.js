require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class AppComponent2 extends React.Component {
  state = {
    hooks: []
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/webhooks`)
      .then(res => {
        const hooks = res.data;
        this.setState({ hooks });
        this.props.hooks
      })
  }
    //------------------------------------------ACTIVE-LINK------------------------------------------------
  urlFormatter(cell, row) {
    return `<a class="activelink" href=${cell}>${cell}</a>`;
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
  render() {
    const options = {
      toolBar: this.createCustomToolBar
    };
    return (
      <BootstrapTable data={this.state.hooks} options={options} striped={true} hover={true} containerClass='table2-container' search={true} searchPlaceholder='Search in table'>
        <TableHeaderColumn width='100' dataField="id" dataSort={true} isKey={true} dataAlign="center">HOOK PATH</TableHeaderColumn>
        <TableHeaderColumn width='260' dataField="url" dataSort={true} dataFormat={ this.urlFormatter } dataAlign="center" >SETUP URL</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
AppComponent2.defaultProps = {
};
export default AppComponent2;
