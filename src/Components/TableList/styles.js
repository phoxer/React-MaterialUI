import { makeStyles } from '@material-ui/styles';

export const useTableRootStyles = makeStyles((theme, styles) => ({
  root: styles=> ({
    width: '100%',
    overflowX: 'auto',
    boxShadow: 'none',
    background: theme.table.background,
    overflow: 'hidden',
    ...styles
  })
}));

export const useTableStyles = makeStyles((theme, minWidth) =>({
  wrapper: minWidth=>({
      overflowX: 'auto',
      '& .top_scroll':{
        overflow: 'hidden',
        height: '1px',
        minWidth:  `${minWidth}px`,
      }
  }),
  table: minWidth=>({
    borderCollapse: 'collapse',
    borderSpacing: '1px',
    minWidth:  `${minWidth}px`,
    overflow: 'hidden',
    '& tbody':{
        '& tr:hover':{
        backgroundColor: theme.table.hover_color
      }
    }
  })
}));

export const useThStyles = makeStyles((theme, styles) => ({
  table_th: styles => ({
    background: theme.table.header.background,
    border: theme.table.border,
    color: theme.table.header.label,
    fontWeight: 700,
    fontSize: '.8rem',
    ...styles,
    '& .title':{
      padding: '0px 10px'
    },
    '& .fltr':{
      paddingLeft:'0px'
    },
    '& .order_filter':{
      display: 'flex',
      cursor: 'pointer'
    }
  }),
  table_size:{
    padding: '3px 0px'
  },
}));

export const useTdStyles = makeStyles((theme, styles) => ({
  table_td: styles => ({
    border: theme.table.border,
    ...styles,
  }),
  table_size:{
    padding: '3px 8px'
  },
}));
