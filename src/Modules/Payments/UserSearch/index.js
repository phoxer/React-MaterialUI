import React, { Fragment, useState } from 'react';
import SearchField from '../../../Components/Forms/SearchField';
import TableList from '../../../Components/TableList';
import {
  UserData,
  ActionButtons
} from '../../../Components/TableList/CellUtils';
import Grid from '@material-ui/core/Grid';
import SelectSearch from '../SelectSearch';
import { CheckBoxOutlineBlank, CheckBox } from '@material-ui/icons';

const tableColumnsData = [{ title: 'Customers', colspan: 2 }];

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

  const onTourSelect = value => {
    console.log(value);
  };

  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <SelectSearch label="Other Search" onSelect={onTourSelect} />
        </Grid>
        <Grid item xs={6}>
          <SearchField
            placeholder="Customer Search"
            onSearch={searchCustomer}
          />
        </Grid>
      </Grid>
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
