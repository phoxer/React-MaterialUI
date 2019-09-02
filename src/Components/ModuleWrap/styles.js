import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  module_wrap: {
    width: '100%',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '.2rem'
    }
  },
  header: {
    height: '22px',
    margin: '.5rem .8rem',
    padding: '0'
  },
  header_title: {
    color: theme.palette.color.dark,
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '28px',
    fontFamily: theme.fontHeader,
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
    }
  },
  header_icon: {
    marginRight: '.5rem',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem'
    }
  },
  header_options: {
    padding: '7px',
    borderRadius: 0
  }
}));

export default useStyles;
