import React,{Fragment,useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ExpandLess,ExpandMore,Person } from '@material-ui/icons';
import useStyle from './styles';
import {isUndefined,isArray,isBoolean} from 'lodash'; 

const SubMenuIcon = ({open}) => {
  return open? <ExpandLess /> : <ExpandMore />
}

const NavItem = ({title,onClick,data,icon,open}) =>{
  const classes = useStyle();
  const onItemClick = () => !isUndefined(data)? onClick(data):onClick(!open);
  return (<ListItem className={classes.list_item} onClick={onItemClick} button>
      {icon && <ListItemIcon className={classes.list_icon}>
        {React.createElement(icon)}
      </ListItemIcon>}
      <Typography className={classes.list_item_title} variant="h6">{title}</Typography>
      {isBoolean(open) && <SubMenuIcon open={open} />}
    </ListItem>)
}

const NavSubMenu = ({title,icon,list,onItemsClick}) =>{
  const [open,setOpen] = useState(false);
  return (<Fragment>
      <NavItem onClick={setOpen} open={open} title={title} icon={icon} />
      <Collapse in={open} unmountOnExit>
        <NavList list={list} onItemsClick={onItemsClick} />
      </Collapse>
  </Fragment>)
}

export const NavList = ({title,onItemsClick,list}) =>{
  const classes = useStyle();
  return(<Fragment>
      {title && <Typography className={classes.list_title} variant="h6">{title}</Typography>}
      <List className={classes.list}>
        {list.map((item,index)=>{
          const {list} = item;
          return isArray(list)? <NavSubMenu key={`nvsm${index}`} onItemsClick={onItemsClick} {...item} />:<NavItem key={`nvitm${index}`} onClick={onItemsClick} {...item} />
        })}
      </List>
  </Fragment>)
}


export const NavMenu = ({ open, onClose, onItemsClick, styles, data , children }) => {
  const classes = useStyle(styles);
  return (
    <Drawer open={open} onClose={() => onClose(false)} classes={{paper:classes.menu_paper}}>
      {children}
      {data.map((list,index)=>{
        return <NavList key={`nvlst${index}`} onItemsClick={onItemsClick} {...list} divider />
      })}
    </Drawer>
  );
};

