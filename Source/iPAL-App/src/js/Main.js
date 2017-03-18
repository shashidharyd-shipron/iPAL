import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import ExpensesHome from './components/ExpensesHome';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';


export default class Main extends Component {
  render () {
    return (
      <App centered={false}>
        <Box full={true}>
          <Header direction="row" justify="between"
            pad={{horizontal: 'medium'}}>
            <Title>iPAL Spend Analyzer</Title>
          </Header>
          <ExpensesHome />
          <Footer primary={true} appCentered={true} direction="column"
            align="center" pad="small" colorIndex="grey-1">
            <p>
              Build your ideas with <Anchor href="http://grommet.io"
              target="_blank">Grommet</Anchor>!
            </p>
          </Footer>
        </Box>
      </App>
    );
  }
};
