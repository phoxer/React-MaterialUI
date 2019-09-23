import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Header';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles';

const MsgDialog = ({ open, onClose, title, message, scroll }) => {
  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby={title}
      open={open}
      classes={{ paper: classes.paper }}
      scroll={scroll ? scroll : 'paper'}
    >
      <DialogHeader title={title} onClose={onClose} classes={classes} />
      <DialogContent className={classes.content}>
        <div className={classes.text}>{message}</div>
      </DialogContent>
    </Dialog>
  );
};

export default MsgDialog;
