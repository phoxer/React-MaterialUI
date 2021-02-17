import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { showFieldError } from 'Components/Forms/Utils';
import ModuleWrap from 'Components/ModuleWrap';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const FormSample = () => {
  const classes = useStyles();
  const { control, errors, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log("FORM SUBMITED", data);
  };

  return (<ModuleWrap title="React Hook Sample">
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>

        <Controller as={TextField} className={classes.text_field} name="name" rules={{ required: "Please type your name." }} label="Name:" {...showFieldError(errors.name)}  control={control} defaultValue="" variant="outlined" size="small" />
        <Controller as={TextField} className={classes.text_field} name="email" label="Email:" {...showFieldError(errors.email)} rules={{ required: "Please type your name." }} control={control} defaultValue="" variant="outlined" size="small" />
        <Controller name="currency" control={control} defaultValue="EUR" render={({ onChange, value }) =>{
          return (<TextField select label="Currency:" value={value} onChange={(e) => onChange(e.target.value)} variant="outlined" size="small" className={classes.text_field} >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          );
        }} />
        <Controller
          control={control}
          name="terms"
          rules={{ required: "You must accept terms and conditions." }}
          defaultValue={false}
          render={({ onChange, value }) => {
            return (<FormControlLabel
              control={<Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />}
              label="Acept Terms and Conditions" size="small" variant="outlined"
            />)}
          }
        />
        {errors.terms && <FormHelperText className={classes.error_message}>{errors.terms.message}</FormHelperText>}
        <Controller
          control={control}
          name="radios"
          rules={{ required: "You must select radios." }}
          defaultValue=""
          render={({ onChange, value }) => {
            return (<FormControl component="fieldset" size="small" variant="outlined">
              <FormLabel>Acept Terms and Conditions</FormLabel>
              <RadioGroup name="radios" value={value} onChange={(e) =>onChange(e.target.value)}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                  <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
              </RadioGroup>
            </FormControl>)}
          }
        />
        {errors.radios && <FormHelperText className={classes.error_message}>{errors.radios.message}</FormHelperText>}
        <Controller as={TextField} multiline={true} rows={4} className={classes.text_field} name="comments" label="Comments:" control={control} defaultValue="" variant="outlined" size="small" />
        <Button type="submit" variant="contained">SEND DATA</Button>
      </form>
  </ModuleWrap>)

}

export default FormSample;