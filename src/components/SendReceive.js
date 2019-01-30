import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFiles } from './../actions/index'
import BootstrapTable from 'react-bootstrap-table-next';
import { Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { columnsSent, sentDefaultSorted, columnsFetch, fetchDefaultSorted } from '../utils/config';

export class SendReceive extends Component {

  componentWillMount() {
    this.props.fetchFiles();
  }

  render() {
    return (
      <div>
        <BootstrapTable
          keyField="timeSent"
          data={this.props.allFiles}
          columns={columnsFetch}
          defaultSorted={fetchDefaultSorted}
          striped
          hover
          condensed
        />
      </div>
    )
  }
}

function mapStateToProps({ allFiles }) {
  return {
    allFiles
  }
}


export default connect(mapStateToProps, { fetchFiles })(SendReceive)
