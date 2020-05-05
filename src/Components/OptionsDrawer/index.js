import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './styles';
import { DialogHeader } from '../Dialogs/Utils';

const OptionsDrawer = props => {
  const { component, title, open, onClose, styles, anchor } = props;
  const odClasses = useStyles(styles);
  return (
    <Drawer
      anchor={anchor ? anchor : 'right'}
      open={open}
      onClose={() => onClose({ open: false })}
      classes={{ paper: odClasses.draw_paper }}
    >
      <DialogHeader title={title} onClose={onClose} />
      {open && <div className={odClasses.content}>
        {component && React.createElement(component,{...props,component:null,styles:null})}
      </div>}
    </Drawer>
  );
};

export default OptionsDrawer;
