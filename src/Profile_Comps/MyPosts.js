import React from 'react';
import Box from '@mui/material/Box';
// import Divider from '@mui/material';

export default function MyPosts() {
  return <div>
      <Box id='MyPosts' sx={{ marginTop: '0px', height: '90vh', width: '100vw', padding: '12px 50px', backgroundColor: 'white',borderRadius:'5px'}}>
            <h3>Your Posts</h3>
            {/* <Divider variant="middle" /> */}
        </Box>
  </div>;
}
