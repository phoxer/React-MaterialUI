import React, { useState, useEffect } from 'react';
import fetchData from '../../Api';
import ModuleWrap from '../../Components/ModuleWrap';
import TableList from '../../Components/TableList';
import {
  UserData,
  StatusSwitch,
  ActionButtons
} from '../../Components/TableList/CellUtils';
import { LoadingDialog, MsgDialog } from '../../Components/Dialogs';
import Button from '@material-ui/core/Button';
import { Group, AddCircle } from '@material-ui/icons';

const tableColumnsData = [
  { title: '#ID', align: 'center', width: '10px' },
  { title: 'Usuario' },
  { title: 'Fecha de Cumpleaños' },
  { title: 'Acciones', align: 'center' },
  { title: 'Activo', align: 'center', width: '30px' }
];

const FetchSamples = () => {
  const [openLoading, setOpenLoading] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const getUsers = () => {
    setOpenLoading(true);
    fetchData.get('users/', data => {
      console.log('data', data);

      const users = data.map(user => {
        return createTableData(user);
      });
      setOpenLoading(false);
      setUsersData(users);
    });
  };

  const getUser = () => {
    fetchData.get('users/2', data => {
      console.log(data);
    });
  };

  const postUser = () => {
    fetchData.post('users', { id: 700, name: 'roberto' }, data => {
      console.log(data);
    });
  };

  const onUserStateChange = state => {
    console.log(state);
  };

  const onActionGroupButton = data => {
    console.log(data);
  };

  const onActionAddCircleButton = data => {
    console.log(data);
  };

  const createTableData = user => {
    const { id, name, email } = user;
    return [
      { text: `#${id}` },
      {
        component: UserData,
        props: { name: name, email: email }
      },
      {
        text: ''
      },
      {
        component: ActionButtons,
        props: {
          buttons: [
            {
              icon: Group,
              onClick: onActionGroupButton,
              data: { id: id },
              color: 'gray'
            },
            {
              icon: AddCircle,
              onClick: onActionAddCircleButton,
              data: { id: id },
              color: 'success'
            }
          ]
        }
      },
      {
        component: StatusSwitch,
        props: { state: true, onChange: onUserStateChange, data: { id: id } }
      }
    ];
  };
  /*
  useEffect(() => {
    setUsersData([
      [
        { text: '#1', props: { align: 'center' } },
        {
          component: UserData,
          props: { name: 'Roberto Baglieri', email: 'phoxer@gmail.com' }
        }
      ],
      [
        { text: '#2' },
        {
          component: UserData,
          props: {
            name: 'Mario Baracux',
            email: 'Mario.Baracux@gmail.com',
            picture:
              'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/Tobias-Erb_MPI-Marburg-590x408.jpg'
          }
        },
        {
          component: StatusSwitch,
          props: { state: true, onChange: onUserStateChange, data: { id: 2 } }
        },
        {
          component: ActionButtons,
          props: {
            buttons: [
              {
                icon: Group,
                onClick: onActionGroupButton,
                data: { id: 1 },
                color: 'gray'
              },
              {
                icon: AddCircle,
                onClick: onActionAddCircleButton,
                data: { id: 2 },
                color: 'success'
              }
            ]
          }
        }
      ]
    ]);
  }, []);
  */

  const openOptions = () => {
    console.log('options');
  };

  return (
    <ModuleWrap
      title="Administrador de usuarios"
      icon={Group}
      onModuleOptions={openOptions}
    >
      <Button color="primary" onClick={getUsers}>
        GET USERS
      </Button>
      <TableList columns={tableColumnsData} rows={usersData} />
      <LoadingDialog open={openLoading} title="Loading Users..." />
      <MsgDialog
        open={openMsg}
        setOpen={setOpenMsg}
        title="Error Msg Dialog..."
        message="Este sería un mensaje de error!"
      />
    </ModuleWrap>
  );
};

export default FetchSamples;
