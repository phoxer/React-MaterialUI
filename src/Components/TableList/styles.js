import { makeStyles } from '@material-ui/styles';

const useTableStyles = makeStyles(theme => ({
  table:{
    borderCollapse: 'collapse',
    borderSpacing: '1px',
    backgroundColor: '#ffffff'
  },
  table_th:{
    fontWeight: 700,
    border: theme.table.border,
    color: theme.table.label,
    backgroundColor: theme.table.header,
  },
  table_tr:{
    border: theme.table.border
  }
}));

export default useTableStyles;