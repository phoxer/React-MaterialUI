import React,{ useState } from 'react';
import Switch from '@material-ui/core/Switch';
import useStyle from './styles';

const StatusSwitch = ({state,data,onChange}) =>{
    const [switchState,setState] = useState(state);
    const classes = useStyle();

    const onStateChange = () =>{
        setState(!switchState)
        onChange({state:!switchState,...data});
    }

    return (<Switch
        disableRipple
        checked={switchState}
        onChange={onStateChange}
        classes={{
            switchBase:classes.switchBase,
            checked:classes.checked,
            track:classes.track
        }}
    />)
}

export default StatusSwitch;