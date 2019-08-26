import { makeStyles } from '@material-ui/core/styles';
import { relative } from 'path';

const useStyles = makeStyles(theme => ({
  bar: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },

  switch_root: {
    width: '158px',
    height: '380px',
    padding: '1px'
  },
  switch_base: {
    padding: 2,
    color: theme.palette.grey[500],
    '& $checked': {
      color: theme.palette.common.white,
      '& $track': {
        opacity: 1,
        backgroundColor: '#ffffff',
        borderColor: theme.palette.primary.main
      }
    }
  },
  switch_track: {
    backgroundColor: '#ffffff',
    color: theme.palette.grey[500]
  }
}));

export default useStyles;
