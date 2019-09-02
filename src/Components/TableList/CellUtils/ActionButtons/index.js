import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//mport useStyle from './styles';

const ActionButtons = () =>{
    //const classes = useStyle();

    return (<ButtonGroup variant="contained">
        <Button color="secondary">One</Button>
        <Button color="primary">Two</Button>
        <Button>Three</Button>
      </ButtonGroup>)
}

export default ActionButtons;



