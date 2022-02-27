import React from 'react';
import TextField from '@mui/material/TextField';

const savedAns = (
    <TextField sx={{ width: '100%', height: '10%', marginTop:'10px' }}
        id="outlined-multiline-static"
        label=""
        multiline
        rows={6}
        value=""
    />
);

export default function SavedResponse() {
  return (
    <div>
        <li>{savedAns}</li>
    </div>
  )
}
