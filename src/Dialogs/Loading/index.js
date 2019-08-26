import React from 'react';
import useStyles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const LoadingDialog = ({ open, title = 'Loading...', text = '' }) => {
  const classes = useStyles();
  const dialogClasses = {
    paper: classes.paper
  };

  return (
    <Dialog aria-labelledby={title} open={open} classes={dialogClasses}>
      <DialogTitle>{title}</DialogTitle>
      <Box p={2} align="center">
        <CircularProgress />
      </Box>
    </Dialog>
  );
};

export default LoadingDialog;
