import React from 'react';
import { FormControl, FormLabel, FormHelperText } from '@material-ui/core';

const CheckField = ({ label, error, children, size, variant  }) =>{
    return (<FormControl size={size} variant={variant}>
        <FormLabel>{label}</FormLabel>
        {children}
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>)
}

export default CheckField;