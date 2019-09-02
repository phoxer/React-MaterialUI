import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  light: createMuiTheme({
    background: '#ffffff',
    fontHeader: 'Oswald',
    table: {
      header: '#e2e2e2',
      label: '#263238',
      border: '1px solid #eeeeee'
    },
    palette: {
      color: {
        blue: '#007bff',
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#e83e8c',
        red: '#dc3545',
        orange: '#fd7e14',
        yellow: '#ffc107',
        green: '#28a745',
        teal: '#20c997',
        cyan: '#17a2b8',
        white: '#fff',
        gray: '#6c757d',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#263238'
      }
    }
  }),
  dark: createMuiTheme({
    background: '#000000',
    fontHeader: 'Oswald',
    table: {
      header: '#2d2d2d',
      label: '#ffffff',
      border: '1px solid #2f2b2b'
    },
    palette: {
      color: {
        blue: '#007bff',
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#e83e8c',
        red: '#dc3545',
        orange: '#fd7e14',
        yellow: '#ffc107',
        green: '#28a745',
        teal: '#20c997',
        cyan: '#17a2b8',
        white: '#fff',
        gray: '#6c757d',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#263238'
      }
    }
  })
};

export const themeActions = {
  CHANGE_THEME: 'CHANGE_THEME'
};
export const themeReducer = {
  [themeActions.CHANGE_THEME]: (state, theme) => {
    return { ...state, theme: theme };
  }
};

export default theme;
