import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Tags from './Tags';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SavedResponseList from './SavedResponseList.js';
import { useState } from 'react';






export default function CreateInt() {
    const [inputAns,setInputAns] = useState("");
    const [inputQues,setInputQues] = useState("");
    const [response,setResponse] = useState([]);
    const [checked, setChecked] = React.useState(false);

    const inputTextHandler=(e)=>{
        setInputQues(e.target.value)
    }

    const inputAnsHandler=(e)=>{
        setInputAns(e.target.value)
    }

    const saveQuesHandler =()=>{
        setResponse([
            ...response,{value:{inputTextHandler}}
        ])
    }

    const addQuesHandler =()=>{
        setInputAns('');
        setInputQues('');
    }

    const defTags = [
        { title: 'Amazon', year: 1994 },
        { title: 'Microsoft', year: 1994 },
        { title: 'Qualcomm', year: 1994 },
        { title: 'Meta', year: 1994 },
    ];

    const tags = (
        <Stack spacing={3} sx={{ borderRadius: '5px',position: 'absolute', marginLeft: '400px',  width: '50%',marginTop:'-105px' }}>
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
    );
    

    const title = (
        <TextField sx={{ width: '80%', height: '10%', color:'red' }}
            id="outlined-multiline-static"
            label="Write the title here"
            multiline
            rows={1}
        />
    );

    const question = (
        <TextField sx={{ width: '80%', height: '10%' }}
            id="outlined-multiline-static"
            label="Write the question here"
            multiline
            rows={2}
            value={inputQues}
            onChange={inputTextHandler}
        />
    );

    const answer = (
        <TextField sx={{ width: '80%', height: '10%' }}
            id="outlined-multiline-static"
            label="Write the answer here"
            multiline
            rows={4}
            onChange={inputAnsHandler}
            value={inputAns}
        />
    );

    const saveQuestion = (
        <Button sx={{ position: 'absolute', marginTop: '180px',paddingRight:'10px', right:'28%'}} variant="contained" color="success" onClick={saveQuesHandler}>Save Question</Button>
    );

    const addQuestion = (
        <Button sx={{ position: 'absolute', marginTop: '180px', right:'16%' }} variant="contained" color="success" onClick={addQuesHandler} >Add Question</Button>
    );

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return <div>
        <div style={{ height: '110vh', width: '100vw', padding: '50px', backgroundColor: 'white', borderRadius: '5px', marginTop:'45px' }}>
            <h3>Create Interview</h3>
            <Button onClick={handleChange} sx={{ position: 'absolute', marginTop: '63px' }} variant="contained" color="success">
                Create Interview +
            </Button>
            <Divider variant="middle" />
            <div className="Create_Int">
                <Box>
                    <Box>
                        <Grow in={checked}>{tags}</Grow>
                    </Box>
                </Box>
                <Box sx={{ height: 680 }}>
                    <Box sx={{ display: 'flex', marginLeft: '330px', marginTop: '150px' }}>
                        <Grow in={checked}>{title}</Grow>
                    </Box>
                </Box>
                <Box sx={{ height: 680 }}>
                    <Box sx={{ display: 'flex', marginLeft: '330px', marginTop: '-600px' }}>
                        <Grow in={checked}>{question}</Grow>
                    </Box>
                </Box>
                <Box sx={{ height: 680 }}>
                    <Box sx={{ display: 'flex', marginLeft: '330px', marginTop: '-580px' }}>
                        <Grow in={checked}>{answer}</Grow>
                    </Box>
                </Box>
                <span>
                    <Box sx={{ height: 280 }}>
                        <Box sx={{ display: 'flex', marginLeft: '0px', marginTop: '-680px' }}>
                            <Grow in={checked}>{saveQuestion}</Grow>
                        </Box>
                    </Box></span>
                <span>
                    <Box sx={{ height: 280 }}>
                        <Box sx={{ marginLeft: '158px', marginTop: '-280px' }}>
                            <Grow in={checked}>{addQuestion}</Grow>
                        </Box>
                    </Box></span>
            </div>
            <SavedResponseList response={response} setResponse={setResponse} />
        </div>
    </div>;
}
