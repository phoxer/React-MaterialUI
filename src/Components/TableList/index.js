import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useTableStyle from './styles';

const TableTH = props => {
  const { title, align = 'left', colspan = 1, width } = props;
  const classes = useTableStyle({ width: width });
  return (
    <TableCell
      classes={{root:classes.table_th,smallSize:classes.table_size}}
      align={align}
      colSpan={colspan}
      variant="head"
    >
      {title}
    </TableCell>
  );
};

const TableTD = ({ text, component, comp_props, cell_props }) => {
  const classes = useTableStyle(cell_props);
  return (
    <TableCell classes={{root:classes.table_th,smallSize:classes.table_size}}>
      {component ? React.createElement(component, comp_props) : text}
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

const TableList = ({ columns, rows }) => {
  const classes = useTableStyle();

  return (
    <Table size="small" className={classes.table}>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => {
            return <TableTH key={`tbhd${index}`} {...column} />;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows && rows.map((row, index) => {
          return <TableRows key={`tbrw${index}`} rowData={row} />;
        })}
      </TableBody>
    </Table>
  );
};

export default TableList;
