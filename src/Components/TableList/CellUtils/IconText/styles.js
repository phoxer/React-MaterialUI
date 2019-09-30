import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  icon_text: {
    color: props => theme.palette.color[props.color],
    '& svg': {
      marginRight: '.5rem'
    },
    '& h6': {
      color: props =>
        props.color
          ? theme.palette.color[props.color]
          : theme.palette.color.dark,
      fontSize: '.9rem',
      fontWeight: '400',
      letterSpacing: '-0.05px',
      margin: '0px'
    }
  }
}));
export default useStyles;
