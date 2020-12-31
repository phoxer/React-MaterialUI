import React from 'react';
import useFormData from 'Hooks/useFormData';
import ModuleWrap from 'Components/ModuleWrap';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const FormSample = () => {

  const formData = useFormData([
    {id:"name",label:"Full Name",value:"",errorMessage:"Put the name!"},
    {id:"email",label:"E-Mail",value:"",errorMessage:"Write your email!"}
  ]);

  console.log('formData',formData)

  return (<ModuleWrap title="Form Samplea">
    <Box display="flex" flexDirection="column">
      <TextField {...formData.name} />
      <TextField {...formData.email} variant="filled" />
      <TextField id="standard-basic" label="Standard" />
      <TextField select id="standard-basic" label="Standard" >
        <MenuItem value={"Option 1"}>Option 1</MenuItem>
        <MenuItem value={"Option 2"}>Option 2</MenuItem>
      </TextField>
      <Button variant="contained">SEND DATA</Button>
    </Box>
  </ModuleWrap>)

}

export default FormSample;
/*
import ModuleWrap from '../../Components/ModuleWrap';
import DataSelector from '../../Components/Forms/DataSelector';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const persons = [
  {id:1,name:"Roberto1",surname:"Baglieri1"},
  {id:2,name:"Roberto2",surname:"Baglieri2"},
  {id:3,name:"Roberto3",surname:"Baglieri3"},
  {id:4,name:"Roberto4",surname:"Baglieri4"},
]

const platforms = ["facebook","twitter","Instagram"];

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
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
            <DataSelector name="persons" label="Persons" initialValue={{id:2}} keyToShow="name" data={persons} onChange={onValueChange} variant="standard" />
        </Grid>
        <Grid item xs={12} sm={4}>
            <DataSelector name="platforms" label="Platforms" initialValue="Instagram" data={platforms} onChange={onValueChange} variant="standard" />
        </Grid>
      </Grid>

      
    </ModuleWrap>
  );
};

export default FormSample;
*/
