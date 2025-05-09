import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <TextField
      placeholder="Search..."
      variant="outlined"
      size="small"
      sx={{
        width: 250,
        '& .MuiInputBase-root': {
          height: 38, 
        },
        '& input': {
          padding: '10px 5px', // Control padding inside input
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: '#888' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
