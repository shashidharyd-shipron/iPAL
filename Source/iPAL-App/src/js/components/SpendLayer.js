import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DateTime from 'grommet/components/DateTime';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Select from 'grommet/components/Select';

export default class SpendLayer extends Component {
  render () {
  	return (
  	  <Layer align='right' closer={true} onClose={this.props.onClose}>
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
          <Box pad="medium">
            <Button label='Add'
              onClick={this.props.onClose}
              primary={true} />
          </Box>
        </Form>
      </Layer>
  );
  }
};
