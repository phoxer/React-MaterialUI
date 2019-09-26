import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Utils/Header';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles';

const ContentDialog = ({
  children,
  open,
  onClose,
  title,
  maxWidth,
  scroll
}) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      aria-labelledby={title}
      open={open}
      maxWidth={maxWidth ? maxWidth : 'xl'}
      classes={{ paper: classes.paper }}
      scroll={scroll ? scroll : 'paper'}
    >
      <DialogHeader title={title} onClose={onClose} classes={classes} />
      <DialogContent className={classes.content}>{children}</DialogContent>
    </Dialog>
  );
};

export default ContentDialog;
