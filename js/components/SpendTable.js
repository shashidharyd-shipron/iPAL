import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import SpendRows from './SpendRows';

export default class SpendTable extends Component {

  render () {
    return (
      <Table>
		  <thead>
		    <TableRow>
		      <th>
		        Category
		      </th>
		      <th>
		        Amount
		      </th>
		      <th>
		        Note
		      </th>
		    </TableRow>
		  </thead>
		  <SpendRows />
		</Table>
    );
  }
};