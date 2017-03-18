import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

export default class SpendData extends Component {
  render () {
    return (
        <tbody>
          <TableRow>
            <td>
              01/03/2017
            </td>
            <td>
              Rent
            </td>
            <td className='amount'>
              15000
            </td>
            <td className='notes'>
              Rent not hiked since the last 2 years. Might do next month.
            </td>
          </TableRow>
          <TableRow>
            <td>
              01/03/2017
            </td>
            <td>
              Home Needs
            </td>
            <td className='amount'>
              1200
            </td>
            <td className='notes'>
              Milk 40 + Idlys for breakfast 60 + Groceries 1100
            </td>
          </TableRow>
          <TableRow>
            <td>
              01/03/2017
            </td>
            <td>
              Vehicle & Fuel
            </td>
            <td className='amount'>
              427
            </td>
            <td className='notes'>
              Put petrol or Hayabusa @ 13559 KMs. Full tank.
            </td>
          </TableRow>
          <TableRow>
            <td>
              01/03/2017
            </td>
            <td>
              Miscellaneous
            </td>
            <td className='amount'>
              4000
            </td>
            <td className='notes'>
              Took entire team for lunch party.
            </td>
        </TableRow>
      </tbody>
    );
  }
};
