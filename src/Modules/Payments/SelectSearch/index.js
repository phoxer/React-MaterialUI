import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const mockData = [
  { id: 1, title: 'Option 1' },
  { id: 2, title: 'Option 2' },
  { id: 3, title: 'Option 3' },
  { id: 4, title: 'Option 4' }
];

const SelectSearch = ({ label, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const onSlectItem = ({ target }) => {
    setSelectedValue(target.value);
    onSelect(target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select value={selectedValue} onChange={e => onSlectItem(e)}>
        {mockData.map(data => {
          return (
            <MenuItem key={`sl${data.id}`} value={data.id}>
              {data.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectSearch;
