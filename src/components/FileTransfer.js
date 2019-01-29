import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSendFiles, fetchReceiveFiles } from './../actions/index'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { columnsSent, columnsReceived } from './../utils/config';
// import Table from 'react-table';
// import MaterialTable from 'material-table';
import BootstrapTable from 'react-bootstrap-table-next';

// import { Grid, GridColumn } from '@progress/kendo-react-grid';
// import { filterBy } from '@progress/kendo-data-query';
// import Table from 'rc-table';

export class FileTransfer extends Component {
  state = {
    displayedList: [], currentState: 'send'
  }


  componentWillMount() {
    this.props.fetchSendFiles();
    this.props.fetchReceiveFiles();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.displayedList !== nextProps.sendFiles || this.state.displayedList !== nextProps.receiveFiles) {
      if (this.state.currentState === 'send') {
        this.setState({ displayedList: this.props.sendFiles })
      } else if (this.state.currentState === 'receive') {
        this.setState({ displayedList: this.props.receiveFiles })
      }
    }
  }
  handleChange(value) {
    if (value === 'send') {
      this.setState({ currentState: 'send' });
      this.props.fetchSendFiles();
    } else if (value === 'receive') {
      this.setState({ currentState: 'receive' });
      this.props.fetchReceiveFiles();
    }
  }

  render() {
    return (<div>
      <DropdownButton
        title={this.state.currentState === 'send' ? "Sent Files" : "Received Files"}
        bsStyle="danger"
        style={{ width: '130px', height: '40px' }}
      >
        <MenuItem onClick={this.handleChange.bind(this, 'send')}>Sent Files</MenuItem>
        <MenuItem onClick={this.handleChange.bind(this, 'receive')}>Received Files</MenuItem>
      </DropdownButton>
      <div style={{ width: '65%' }}>
        <BootstrapTable
          keyField="timeSent"
          data={this.state.displayedList}
          columns={this.state.currentState === 'send' ? columnsSent : columnsReceived}
          striped
          hover
          condensed
        />
      </div>
    </div>
    )
  }
}

// <MaterialTable
//   columns={this.state.currentState === 'send' ? columnsSent : columnsReceived}
//   data={this.state.displayedList}
//   title={this.state.currentState === 'send' ? "Send Table" : "Received Table"}
// />

// <Table
//   data={this.state.displayedList}
//   columns={this.state.currentState === 'send' ? columnsSent : columnsReceived}
//   filterable
//   sortable
// />

function mapStateToProps({ sendFiles, receiveFiles }) {
  return {
    sendFiles,
    receiveFiles
  }
}

export default connect(mapStateToProps, { fetchSendFiles, fetchReceiveFiles })(FileTransfer)
