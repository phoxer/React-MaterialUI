import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const IconText = ({ icon, text, color }) => {
  const classes = useStyles({ color: color });
  return (
    <Box
      display="flex"
      alignItems="center"
      p={0}
      m={0}
      className={classes.icon_text}
    >
      {icon && React.createElement(icon)}
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
};

export default IconText;
