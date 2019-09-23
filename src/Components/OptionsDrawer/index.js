import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles';

const OptionsDrawer = ({ children, open, onClose, styles, anchor }) => {
  const classes = useStyles(styles);
  return (
    <Drawer
      anchor={anchor ? anchor : 'right'}
      open={open}
      onClose={() => onClose({ open: false })}
      classes={{ paper: classes.draw_paper }}
    >
      {children}
    </Drawer>
  );
};

export default OptionsDrawer;
