import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import SpendTable from './SpendTable';
import SpendLayer from './SpendLayer';

export default class Home extends Component {
  constructor () {
    super();
    this._onRequestForAddTask = this._onRequestForAddTask.bind(this);
    this._addTaskCancel = this._addTaskCancel.bind(this);

    this.state = {
      addTask: false
    };
  }
  _onRequestForAddTask  () {
    this.setState({ addTask: true});
  }
  
  _addTaskCancel  () {
    this.setState({ addTask: false});
  }

  render () {
    let addTaskLayer;
    if (this.state.addTask) {
      addTaskLayer = (<SpendLayer onClose={this._addTaskCancel}/>);
    }

    return (
      <Box primary={true} flex={true} direction="column">
        <Box direction="row">
          <Box pad="medium" />
          <Box pad="medium" />
          <Box justify="between">
            <Button label="Add Spend Details" onClick={this._onRequestForAddTask}
              primary={true}/>
          </Box>
        </Box>
        <Box pad='medium'>
          <SpendTable />
        </Box>
        {addTaskLayer}
      </Box>
    );
  }
};
