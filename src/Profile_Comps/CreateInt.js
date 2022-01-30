import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const icon = (
    <TextField sx={{width:'80%',height:'300px'}}
          id="outlined-multiline-static"
          label="Write Here"
          multiline
          rows={4}
          defaultValue=""
        />
);

export default function CreateInt() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return <div>
        <Box sx={{ marginTop: '0px', border: '2px solid black', height: '100vh', width: '78.5vw', marginLeft: '309px', padding: '12px 50px', backgroundColor: 'white',boxShadow:'-4px 5px 5px black' ,borderRadius:'5px'  }}>
            <h3>Create Interview</h3>
            <Button onClick={handleChange}  sx={{ position: 'absolute', marginTop: '63px' }} variant="contained" color="success">
                Create Interview +
            </Button>
            <Divider variant="middle" />
            <Box sx={{ height: 680 }}>
                <Box sx={{ display: 'flex' ,marginLeft:'330px',marginTop:'80px'}}>
                    <Grow in={checked}>{icon}</Grow>
                </Box>
            </Box>
            <Button  sx={{ position: 'absolute', marginTop: '-480px', marginLeft:'924px'}} variant="contained" color="success">
                Add
            </Button>
        </Box>
    </div>;
}
