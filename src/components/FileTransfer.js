import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSendFiles, fetchReceiveFiles } from './../actions/index'
import { Glyphicon, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { columnsSent, columnsReceived, sendKey, receiveKey, sentDefaultSorted, receiveDefaultSorted } from './../utils/config';
import BootstrapTable from 'react-bootstrap-table-next';


export class FileTransfer extends Component {
  state = {
    displayedList: [], currentState: sendKey
  }

  componentWillMount() {
    this.props.fetchSendFiles();
    this.props.fetchReceiveFiles();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.displayedList !== nextProps.sendFiles || this.state.displayedList !== nextProps.receiveFiles) {
      if (this.state.currentState === sendKey) {
        this.setState({ displayedList: this.props.sendFiles })
      } else if (this.state.currentState === receiveKey) {
        this.setState({ displayedList: this.props.receiveFiles })
      }
    }
  }

  componentDidMount() {
    this.handleChange(this.state.currentState);
  }

  handleChange(value) {
    if (value === sendKey) {
      this.setState({ currentState: sendKey });
      this.props.fetchSendFiles();
    } else if (value === receiveKey) {
      this.setState({ currentState: receiveKey });
      this.props.fetchReceiveFiles();
    }
  }

  render() {
    return (<div>
      <div>
        <DropdownButton
          title={this.state.currentState === sendKey ? "Sent Files" : "Received Files"}
          bsStyle="danger"
          style={{ width: '130px', height: '40px' }}
        >
          <MenuItem onClick={this.handleChange.bind(this, sendKey)}>Sent Files</MenuItem>
          <MenuItem onClick={this.handleChange.bind(this, receiveKey)}>Received Files</MenuItem>
        </DropdownButton>
        <Button onClick={this.handleChange.bind(this, this.state.currentState)}>
          <Glyphicon glyph="refresh" />
        </Button>
      </div>
      <div style={{ width: '65%' }}>
        <BootstrapTable
          keyField="timeSent"
          data={this.state.displayedList}
          columns={this.state.currentState === sendKey ? columnsSent : columnsReceived}
          defaultSorted={this.state.currentState === sendKey ? sentDefaultSorted : receiveDefaultSorted}
          striped
          hover
          condensed
        />
      </div>
    </div>
    )
  }
}

function mapStateToProps({ sendFiles, receiveFiles }) {
  return {
    sendFiles,
    receiveFiles
  }
}

export default connect(mapStateToProps, { fetchSendFiles, fetchReceiveFiles })(FileTransfer)
