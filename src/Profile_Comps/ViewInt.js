import React from 'react';
import Avatar from '@mui/material/Avatar';
import InterviewInfo from './InterviewInfo';


export default function ViewInt() {
    return (
        <div>
            <div className="view_int_header" style={{marginTop:'55px'}}>
                <span>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
                        sx={{ width:'80px',height:'80px' }} />
                </span>
                <span style={{marginLeft:'25px',marginTop:'10px'}}>
                    <h5>Name of the author</h5>
                    <p>2 likes</p>
                </span>
            </div>
            <div className="view_int_body">
                <div className="view_int_body_title" style={{marginBottom:'20px'}}>
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                </div>
                <InterviewInfo/>
                <InterviewInfo/>
                <InterviewInfo/>
                <InterviewInfo/>
                <InterviewInfo/>
            </div>
        </div>
    )
}
