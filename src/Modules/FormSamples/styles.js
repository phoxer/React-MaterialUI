import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '1rem',
    padding: '.5rem'
  },
  text_field:{
    marginBottom: '1rem',
    '& .Mui-error':{
        marginBottom: '.3rem'
    }
  },
  error_message:{
    color: '#f44336',
    marginLeft: '14px',
    marginTop: 0,
    marginBottom: '1rem'
  }
}));

export default useStyles;