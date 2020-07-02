import React from 'react';
import ModuleWrap from '../../Components/ModuleWrap';
import DataSelector from '../../Components/Forms/DataSelector';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

/*
const persons = [
  {value:{id:1,name:"Roberto1",surname:"Baglieri1"},text:"Roberto1"},
  {value:{id:2,name:"Roberto2",surname:"Baglieri2"},text:"Roberto2"},
  {value:{id:3,name:"Roberto3",surname:"Baglieri3"},text:"Roberto3"},
  {value:{id:4,name:"Roberto4",surname:"Baglieri4"},text:"Roberto4"},

]
*/
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
