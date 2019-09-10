import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Header';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles';

const ContentDialog = ({ open, setOpen, title, children }) => {
  const classes = useStyles();
  const dialogClasses = {
    root: classes.root,
    paper: classes.paper
  };

  return (
    <Dialog
      aria-labelledby={title}
      open={open}
      classes={dialogClasses}
      scroll="body"
    >
      <DialogHeader title={title} onClose={setOpen} classes={classes} />
      <DialogContent className={classes.content}>{children}</DialogContent>
    </Dialog>
  );
};

export default ContentDialog;
