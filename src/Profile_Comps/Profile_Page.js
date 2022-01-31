import React from 'react';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Profile.css';
import './Sidebar.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Profile_Page() {
    return <div>
        <br></br><br />
        <Box sx={{ marginTop: '-46px', border: '2px solid black', height: '100vh', width: '78.5vw', marginLeft: '309px', padding: '12px 50px', backgroundColor: 'white' ,boxShadow:'-4px 5px 5px black' ,borderRadius:'5px' }}>
            <h5>Profile</h5>
            <p>Update your profile here</p>
            <Divider variant="middle" />
            <div className="info">
                <span className="info-t">Username:</span><span>
                    <TextField sx={{ position: 'absolute', marginLeft: '230px', marginTop: '20px' }}
                        label="Name"
                        id="outlined-size-small"
                        size="small"
                    />
                </span></div>
            <Divider variant="middle" />
            <div className="info-2">
                <span className="info-t">Links:</span><span>
                    <TextField sx={{ position: 'absolute', marginLeft: '230px', marginTop: '20px' }}
                        label="Twitter"
                        id="outlined-size-small"
                        size="small"
                    />
                    <TextField sx={{ position: 'absolute', marginLeft: '530px', marginTop: '20px' }}
                        label="Facebook"
                        id="outlined-size-small"
                        size="small"
                    />
                    <TextField sx={{ position: 'absolute', marginLeft: '830px', marginTop: '20px' }}
                        label="Linkedin"
                        id="outlined-size-small"
                        size="small"
                    />
                </span></div><Divider variant="middle" />
            <div className="info-3">
                <span className="info-t">Profile Pictute:</span><span>
                    <Avatar sx={{ position: 'absolute', marginLeft: '330px', marginTop: '20px', width: '9em', height: '9em' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </span></div>
            <Divider variant="middle" />
            <div className="info-3">
                <span className="info-t">About Me:</span><span>
                    <TextField sx={{ position: 'absolute', marginLeft: '230px', marginTop: '5px', width: '30vw' }}
                        id="filled-multiline-static"
                        label="About"
                        multiline
                        rows={7}
                        variant="filled"
                    />
                </span></div>
            <Divider variant="middle" />
        </Box>
        {/* <Box id='MyPosts' sx={{ marginTop: '-46px', border: '2px solid black', height: '100vh', width: '78.5vw', marginLeft: '309px', padding: '12px 50px', backgroundColor: 'white' }}>
            <h3>Your Posts</h3>
        </Box> */}
    </div>;
}
