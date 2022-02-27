import React from 'react'
import Avatar from '@mui/material/Avatar';

export default function CommentAns() {
    return (
        <div>
            <div className="comment-ans"><span>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '60px', height: '60px' }} /></span>
                <div className="comment-auth-name" style={{ marginLeft: '3%', marginTop: '5px', position: 'relative', fontWeight: '500', width: '700px' }}>
                    <h5 >Name of author</h5></div>
                <div className="comment-text" style={{ marginTop: '42px', marginLeft: '-35%'}}>
                    <p >This is an existing answer by another user to the same querstion.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam ex enim natus dolores? Eum minima suscipit vel iste voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos quidem fugiat, recusandae quaerat ea repellat nam quo natus neque?</p>
                </div>


            </div>
        </div>
    )
}
