import React from 'react'
import CommentAns from './CommentAns';
import Avatar from '@mui/material/Avatar';
import HelpIcon from '@mui/icons-material/Help';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import growthIcon from '../Components/growth.png';

export default function ViewQues() {

    const Input = styled('input')({
        display: 'none',
    });

    const replyHandler = () => {
        <CommentAns />
    }

    return (
        <div>
            <div className="ques-ans-view" style={{  margin: 'auto', marginTop: '10px', padding: '5px 5px 5px 5px', width: '90vw' }}>
                <div className="ques-view">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sit suscipit ipsam totam nesciunt illum molestiae maxime culpa id explicabo?</p>
                    <span><ThumbUpIcon sx={{ color: 'green', position: 'relative', marginRight: '15px' }} /></span>
                    <span><ThumbDownAltIcon sx={{ color: 'red' }} /></span>
                </div>
                <Divider variant="inset" component="li"  />
                <div className="posted-ans" style={{ border: '1px solid black', margin: '10px auto 10px', width: '80%', padding: '10px 10px 10px 10px', borderRadius:'15px',boxShadow:'-2px 2px 2px black' }}><span>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '60px', height: '60px' }} /></span>
                    <div className="comment-auth-name" style={{ marginLeft: '8%', marginTop: '-50px', position: 'relative', fontWeight: '500', width: '700px' }}>
                        <h5 >Name of author</h5></div>
                    <div className="ans-text" style={{ marginTop: '20px', marginLeft: '8%' }}>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam ex enim natus dolores? Eum minima suscipit vel iste voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos quidem fugiat, recusandae quaerat ea repellat nam quo natus neque?</p>
                        <span><ThumbUpIcon sx={{ color: 'green', position: 'relative', marginRight: '15px' }} /></span>
                        <span><ThumbDownAltIcon sx={{ color: 'red' }} /></span>
                    </div>


                </div>
            </div>
            <Divider variant="middle" />
            <span>
            <div className="comment-ans" style={{marginLeft:'13.5%'}} >
                <div className="comment-icons" style={{ height: '25%', width: '100%', borderRadius: '15px' }}>
                    <span style={{ marginRight: '0.8%' }}> <FormatBoldIcon /> </span>
                    <span style={{ marginRight: '0.8%' }}> <FormatItalicIcon /> </span>
                    <span style={{ marginRight: '0.8%' }}> <AddLinkIcon /> </span>
                    <span style={{ marginRight: '0.8%' }}> <AttachFileIcon /> </span>
                    <span style={{ marginRight: '0.8%' }}> <FormatIndentDecreaseIcon /> </span>
                    <span style={{ marginRight: '0.8%' }}> <FormatIndentIncreaseIcon /> </span>
                    <span style={{ marginLeft: '32%', position: 'absolute' }}> <HelpIcon /> </span>
                </div>
                <div className="comment-text" style={{ marginTop: '15px', margin: '10px 10px 10px 0px', padding: '5px 5px 5px 5px', borderRadius: '5px' }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write your response here..."
                        multiline
                        rows={4}
                        sx={{ width: '100%' }}
                    />
                </div>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <Button variant="contained" endIcon={<SendIcon />} style={{ marginLeft: '60%' }}>
                        Post
                    </Button>
                </Stack>

            </div></span>
            <img src={growthIcon} alt="" style={{width:'250px', marginLeft:'1150px', marginTop:'-240px'}} />
            
        </div >
    )
}
