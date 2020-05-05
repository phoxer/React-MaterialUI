/* v1.0.2 */
import React,{useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const getInitialValue = (initialValue,data) =>{
    const initialValueKey = Object.keys(initialValue)[0];
    console.log(initialValueKey)
    const valueIndex = data.findIndex(({value})=>{
        return value.hasOwnProperty(initialValueKey) && value[initialValueKey] === initialValue[initialValueKey];
    })
    return valueIndex===-1? '':valueIndex;
}

const buildDataSelectorFormat = (data,keyToShow) =>{
    let options;
    if(keyToShow){
        options = data.map(dt=>{
            return {value:dt,text:dt[keyToShow]}
        })
    }else{
        options = data.map(dt=>{
            return {value:dt,text:dt};
        })
    }
    return options;
}

const DataSelector = ({label,name,data,keyToShow,initialValue,onChange,variant="standard"}) =>{
    const optionsData = buildDataSelectorFormat(data,keyToShow);
    const [value,setValue] = useState(initialValue? getInitialValue(initialValue,optionsData):'');
    const onOptionSelected = ({target}) =>{
        setValue(target.value);
        onChange(optionsData[target.value].value);
    }

    console.log(value)

    return (<FormControl variant={variant} margin="normal" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
            id={name}
            name={name}
         
            value={value}
            onChange={onOptionSelected}
        >
            {optionsData.map(({text},index)=>{
              return <MenuItem key={`${name}_${index}`} value={index}>{text}</MenuItem>
            })}
            
        </Select>
    </FormControl>)
}

export default DataSelector;