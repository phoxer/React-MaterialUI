import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import useStyle from './styles';

const StatusSwitch = ({ state, data, onChange }) => {
  const [switchState, setState] = useState(Boolean(state));
  const classes = useStyle();

  const onStateChange = () => {
    setState(!switchState);
    onChange({ state: !switchState, ...data });
  };

  return (
    <Box align="center" p={0} m={0}>
      <Switch
        disableRipple
        checked={switchState}
        onChange={onStateChange}
        classes={{
          switchBase: classes.switchBase,
          checked: classes.checked,
          track: classes.track
        }}
      />
    </Box>
  );
};

export default StatusSwitch;
