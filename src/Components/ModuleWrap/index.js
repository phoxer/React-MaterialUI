import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import useStyles from './styles';

const ModuleHeader = ({ classes, title, icon, onModuleOptions }) => {
  return (
    <Fragment>
      <Box className={classes.header} display="flex" alignItems="center" m={1}>
        {icon && React.createElement(icon, { className: classes.header_icon })}
        <Typography className={classes.header_title} component="h1">
          {title}
        </Typography>
        {onModuleOptions && (
          <IconButton
            className={classes.header_options}
            onClick={() => onModuleOptions({ open: true })}
          >
            <DeveloperBoardIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
    </Fragment>
  );
};

const ModuleWrap = ({ children, title, icon, onModuleOptions }) => {
  const classes = useStyles();
  return (
    <Container className={classes.module_wrap} maxWidth={false}>
      {title && (
        <ModuleHeader
          classes={classes}
          title={title}
          icon={icon}
          onModuleOptions={onModuleOptions}
        />
      )}
      {children}
    </Container>
  );
};

export default ModuleWrap;
