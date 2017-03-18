import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Status from 'grommet/components/icons/Status';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import SpendData from './SpendData';




export default class ExpensesHome extends Component {

  render () {
    return (
      <Box primary={true} flex={true} direction='row'>
        <Box pad='medium'>
          <Heading tag='h3'>My Spending</Heading>

      <Table selectable={true}>
        <thead>
          <tr>
            <th>
              Date
            </th>
            <th>
              Category
            </th>
            <th>
              Amount
            </th>
            <th>
              Notes
            </th>
          </tr>
        </thead>
        <SpendData />          
      </Table>
        </Box>
      </Box>
    );
  }
};
