import React, { useState, useEffect } from 'react';
import ModuleWrap from '../../../Components/ModuleWrap';
import TableList from '../../../Components/TableList';
import { IconText } from '../../../Components/TableList/CellUtils';

import { Payment, CalendarToday, AttachMoney } from '@material-ui/icons';

const tableColumnsData = [
  { title: 'Date' },
  { title: 'Payment', width: '130px' }
];

const customerPaymentMock = [
  { amount: 134.67, date: '12/12/2019' },
  { amount: 2930, date: '15/12/2019' },
  { total: 3064.67 }
];

const PaymentSummary = ({ customer }) => {
  const [summary, setSummary] = useState([]);

  const createTableData = payment => {
    const { date, amount, total } = payment;
    if (total) {
      return [
        {
          text: ''
        },
        {
          text: `$ ${total}`
        }
      ];
    }
    return [
      {
        component: IconText,
        comp_props: { icon: CalendarToday, text: date }
      },
      {
        text: `$ ${amount}`
      }
    ];
  };

  useEffect(() => {
    const summary = customerPaymentMock.map(payment => {
      return createTableData(payment);
    });
    setSummary(summary);
  }, []);

  return <TableList columns={tableColumnsData} rows={summary} />;
};

export default PaymentSummary;
