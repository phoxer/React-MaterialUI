import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  action_button: {
    color: props => theme.palette.color[props.color],
    padding: '5px',
    borderRadius: 0
  }
}));
export default useStyles;
