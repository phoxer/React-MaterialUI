import { makeStyles } from '@material-ui/core/styles';
import { relative } from 'path';

const useStyles = makeStyles(theme => ({
  bar: {
    flexGrow: 1,
    height: '56px',
    zIndex: 2000
  },
  toolbar:{
    height: '56px',
    minHeight: '56px'
  },
  title: {
    fontFamily: theme.fontHeader,
    flexGrow: 1
  }
}));

export default useStyles;
