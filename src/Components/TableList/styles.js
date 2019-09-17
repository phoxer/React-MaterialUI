import { makeStyles } from '@material-ui/styles';

const useTableStyles = makeStyles((theme, props) => ({
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '1px',
    backgroundColor: theme.table.background,
    '& tbody':{
        '& tr:hover':{
        backgroundColor: theme.table.hover_color
      }
    }
  },
  table_th: {
    fontWeight: 700,
    border: theme.table.border,
    color: theme.table.header.label,
    backgroundColor: theme.table.header.background,
    fontSize: '.8rem',
    width: props => (props.width ? props.width : 0)
  },
  table_size:{
    padding: '3px 15px 3px 15px'
  },
  table_td: props => ({
    ...props,
    border: theme.table.border
  })
}));

export default useTableStyles;
