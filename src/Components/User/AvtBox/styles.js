import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    padding: '.8rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  info: {
    textAlign: 'center',
    '& h3': {
      fontSize: '1.2rem',
      fontWeight: '600'
    },
    '& h4': {
      fontSize: '1rem',
      fontWeight: '400',
      opacity: '0.7'
    },
    '& h5': {
      fontSize: '.8rem',
      fontWeight: '400',
      opacity: '0.7'
    }
  },
  avatar: {
    margin: '.5rem',
    width: '100px',
    height: '100px'
  }
}));

export default useStyles;
