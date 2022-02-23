import React from 'react'
import tags from './Profile_Comps/Tags'
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const skills = [
    {title: 'Android'},
    {title: 'Machine Learning'},
    {title: 'FrontEnd'},
    {title: 'BackEnd'},
    {title: 'Web3'}
];

export default function () {
    return (
        <div>
            <body class="form-v10">
                <div class="page-content">
                    <div class="form-v10-content">
                        <form class="form-detail" action="#" method="post" id="myform">
                            <div class="form-left">
                                <h2>General Infomation</h2>
                                <div class="form-row">
                                    <span class="select-btn">
                                        <i class="zmdi zmdi-chevron-down"></i>
                                    </span>
                                </div>
                                <div class="form-group">
                                    <div class="form-row form-row-1">
                                        <input type="text" name="first_name" id="first_name" class="input-text" placeholder="First Name"
                                            required="" />
                                    </div>
                                    <div class="form-row form-row-2">
                                        <input type="text" name="last_name" id="last_name" class="input-text" placeholder="Last Name" required="" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <select name="Batch">
                                        <option value="position">Batch: 2021</option>
                                        <option value="director">Batch: 2022</option>
                                        <option value="manager">Batch: 2023</option>
                                        <option value="employee">Batch: 2024</option>
                                    </select>
                                    <span class="select-btn">
                                        <i class="zmdi zmdi-chevron-down"></i>
                                    </span>
                                </div>
                                <div class="form-row">
                                    <input type="text" name="Email" class="Email" id="Email" placeholder="Email Address" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" required="" />
                                </div>
                                <div class="form-group">
                                    <div class="form-row form-row-3">
                                        <input type="text" name="business" class="business" id="business" placeholder="Current Company"
                                            required="" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <Autocomplete sx={{row:'2'}}
                                        multiple
                                        id="tags-filled"
                                        options={skills.map((option) => option.title)}
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
                                                label="Your Skills"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div class="form-right">
                                <h2>Other Details</h2>
                                <div class="form-row">
                                    <input type="text" name="linkedin" class="linkedin" id="linkedin" placeholder="Linkedin" required="" />
                                </div>
                                <div class="form-row">
                                    <input type="text" name="twitter" class="twitter" id="twitter" placeholder="Twitter"
                                        required="" />
                                </div>
                                <div class="form-row">
                                    <input type="text" name="facebook" class="facebook" id="facebook" placeholder="Facebook"
                                        required="" />
                                </div>
                                <div class="form-group">
                                    <div class="form-row form-row-1">
                                        <input type="text" name="code" class="code" id="code" placeholder="+91" required="" />
                                    </div>
                                    <div class="form-row form-row-2">
                                        <input type="text" name="phone" class="phone" id="phone" placeholder="Phone Number" required="" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <input type="text" name="your_email" id="add_details" class="input-text" required=""
                                        placeholder="Additional Details" />
                                </div>
                                {/* <div class="form-checkbox">
                                    <label class="container">
                                        <p>I do accept the <a href="#" class="text">Terms and Conditions</a> of your site.</p>
                                        <input type="checkbox" name="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div> */}
                                <div class="form-row-last">
                                    <input type="submit" name="register" class="register" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </body>
        </div>

    )
}
