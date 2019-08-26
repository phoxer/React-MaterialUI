import React, { Fragment } from 'react';
import useStyles from './styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const DialogHeader = ({ title, onClose }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <DialogTitle disableTypography classes={{ root: classes.title }}>
        <Typography variant="h6">{title}</Typography>
        <IconButton
          aria-label="close"
          classes={{ root: classes.closeButton }}
          onClick={() => onClose(false)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
    </Fragment>
  );
};

export default DialogHeader;
