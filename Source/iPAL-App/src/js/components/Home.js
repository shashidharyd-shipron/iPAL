import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DateTime from 'grommet/components/DateTime';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Select from 'grommet/components/Select';

import SpendTable from './SpendTable';

export default class Home extends Component {
  constructor () {
    super();
    this._onRequestForAddTask = this._onRequestForAddTask.bind(this);
    this._addTaskCancel = this._addTaskCancel.bind(this);

    this.state = {
      tasks: [ ],
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
      addTaskLayer = (
      <Layer align='right' closer={true} onClose={this._addTaskCancel}>
        <Header pad={{ horizontal: 'none' }} margin={{ top: 'large' }}>
          <h3>
            Spend Details
          </h3>
        </Header>
        <Form>
          <FormField label="Date" htmlFor="labelId">
            <DateTime id='id' name='name' format='M/D/YYYY' />
          </FormField>
          <FormField label="Category" htmlFor="labelId">
            <Select placeHolder='None'
              options={['Rent', 'Vehicle Care', 'Home Needs', 'Health Care', 'Miscellaneous']}/>
          </FormField>
          <FormField label="Amount" htmlFor="labelId">
            <input type="text" name='Date' id='labelId' />
          </FormField>
          <FormField label="Notes" htmlFor="labelId">
            <input type="text" name='Date' id='labelId' />
          </FormField>
        </Form>
      </Layer>
      );
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
