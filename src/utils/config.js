
export const columnsSent = [{
  text: 'File Name', dataField: 'fileName', sort: 'true'
}, {
  text: 'Source', dataField: 'originSource', sort: 'true'
}, {
  text: 'Destination', dataField: 'originDestination', width: 100, sort: 'true'
}, {
  text: 'Time Sent', dataField: 'timeSent', width: 165, sort: 'true'
}];


export const columnsReceived = [{
  text: 'File Name', dataField: 'fileName', key: 'fileName', width: 150, sort: 'true'
}, {
  text: 'Source', dataField: 'originSource', key: 'source', width: 100, sort: 'true'
}, {
  text: 'Destination', dataField: 'originDestination', key: 'destination', width: 100, sort: 'true'
}, {
  text: 'Time Received', dataField: 'timeReceived', key: 'timeReceived', width: 165, sort: 'true'
}];

export const columnsFetch = [{
  text: 'File Name', dataField: 'fileName', key: 'fileName', width: 100, sort: 'true'
}, {
  text: 'Source', dataField: 'originSource', key: 'source', width: 100, sort: 'true'
}, {
  text: 'Destination', dataField: 'originDestination', key: 'destination', width: 100, sort: 'true'
}, {
  text: 'Time Initiated By Source', dataField: 'timeInitiated', key: 'timeInitiated', width: 165, sort: 'true'
}, {
  text: 'Time Received By Server', dataField: 'timeReceived', key: 'timeReceived', width: 165, sort: 'true'
}, {
  text: 'Time Sent By Server', dataField: 'timeSent', key: 'timeSent', width: 165, sort: 'true'
}, {
  text: 'Time Received By Destination', dataField: 'ackReceivedTime', key: 'ackReceivedTime', width: 165, sort: 'true'
}];

export const sentDefaultSorted = [{ dataField: 'timeSent', order: 'desc' }]
export const receiveDefaultSorted = [{ dataField: 'timeReceived', order: 'asc' }]
export const fetchDefaultSorted = [{ dataField: 'ackReceivedTime', order: 'desc' }]

export const sendKey = 'send';
export const receiveKey = 'receive';