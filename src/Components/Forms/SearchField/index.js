import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const SearchField = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <IconButton
        className={classes.iconButton}
        onClick={() => onSearch(searchText)}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
