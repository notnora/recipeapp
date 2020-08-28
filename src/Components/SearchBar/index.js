import React from 'react';
import { TextField } from '@material-ui/core';
import './style.css';

export const SearchBar = props => {

  const [inputValue, setInputValue] = React.useState("");

  const handleChange = event => {
    setInputValue(event.target.value);
    props.search(event.target.value); // <-- Searching-function
  };

  return(
      <div className="search-bar">
      <TextField id="s-bar"
                 value={inputValue}
                 onChange={handleChange}
                 type="text"/>
      </div>
  );
};
export default SearchBar;