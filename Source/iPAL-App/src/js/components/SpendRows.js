import React, { Component } from 'react';

export const Data=[
          {category: "Rent", amount: "15000.00", date: "03/03/1017", note: "Paid"},
          {category: "Vehicle Care", amount: "3500.00", date: "03/03/1017", note: "Petrol filled"},
          {category: "Home Needs", amount: "1552.00", date: "03/03/1017", note: "From BigBasket"},
          {category: "Health Care", amount: "2100.00", date: "03/03/1017", note: "Lab expenses"},
          {category: "Home Needs", amount: "175.00",  date: "03/03/2017", note: "Groceries and veggies"},
          {category: "Miscellaneous", amount: "3000.00", date: "03/03/1017", note: "Funds transfer done."},
          {category: "Vehicle Care", amount: "247.00", date: "03/03/1017", note: "Fuel for car."}

];

export default class SpendRows extends Component {
  render () {
    return (
    	<tbody>
        {Data.map((data, i) => 
          <tr key={i}>
            <td>
              {data.date}
            </td>
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
