import React, { useState, useEffect } from 'react';
import fetchData from '../../Api';
import ModuleWrap from '../../Components/ModuleWrap';
import TableList from '../../Components/TableList';
import {
  UserData,
  StatusSwitch,
  ActionButtons,
  IconText,
  UrlButton
} from '../../Components/TableList/CellUtils';
import OptionsDrawer from '../../Components/OptionsDrawer';
import { LoadingDialog, MsgDialog } from '../../Components/Dialogs';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Group, AddCircle, Phone } from '@material-ui/icons';

const tableColumnsData = [
  { title: '#ID', align: 'center', styles:{width: '10px'} },
  { title: 'Usuario' },
  { title: 'Phone Number' },
  { title: 'NickName' },
  { title: 'link' },
  { title: 'Acciones', align: 'center', styles:{background:'#00B0F0'}},
  { title: 'Activo', align: 'center', styles:{ width: '30px'} }
];

const FetchSamples = () => {
  const [openLoading, setOpenLoading] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);
  const [optionsDrawer,showOptionsDrawer]= useState({open:false})
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
      { text: `#${id}`, styles: { textAlign: 'center', padding: 0 } },
      {
        component: UserData,
        props: { name: name, email: email },
        styles: { backgroundColor: '#ccc' }
      },
      {
        component: IconText,
        props: { icon: Phone, text: phone }
      },
      {
        component: IconText,
        props: { icon: Phone, text: username, color: 'green' }
      },
      {
        component: UrlButton,
        props: { icon: Phone, text: 'click to link', color: 'green', url:'http://www.google.com'}
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
        comp_props: {
          state: true,
          onChange: onUserStateChange,
          data: { id: id }
        }
      }
    ];
  };

  return (
    <ModuleWrap
      title="Administrador de usuarios"
      icon={Group}
      onModuleOptions={showOptionsDrawer}
    >
      
      <TableList columns={tableColumnsData} rows={usersData} />
      <OptionsDrawer
        {...optionsDrawer}
        title="Filters"
        onClose={showOptionsDrawer}
        styles={{ top: '58px' }}
      >
        <Button variant="contained" color="inherit" onClick={getUsers} fullWidth>GET USERS</Button>
        <Divider />
        <Button variant="contained" color="inherit" onClick={getUsers} fullWidth>GET USERS</Button>
        <Divider />
        <Button variant="contained" color="inherit" onClick={getUsers} fullWidth>GET USERS</Button>
      </OptionsDrawer>
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
