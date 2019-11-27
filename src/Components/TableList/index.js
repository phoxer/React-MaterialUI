import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useTableStyle from './styles';

const TableTH = props => {
  const { title, align = 'left', colspan = 1, styles } = props;
  const classes = useTableStyle(styles);
  return (
    <TableCell
      classes={{ root: classes.table_th, sizeSmall: classes.table_size }}
      align={align}
      colSpan={colspan}
      variant="head"
    >
      {title}
    </TableCell>
  );
};

const TableTD = ({ text, component, props, styles }) => {
  const classes = useTableStyle(styles);
  return (
    <TableCell
      classes={{ root: classes.table_td, sizeSmall: classes.table_size }}
    >
      {component ? React.createElement(component, props) : text}
    </TableCell>
  );
};

const TableRows = ({ rowData }) => {
  return (
    <TableRow>
      {rowData.map((td, index) => {
        return <TableTD key={`tbtd${index}`} {...td} />;
      })}
    </TableRow>
  );
};

const TableList = ({ columns, rows, styles }) => {
  const classes = useTableStyle(styles);

  return (<Paper className={classes.root}>
    <Table size="small" className={classes.table}>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => {
            return <TableTH key={`tbhd${index}`} {...column} />;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows &&
          rows.map((row, index) => {
            return <TableRows key={`tbrw${index}`} rowData={row} />;
          })}
      </TableBody>
    </Table>
  </Paper>);
};

export default TableList;
