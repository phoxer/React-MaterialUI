import React, { Fragment,useState } from 'react';
import fetchData from '../../Api';
import ModuleWrap from '../../Components/ModuleWrap';
import TableList from '../../Components/TableList';
import {
  UserData,
  StatusSwitch,
  ActionButtons,
  IconText,
  UrlButton,
  DateData,
  LongText
} from '../../Components/TableList/CellUtils';
import OptionsDrawer from '../../Components/OptionsDrawer';
import { LoadingDialog, MsgDialog } from '../../Components/Dialogs';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Group, AddCircle, Phone } from '@material-ui/icons';

const FetchFilters = ({getUsers,getUser,getJson,postUser}) =>{
  
  return (<Fragment>
      <Button variant="contained" color="inherit" onClick={getUsers} fullWidth>GET USERS</Button>
      <Divider />
      <Button variant="contained" color="inherit" onClick={getUser} fullWidth>GET USER</Button>
      <Divider />
      <Button variant="contained" color="inherit" onClick={postUser} fullWidth>POST USER</Button>
      <Divider />
      <Button variant="contained" color="inherit" onClick={getJson} fullWidth>LOAD JSON</Button>
  </Fragment>)
}

const showMessageInit = {open: false, title:'', message: ''};

const FetchSamples = () => {
  const [openLoading, setOpenLoading] = useState(false);
  const [msgDialog, setMsgDialog] = useState(showMessageInit);
  const [optionsDrawer,showOptionsDrawer]= useState({open:false})
  const [usersData, setUsersData] = useState([]);

  const getUsers = () => {
    setOpenLoading(true);
    fetchData.get('users').then(response=>{
      const { error } = response;
      if(error){
        setMsgDialog({open:true,title:"Error on Fetch",message: error, onClose: ()=>{
          setMsgDialog(showMessageInit);
        }})
      }else{
        const users = response.map(user => {
          return createTableData(user);
        });
        setUsersData(users);
      }
      setOpenLoading(false);
    })
  };

  const getUser = () => {
    fetchData.get('users/2').then(response=>{
      console.log('FetchData USER',response)
    })
    /*
    fetchData.get('users/2', data => {
      console.log(data);
    });
    */
  };

  const postUser = () => {
    /*
    //const query = {data:[{ok:1},{ok:2},4],wow:{child1:0,child2:[[1,2,3,4],['5','6'],[{swow:new Date()},{swow:new Date()}]]}}
    const query = {data:[[0,1,2,3],[{id:1},2,{id:3}],{obj1:10,obj2:{sob:11}}],year:0,father:{child1:{child2:{child3:'son'}}}}
    fetchData.post('users', query, data => {
      console.log('------------------FORMDATA->')
      for(var pair of data.entries()) {
        console.log(pair[0]+ ', '+ pair[1]); 
      }
    });
    */
  };

  const getJson = () =>{
    fetchData.json('/jsons/sample.json').then(response=>{
      console.log('JSON DATA',response)
    })
  }

  const onUserStateChange = state => {
    console.log(state);
  };

  const onActionGroupButton = data => {
    console.log(data);
  };

  const onActionAddCircleButton = data => {
    console.log(data);
  };

  const setTableOrder = order =>{
    console.log('order',order)
  }

  const tableColumnsData = [
    { title: '#ID', align: 'center', styles:{width: '15px'}, order:{data:"id"} },
    { title: 'Usuario', order:{data:"name"} },
    { title: 'Phone Number' },
    { title: 'NickName' },
    { title: 'Date Time', order:{data:"date_time",active:'DESC'} },
    { title: 'link' },
    { title: 'Description' },
    { title: 'Acciones', align: 'center', styles:{background:'#00B0F0'}},
    { title: 'Activo', align: 'center', styles:{ width: '30px'} }
  ];

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
        component: DateData,
        props: { date:'2019-10-14 12:34:56', format_date:'MM/dd/yyyy MM:ss z'}
      },
      {
        component: UrlButton,
        props: { icon: Phone, text: 'click to link', color: 'green', url:'http://www.google.com'}
      },
      {
        component: LongText,
        props:{ text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",maxCharacters:15}
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
        props: {
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
      
      <TableList columns={tableColumnsData} rows={usersData} showTopScroll={true} onTableOrderChange={setTableOrder} />
      <OptionsDrawer
        {...optionsDrawer}
        title="Filters"
        onClose={showOptionsDrawer}
        styles={{ top: '58px' }}
        getUsers={getUsers}
        getUser={getUser}
        getJson={getJson}
        postUser={postUser}
        component={FetchFilters}
      / >
      <LoadingDialog open={openLoading} title="Loading Users..." />
      <MsgDialog {...msgDialog} />
    </ModuleWrap>
  );
};

export default FetchSamples;
