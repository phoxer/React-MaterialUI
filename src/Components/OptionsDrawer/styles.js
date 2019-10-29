import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  draw_paper: props => ({
    ...props,
    width: '300px',
    minWidth: '300px',
    padding: '.5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    '& hr + hr': {
      marginTop: '.5rem',
      marginBottom: '.5rem'
    }
  })
}));
export default useStyles;
