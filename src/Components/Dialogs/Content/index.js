import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogHeader from '../Header';
import DialogContent from '@material-ui/core/DialogContent';
import useStyles from './styles';

const ContentDialog = ({ open, setOpen, title, children, scroll }) => {
  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby={title}
      open={open}
      classes={{paper: classes.paper}}
      scroll={scroll? scroll:"paper"}
    >
      <DialogHeader title={title} onClose={setOpen} classes={classes} />
      <DialogContent className={classes.content}>{children}</DialogContent>
    </Dialog>
  );
};

export default ContentDialog;
