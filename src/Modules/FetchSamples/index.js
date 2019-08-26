import React, { useState } from 'react';
import fetchData from '../../Api';
import Container from '@material-ui/core/Container';
import { LoadingDialog, MsgDialog } from '../../Dialogs';
import Button from '@material-ui/core/Button';

const FetchSamples = () => {
  const [openLoading, setOpenLoading] = useState(false);
  const [openMsg, setOpenMsg] = useState(false);

  const getUsers = () => {
    setOpenLoading(true);
    fetchData.get('users/', data => {
      console.log(data);
      setOpenLoading(false);
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

  return (
    <Container>
      <Button color="primary" onClick={getUsers}>
        GET USERS
      </Button>
      <LoadingDialog open={openLoading} title="Loading Users..." />
      <MsgDialog
        open={openMsg}
        setOpen={setOpenMsg}
        title="Error Msg Dialog..."
        message="Este sería un mensaje de error!"
      />
    </Container>
  );
};

export default FetchSamples;
