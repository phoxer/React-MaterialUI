import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Person } from '@material-ui/icons';

const MenuBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
      <List>
        <ListItem button key={'usuarios'}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary={'USUARIOS'} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuBar;
