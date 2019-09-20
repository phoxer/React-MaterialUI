import React, { useState, useEffect } from 'react';
import ModuleWrap from '../../Components/ModuleWrap';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const FormSample = () => {
  const onValueChange = values => {
    console.log(values);
    //console.log({ [target.name]: target.value });
  };

  return (
    <ModuleWrap title="Form Samplea">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <NumberFormat
            fullWidth
            customInput={TextField}
            label="Telefono:"
            name="telefono"
            format="(##) ####-####"
            mask="_"
            onValueChange={values => onValueChange(values)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NumberFormat
            fullWidth
            customInput={TextField}
            label="Monto:"
            name="dinero"
            thousandSeparator={true}
            prefix={'$'}
            onValueChange={values => onValueChange(values)}
          />
        </Grid>
      </Grid>
    </ModuleWrap>
  );
};

export default FormSample;
