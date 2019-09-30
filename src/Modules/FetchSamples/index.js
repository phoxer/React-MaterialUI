import React, { useState, useEffect } from 'react';
import fetchData from '../../Api';
import ModuleWrap from '../../Components/ModuleWrap';
import TableList from '../../Components/TableList';
import {
  UserData,
  StatusSwitch,
  ActionButtons,
  IconText
} from '../../Components/TableList/CellUtils';
import { LoadingDialog, MsgDialog } from '../../Components/Dialogs';
import Button from '@material-ui/core/Button';
import { Group, AddCircle, Phone } from '@material-ui/icons';

const tableColumnsData = [
  { title: '#ID', align: 'center', width: '10px' },
  { title: 'Usuario' },
  { title: 'Phone Number' },
  { title: 'NickName' },
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
    const { id, name, email, phone, username } = user;
    return [
      { text: `#${id}`, cell_props: { textAlign: 'center', padding: 0 } },
      {
        component: UserData,
        comp_props: { name: name, email: email },
        cell_props: { backgroundColor: '#ccc' }
      },
      {
        component: IconText,
        comp_props: { icon: Phone, text: phone }
      },
      {
        component: IconText,
        comp_props: { icon: Phone, text: username, color: 'green' }
      },
      {
        component: ActionButtons,
        comp_props: {
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
        comp_props: {
          state: true,
          onChange: onUserStateChange,
          data: { id: id }
        }
      }
    ];
  };

  const openOptions = () => {
    console.log('options');
  };

  return (
    <ModuleWrap
      title="Administrador de usuarios"
      icon={Group}
      onModuleOptions={openOptions}
    >
      <Button variant="contained" color="inherit" onClick={getUsers}>
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
