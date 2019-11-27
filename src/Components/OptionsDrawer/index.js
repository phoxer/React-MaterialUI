import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles';
import { DialogHeader } from '../Dialogs/Utils';

const OptionsDrawer = ({ children, title, open, onClose, styles, anchor }) => {
  const classes = useStyles(styles);
  return (
    <Drawer
      anchor={anchor ? anchor : 'right'}
      open={open}
      onClose={() => onClose({ open: false })}
      classes={{ paper: classes.draw_paper }}
    >
      <DialogHeader title={title} onClose={onClose} />
      <div className='content'>
        {children}
      </div>
    </Drawer>
  );
};

export default OptionsDrawer;
