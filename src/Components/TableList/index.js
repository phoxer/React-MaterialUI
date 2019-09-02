import React from 'react';
import Paper from '@material-ui/core/Paper';
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
      className={classes.table_th}
      align={align}
      colSpan={colspan}
      variant="head"
    >
      {title}
    </TableCell>
  );
};

const TableRw = props => {
  const { classes, data } = props;
  return (
    <TableRow>
      {data.map((td, index) => {
        const { text, component, props: comp_props } = td;
        return (
          <TableCell
            className={classes.table_td}
            key={`tbtd${index}`}
            size="small"
          >
            {component ? React.createElement(component, comp_props) : text}
          </TableCell>
        );
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
        {rows.map((row, index) => {
          return <TableRw key={`tbrw${index}`} classes={classes} data={row} />;
        })}
      </TableBody>
    </Table>
  );
};

export default TableList;
