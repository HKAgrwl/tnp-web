import React from 'react';
import Box from '@mui/material/Box';
// import Divider from '@mui/material';

export default function MyPosts() {
  return <div>
      <Box id='MyPosts' sx={{ marginTop: '0px', border: '2px solid black', height: '100vh', width: '78.5vw', marginLeft: '309px', padding: '12px 50px', backgroundColor: 'white', boxShadow:'-4px 5px 5px black' ,borderRadius:'5px'}}>
            <h3>Your Posts</h3>
            {/* <Divider variant="middle" /> */}
        </Box>
  </div>;
}
