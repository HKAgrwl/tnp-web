import React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


export default function Tags() {
    return <div>
        <Stack spacing={3} sx={{ borderRadius:'5px',zIndex:'450',position:'absolute',left:'690px',top:'160px',width:'30%' }}>
            <Autocomplete
                multiple
                id="tags-filled"
                options={defTags.map((option) => option.title)}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="filled"
                        label="Select Tags"
                        placeholder=""
                    />
                )}
            />
        </Stack>
    </div>;
}
const defTags = [
    { title: 'Amazon', year: 1994 },
    { title: 'Microsoft', year: 1994 },
    { title: 'Qualcomm', year: 1994 },
    { title: 'Meta', year: 1994 },
];
