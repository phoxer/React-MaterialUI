import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  light: createMuiTheme({
    background: '#ffffff',
    fontHeader: 'Oswald',
    table: {
      background: '#ffffff',
      border: '1px solid #eeeeee',
      header: {
        backgroundColor: '#e2e2e2',
        label: '#263238'
      },
      hover_color: '#fbfbfb'
    },
    lists: {
      title: '#687F8A',
      items: '#48565D',
      border: '1px solid #eeeeee',
      background: '#ffffff'
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
    },
    zIndex: {
      mobileStepper: 1000,
      appBar: 1500,
      drawer: 1200,
      modal: 2000,
      snackbar: 2400,
      tooltip: 2500
    }
  }),
  dark: createMuiTheme({
    background: '#000000',
    fontHeader: 'Oswald',
    table: {
      background: '#000000',
      border: '1px solid #eeeeee',
      header: {
        backgroundColor: '#e2e2e2',
        label: '#263238'
      },
      hover_color: '#fbfbfb'
    },
    lists: {
      title: '#687F8A',
      items: '#48565D',
      border: '1px solid #eeeeee',
      background: '#000000'
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
    },
    zIndex: {
      mobileStepper: 1000,
      appBar: 1500,
      drawer: 1200,
      modal: 2000,
      snackbar: 2400,
      tooltip: 2500
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
