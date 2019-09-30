import React, { useState, useContext } from 'react';

import { StoreContext } from '../../GlobalData';
import { themeActions } from '../../GlobalData/theme';
import { langsActions, langs } from '../../GlobalData/langs';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles';

const TopBar = ({ setMenuOpen }) => {
  const classes = useStyles();
  const { state, setGlobalState } = useContext(StoreContext);
  const { lang } = state;
  const [themeChecked, setThemeChecked] = useState(true);

  const changeTheme = evt => {
    setThemeChecked(!themeChecked);
    setGlobalState(themeActions.CHANGE_THEME, !themeChecked ? 'light' : 'dark');
  };

  const changeLanguage = ({ target }) => {
    setGlobalState(langsActions.CHANGE_LANG, target.value);
  };

  return (
    <AppBar position="relative" className={classes.bar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Material UI - Samples
        </Typography>
        <Switch checked={themeChecked} onChange={changeTheme} />

        <FormControl>
          <Select value={lang} onChange={changeLanguage} name="lang">
            {langs.map(ln => {
              return (
                <MenuItem key={ln.code} value={ln.code}>
                  {ln.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
