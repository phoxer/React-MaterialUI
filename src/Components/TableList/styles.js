import { makeStyles } from '@material-ui/styles';

const useTableStyles = makeStyles((theme, props) => ({
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '1px',
    backgroundColor: '#ffffff'
  },
  table_th: {
    fontWeight: 700,
    border: theme.table.border,
    color: theme.table.label,
    backgroundColor: theme.table.header,
    fontSize: '.8rem',
    width: props => (props.width ? props.width : 0)
  },
  table_td: props => ({
    ...props,
    border: theme.table.border
  })
}));

export default useTableStyles;
