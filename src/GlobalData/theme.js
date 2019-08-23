import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  light: createMuiTheme({
    background: '#ffffff',
    palette: {
      success: {},
    },
  }),
  dark: createMuiTheme({
    background: '#000000',
  }),
};

export const themeActions = {
  CHANGE_THEME: 'CHANGE_THEME',
};
export const themeReducer = {
  [themeActions.CHANGE_THEME]: (state, theme) => {
    return { ...state, theme: theme };
  },
};

export default theme;
