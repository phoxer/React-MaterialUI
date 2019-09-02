import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles';



const ModuleHeader = ({classes,title,icon}) =>{

  return (<Fragment>
    <Box display="flex" alignItems="center" m={1}>
      {icon && React.createElement(icon,{className:classes.header_icon})}
      <Typography className={classes.header_title} component="h1">{title}</Typography>
    </Box>
    <Divider/>
  </Fragment>)
}

const ModuleWrap = ({children,title,icon}) =>{
    const classes = useStyles();
    return (<Container className={classes.module_wrap} maxWidth={false}>
        {title && <ModuleHeader classes={classes} title={title} icon={icon} />}
        {children}
    </Container>)
}

export default ModuleWrap;