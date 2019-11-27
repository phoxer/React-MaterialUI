import { makeStyles } from '@material-ui/styles';

const useTableStyles = makeStyles((theme, styles) => ({
  root: styles=>({
    width: '100%',
    overflowX: 'auto',
    boxShadow: 'none',
    background: theme.table.background,
    ...styles
  }),
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '1px',
    '& tbody':{
        '& tr:hover':{
        backgroundColor: theme.table.hover_color
      }
    }
  },
  table_th: styles => ({
    background: theme.table.header.background,
    border: theme.table.border,
    color: theme.table.header.label,
    fontWeight: 700,
    fontSize: '.8rem',
    ...styles,
  }),
  table_size:{
    padding: '3px 15px 3px 15px'
  },
  table_td: styles => ({
    border: theme.table.border,
    ...styles,
  })
}));

export default useTableStyles;
