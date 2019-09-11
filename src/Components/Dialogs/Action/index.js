import React from 'react';
import { isArray } from 'lodash';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const ActionDialog = ({
  open,
  actionResponse,
  title,
  message,
  data,
  buttons
}) => {
  const classes = useStyles();
  const btnsLabels = isArray(buttons) ? buttons : ['ACCEPT', 'CANCEL'];
  return (
    <Dialog open={open} classes={{ paper: classes.paper }} scroll="paper">
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.text}>{message}</div>
      <DialogActions>
        <Button onClick={() => actionResponse({ response: true, data })}>
          {btnsLabels[0]}
        </Button>
        <Button onClick={() => actionResponse({ response: false, data })}>
          {btnsLabels[1]}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActionDialog;
