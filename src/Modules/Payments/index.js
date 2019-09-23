import React, { useState } from 'react';
import ModuleWrap from '../../Components/ModuleWrap';
import NumberFormat from 'react-number-format';
import SearchField from '../../Components/Forms/SearchField';
import OptionsDrawer from '../../Components/OptionsDrawer';
import TableList from '../../Components/TableList';
import { ContentDialog } from '../../Components/Dialogs';
import AddPayment from './AddPayent';
import { ActionButtons } from '../../Components/TableList/CellUtils';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Payment } from '@material-ui/icons';

const tableColumnsData = [
  { title: '#ID', align: 'center', width: '10px' },
  { title: 'Usuario' },
  { title: 'Tour' },
  { title: 'Fecha' },
  { title: 'Pago' },
  { title: 'Acciones', align: 'center' }
];

const Payments = () => {
  const [optionsDrawer, showOptionsDrawer] = useState({ open: false });
  const [paymentsData, setPaymentsData] = useState([]);
  const [addPaymentDialog, showAddPaymentDialog] = useState({ open: false });

  const searchByUser = text => {
    console.log('SUser', text);
  };
  const searchByTour = text => {
    console.log('Stour', text);
  };

  const openPaymentDialog = () => {
    showOptionsDrawer({ open: false });
    showAddPaymentDialog({ open: true, title: 'ADD Payment' });
  };

  return (
    <ModuleWrap
      title="Payments"
      icon={Payment}
      onModuleOptions={showOptionsDrawer}
    >
      <TableList columns={tableColumnsData} rows={paymentsData} />
      <OptionsDrawer
        {...optionsDrawer}
        onClose={showOptionsDrawer}
        styles={{ top: '58px' }}
      >
        <Button variant="contained" color="primary" onClick={openPaymentDialog}>
          ADD PAYMENT
        </Button>
        <Divider />
        <SearchField placeholder="Serach User" onSearch={searchByUser} />
        <Divider />
        <SearchField placeholder="Serach Tour" onSearch={searchByTour} />
      </OptionsDrawer>
      <ContentDialog {...addPaymentDialog} onClose={showAddPaymentDialog}>
        <AddPayment />
      </ContentDialog>
    </ModuleWrap>
  );
};

export default Payments;
