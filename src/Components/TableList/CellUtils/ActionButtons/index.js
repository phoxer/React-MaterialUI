import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import useStyle from './styles';

const ActionButton = ({ icon, onClick, data, color }) => {
  const classes = useStyle({ color: color });
  return (
    <IconButton className={classes.action_button} onClick={() => onClick(data)}>
      {React.createElement(icon)}
    </IconButton>
  );
};

const ActionButtons = ({ buttons }) => {
  return (
    <Box align="center" p={0} m={0}>
      {buttons.map((btn, index) => {
        return <ActionButton key={`abtn${index}`} {...btn} />;
      })}
    </Box>
  );
};

export default ActionButtons;
