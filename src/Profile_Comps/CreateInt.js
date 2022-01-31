import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Tags from './Tags';

const icon = (
    <TextField sx={{ width: '80%', height: '300px' }}
        id="outlined-multiline-static"
        label="Write Here"
        multiline
        rows={4}
    />
);

const icon2 = (
    <Button sx={{ position: 'absolute', marginTop: '180px', marginLeft: '924px' }} variant="contained" color="success">Add</Button>
    // <Tags/>
);

// const icon3 = (
//     <Tags/>
// );

export default function CreateInt() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return <div>
        <Tags  sx={{ borderRadius:'5px',zIndex:'450',position:'absolute',left:'700px',top:'160px',width:'30%' }}/>
        <Box sx={{ marginTop: '0px', border: '2px solid black', height: '100vh', width: '78.5vw', marginLeft: '309px', padding: '12px 50px', backgroundColor: 'white', boxShadow: '-4px 5px 5px black', borderRadius: '5px' }}>
            <h3>Create Interview</h3>
            <Button onClick={handleChange} sx={{ position: 'absolute', marginTop: '63px' }} variant="contained" color="success">
                Create Interview +
            </Button>
            <Divider variant="middle" />
            <Box sx={{ height: 680 }}>
                <Box sx={{ display: 'flex', marginLeft: '330px', marginTop: '120px' }}>
                    <Grow in={checked}>{icon}</Grow>
                </Box>
            </Box>
            <Box sx={{ height: 280 }}>
                <Box sx={{ display: 'flex', marginLeft: '0px', marginTop: '-680px' }}>
                    <Grow in={checked}>{icon2}</Grow>
                </Box>
            </Box>
            {/* <Box>
                <Box>
                    <Grow in={checked}>{icon3}</Grow>
                </Box>
            </Box> */}
        </Box>
    </div>;
}
