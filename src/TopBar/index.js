import React, { useState, useContext } from 'react';
import { themeActions } from '../GlobalData/theme';
import { StoreContext } from '../GlobalData';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const TopBar = ({ setMenuOpen }) => {
  const classes = useStyles();
  const { state, setGlobalState } = useContext(StoreContext);
  const [themeChecked, setThemeChecked] = useState(true);

  const changeTheme = evt => {
    setThemeChecked(!themeChecked);
    setGlobalState(themeActions.CHANGE_THEME, !themeChecked ? 'light' : 'dark');
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fetch Samples
          </Typography>
          <Switch
            checked={themeChecked}
            onChange={changeTheme}
            classes={{
              root: classes.switch_theme.root,
              switchBase: classes.switch_theme.switchBase,
              thumb: classes.switch_theme.thumb,
              track: classes.switch_theme.track,
              checked: classes.switch_theme.checked,
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
