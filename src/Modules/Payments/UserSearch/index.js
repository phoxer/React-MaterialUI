import React, { Fragment, useState } from 'react';
import SearchField from '../../../Components/Forms/SearchField';
import TableList from '../../../Components/TableList';
import {
  UserData,
  ActionButtons
} from '../../../Components/TableList/CellUtils';
import Box from '@material-ui/core/Box';
import { CheckBoxOutlineBlank, CheckBox } from '@material-ui/icons';

const tableColumnsData = [{ title: 'Customers' }, { title: '' }];

const UserSearch = ({ onSelect, multpleSelection }) => {
  const [customers, setCustomers] = useState([]);

  const onCustomerSelected = customer => {
    console.log('onCustomerSelected', customer);
  };

  const createTableData = customers => {
    return customers.map(customer => {
      const { id, names, surnames, selected } = customer;
      const selectedIcon = selected === true ? CheckBox : CheckBoxOutlineBlank;
      return [
        {
          component: UserData,
          comp_props: {
            name: surnames,
            email: names,
            onClick: onCustomerSelected,
            data: customer
          }
        },
        {
          component: ActionButtons,
          comp_props: {
            buttons: [
              {
                icon: selectedIcon,
                onClick: onCustomerSelected,
                data: customer,
                color: 'green'
              }
            ]
          }
        }
      ];
    });
  };

  const searchCustomer = text => {
    console.log('Search Text', text);
    setCustomers([
      {
        id: 1,
        names: 'Roberto Carlos',
        surnames: 'Baglieri',
        selected: false
      },
      {
        id: 2,
        names: 'Alberto Carlos',
        surnames: 'Torres Torres',
        selected: false
      }
    ]);
  };

  return (
    <Fragment>
      <Box p={1}>
        <SearchField placeholder="Customer Search" onSearch={searchCustomer} />
      </Box>
      {customers.length > 0 && (
        <TableList
          columns={tableColumnsData}
          rows={createTableData(customers)}
        />
      )}
    </Fragment>
  );
};

export default UserSearch;
