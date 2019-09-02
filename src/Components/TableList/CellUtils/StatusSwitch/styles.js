import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    switchBase: {
        color: theme.palette.color.danger,
        '&$checked': {
          color: theme.palette.color.success,
        },
        '&$checked + $track': {
          backgroundColor: theme.palette.color.success,
        },
      },
    checked: {},
    track: {
        backgroundColor: theme.palette.color.danger,
        opacity: 0.6
    },
}));

export default useStyles;