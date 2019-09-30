import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  user_box: {
    width: '100%',
    cursor: 'pointer'
  },
  user_name: {
    color: theme.palette.color.dark,
    fontSize: '.9rem',
    fontWeight: '600',
    letterSpacing: '-0.05px',
    margin: '0px'
  },
  user_email: {
    color: theme.palette.color.dark,
    fontSize: '.8rem',
    fontWeight: '400',
    letterSpacing: '-0.05px',
    margin: '0px',
    marginTop: '-3px'
  },
  user_picture: {
    width: '42px',
    height: '42px',
    marginRight: '8px'
  }
}));
export default useStyles;
