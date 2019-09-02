import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    margin: 0,
    padding: 0
  },
  closeButton: {
    position: 'absolute',
    padding: '8px',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));
export default useStyles;
