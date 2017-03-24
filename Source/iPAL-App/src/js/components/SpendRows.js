import React, { Component } from 'react';
import TableRow from 'grommet/components/TableRow';

export const Data=[
  {category: "Rent", amount: "49.99", note: "Paid"},
  {category: "Vehicle Care", amount: "9.99", note: "Petrol filled"},
  {category: "Home Needs", amount: "29.99",  note: "From BigBasket"},
  {category: "Health Care", amount: "99.99",  note: "Lab expenses"},
  {category: "Home Needs", amount: "399.99",  note: "Groceries and veggies"},
  {category: "Miscellaneous", amount: "199.99",  note: "Funds transfer done."},
];

export default class SpendRows extends Component {
  render () {
    return (
    	<tbody>
        {Data.map((data, i) => 
          <tr key={i}>
            <td>
              {data.category}
            </td>
            <td>
              {data.amount}
            </td>
            <td className='secondary'>
              {data.note}
            </td>
          </tr>
          )
        }
      </tbody>
    );
  }
};
