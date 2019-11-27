import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  url_button: {
    color: props => theme.palette.color[props.color],
    cursor: 'pointer'
  },
  icon:{
    color: props => theme.palette.color[props.color],
    padding: '5px'
  }
}));
export default useStyles;