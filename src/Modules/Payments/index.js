import React, { useState, useEffect } from 'react';
import ModuleWrap from '../../Components/ModuleWrap';
import NumberFormat from 'react-number-format';
import SearchField from '../../Components/Forms/SearchField';
import OptionsDrawer from '../../Components/OptionsDrawer';
import TableList from '../../Components/TableList';
import {
  UserData,
  ActionButtons,
  IconText
} from '../../Components/TableList/CellUtils';
import { ContentDialog } from '../../Components/Dialogs';
import AddPayment from './AddPayent';
import PaymentSummary from './PaymentSummary';
import Divider from '@material-ui/core/Divider';
import { Payment, ListAlt, LibraryAdd, Check, Clear } from '@material-ui/icons';

const tableColumnsData = [
  { title: '#ID', align: 'center', width: '10px' },
  { title: 'Customer' },
  { title: 'Tour Type' },
  { title: 'Payment Status', width: '130px' },
  { title: 'Acciones', align: 'center' }
];

const customersMock = [
  {
    id: 1,
    name: 'Roberto Baglieri',
    email: 'roberto.baglieri@gmail.com',
    tour: 'BASIC',
    payment: 0
  },
  {
    id: 2,
    name: 'José Perez García Garza',
    email: 'Jose.Perez@gmail.com',
    tour: 'BASIC',
    payment: 1
  },
  {
    id: 3,
    name: 'MArgarita Baglieri De las fuentes',
    email: 'margaarita_de_las_fuentes_2424@gmail.com',
    tour: 'PLUS',
    payment: 0
  },
  {
    id: 4,
    name: 'Horacio Caballo',
    email: 'soy_un_caballo@gmail.com',
    tour: 'BASIC',
    payment: 0
  }
];

const getPaymentBox = payment => {
  let paySttng = {
    icon: Clear,
    text: 'NOT PAID',
    color: 'white'
  };
  if (payment === 1) {
    paySttng.icon = Check;
    paySttng.text = 'PAID OUT';
  }

  return paySttng;
};

const Payments = () => {
  const [tourSelected, setTourSelected] = useState({
    id: 1,
    title: 'MATACANES',
    date: '23/12/2019'
  });
  const [optionsDrawer, showOptionsDrawer] = useState({ open: false });
  const [paymentsData, setPaymentsData] = useState([]);
  const [addPaymentDialog, showAddPaymentDialog] = useState({ open: false });
  const [paymentSummarty, showPaymentSummarty] = useState({ open: false });
  const [selectedCustomer, setSelectedCutomer] = useState(null);

  const searchByUser = text => {
    console.log('SUser', text);
  };

  const openPaymentDialog = customer => {
    showAddPaymentDialog({ open: true, title: 'ADD PAYMENT' });
    setSelectedCutomer(customer);
  };
  const closePaymentDialog = open => {
    setSelectedCutomer(null);
    showAddPaymentDialog(open);
  };

  const openPaymentSummaryDialog = customer => {
    const { name } = customer;
    showPaymentSummarty({ open: true, title: `PAYMENT SUMMARY ${name}` });
    setSelectedCutomer(customer);
  };
  const closePaymentSummaryDialog = open => {
    setSelectedCutomer(null);
    showPaymentSummarty(open);
  };

  const createTableData = customer => {
    const { id, name, email, tour, payment } = customer;
    return [
      { text: `#${id}`, cell_props: { textAlign: 'center', padding: 0 } },
      {
        component: UserData,
        comp_props: { name: name, email: email }
      },
      {
        text: tour
      },
      {
        component: IconText,
        comp_props: getPaymentBox(payment),
        cell_props: { background: payment === 1 ? 'green' : 'red' }
      },
      {
        component: ActionButtons,
        comp_props: {
          buttons: [
            {
              icon: ListAlt,
              onClick: openPaymentSummaryDialog,
              data: { id: id, name: name },
              color: 'dark'
            },
            {
              icon: LibraryAdd,
              onClick: openPaymentDialog,
              data: { id: id },
              color: 'green'
            }
          ]
        }
      }
    ];
  };

  useEffect(() => {
    const customers = customersMock.map(customer => {
      return createTableData(customer);
    });
    setPaymentsData(customers);
  }, []);

  return (
    <ModuleWrap
      title={`Payments | ${tourSelected.title} ${tourSelected.date}`}
      icon={Payment}
      onModuleOptions={showOptionsDrawer}
    >
      <TableList columns={tableColumnsData} rows={paymentsData} />
      <OptionsDrawer
        {...optionsDrawer}
        title="Filters"
        onClose={showOptionsDrawer}
        styles={{ top: '58px' }}
      >
        <Divider />
        <SearchField placeholder="Search User" onSearch={searchByUser} />
      </OptionsDrawer>

      <ContentDialog {...paymentSummarty} onClose={closePaymentSummaryDialog}>
        {selectedCustomer && <PaymentSummary {...selectedCustomer} />}
      </ContentDialog>
      <ContentDialog {...addPaymentDialog} onClose={closePaymentDialog}>
        {selectedCustomer && <AddPayment {...selectedCustomer} />}
      </ContentDialog>
    </ModuleWrap>
  );
};

export default Payments;
