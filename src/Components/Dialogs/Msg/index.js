import React from 'react';
import useStyles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Header';
import Box from '@material-ui/core/Box';

const MsgDialog = ({ open, setOpen, title, message }) => {
  const classes = useStyles();
  const dialogClasses = {
    paper: classes.paper
  };

  return (
    <Dialog aria-labelledby={title} open={open} classes={dialogClasses}>
      <DialogHeader title={title} onClose={setOpen} classes={classes} />
      <Box pt={2}>{message}</Box>
    </Dialog>
  );
};

export default MsgDialog;
