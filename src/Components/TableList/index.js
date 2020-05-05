/** Table System V 1.0.3 by Phoxer.com */

import React,{useState,useEffect,useRef} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {ArrowRight,ArrowDropDown,ArrowDropUp} from '@material-ui/icons';
import {useTableRootStyles,useTableStyles,useThStyles,useTdStyles} from './styles';

const filterActions={
  act0:{
    order: '',
    icon: ArrowRight
  },
  act1:{
    order: 'DESC',
    icon: ArrowDropDown
  },
  act2:{
    order: 'ASC',
    icon: ArrowDropUp
  },
  DESC:1,
  ASC:2
}

const FilterRow = ({data,onTableOrderChange,active,title,filterKey,activeFilterKey,setFilterKey}) =>{
  const [isActive,setActive] = useState(active? true:false);
  const [action,setAction] = useState(active? filterActions[active]:0);
  const fltAction=filterActions[`act${action}`];
  
  const toggleOrder = () =>{
    if(isActive){
      setAction(action===1? 2:1);
    }else{
      setFilterKey(filterKey);
      setActive(true);
      setAction(1);
    }
  }
  
  useEffect(()=>{
    if(action!==0 && isActive){
      onTableOrderChange({data:data,order:fltAction.order});
    }
  },[action]);
  
  useEffect(()=>{
    if(activeFilterKey!=='-' && filterKey!==activeFilterKey){
      setActive(false);
      setAction(0);
    }
  },[activeFilterKey])
  
  return (<div className="order_filter" onClick={toggleOrder}>
    {React.createElement(fltAction.icon)} <span className="title fltr">{title}</span> 
  </div>)
}

const TableTH = props => {
  const { title, align = 'left', colspan = 1, styles, order , filterKey, activeFilterKey, setFilterKey, onTableOrderChange } = props;
  const classes = useThStyles(styles);

  return (<TableCell
      classes={{ root: classes.table_th, sizeSmall: classes.table_size }}
      align={align}
      colSpan={colspan}
      variant="head"
    >
      {order? <FilterRow {...order} title={title} filterKey={filterKey} activeFilterKey={activeFilterKey} setFilterKey={setFilterKey} onTableOrderChange={onTableOrderChange} />:<span className="title">{title}</span>}
  </TableCell>);
};

const TableTD = ({ text, component, props, styles }) => {
  const classes = useTdStyles(styles);
  return (<TableCell
      classes={{ root: classes.table_td, sizeSmall: classes.table_size }}
    >
      {component ? React.createElement(component, props) : text}
  </TableCell>);
};

const TableRows = ({ rowData }) => {
  return (<TableRow>
      {rowData.map((td, index) => {
        return <TableTD key={`tbtd${index}`} {...td} />;
      })}
  </TableRow>);
};

const TableHD = ({columns,onTableOrderChange}) =>{
  const [filterKey,setFilterKey] = useState('-'); 
  
  return (<TableHead>
    <TableRow>
      {columns.map((column, index) => {
        return <TableTH key={`tbhd${index}`} {...column} filterKey={`tbhd${index}`} activeFilterKey={filterKey} setFilterKey={setFilterKey} onTableOrderChange={onTableOrderChange} />;
      })}
    </TableRow>
  </TableHead>)
}

const TableList = ({ columns, rows, styles, minWidth=800, showTopScroll=false, onTableOrderChange }) => {
  const rootClasses = useTableRootStyles(styles);
  const tableClasses = useTableStyles(minWidth);
  const scrollTop = useRef(null);
  const scrollBottom = useRef(null);
  
  useEffect(()=>{
    if(showTopScroll){ 
      scrollTop.current.onscroll = ({target}) =>{
        scrollBottom.current.scrollLeft = target.scrollLeft;
      }
      scrollBottom.current.onscroll = ({target}) =>{
        scrollTop.current.scrollLeft = target.scrollLeft;
      }
    }
  },[])
  

  return (<Paper className={rootClasses.root}>
    {showTopScroll && <div ref={scrollTop} className={tableClasses.wrapper}><div className="top_scroll"></div></div>}
    <div ref={scrollBottom} className={tableClasses.wrapper}>
      <Table  size="small" className={tableClasses.table}>
        <TableHD columns={columns} onTableOrderChange={onTableOrderChange} />
        <TableBody>
          {rows && 
            rows.map((row, index) => {
              return <TableRows key={`tbrw${index}`} rowData={row} />;
            })}
        </TableBody>
      </Table>
    </div>
  </Paper>);
};

export default TableList;
