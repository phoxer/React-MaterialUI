import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  date_data: {
    color: props =>
          props.color
            ? theme.palette.color[props.color]
            : theme.palette.color.dark,
    '& svg': {
      marginRight: '.5rem'
    },
    '& h5': {
        fontSize: '.9rem',
        fontWeight: '400',
        letterSpacing: '-0.05px',
        margin: '0px'
    },
    '& h6': {
        fontSize: '.8rem',
        marginTop: '-3px',
        fontWeight: '400',
        letterSpacing: '-0.05px',
        margin: '0px'
    },
    
  }
}));
export default useStyles;