import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import SpendRows from './SpendRows';
import SpendTable from './SpendTable';

export default class Home extends Component {

  render () {
    return (
      <Box primary={true} flex={true}>
        <Box pad='medium'>
          <SpendTable />
        </Box>
      </Box>
    );
  }
};
