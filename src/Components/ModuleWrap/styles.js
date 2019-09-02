import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  module_wrap:{
    width: '100%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '.2rem',
    }
  },
  header_title:{
    color: '#263238',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '28px',
    letterSpacing: '-0.06px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    }
  },
  header_icon:{
    marginRight: '.5rem',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    }
  }
}));

export default useStyles;