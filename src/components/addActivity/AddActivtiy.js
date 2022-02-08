import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const AddActivity = () => { 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.log({
          title: title,
          description: description
        });
      };

    return (
        <React.Fragment>
            <Container component="main">
                <Typography component="h1" variant="h5">
                    Add Activity
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} 
                    sx={{ mt: 3,  '& .MuiTextField-root': { m: 1, width: '75ch' } }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="title" placeholder="Enter activity name" required 
                                fullWidth label="Activity Title" variant="standard" margin="normal" 
                                onInput={ e=>setTitle(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="description" label="Description" multiline 
                                variant="standard" fullWidth margin="normal"
                                onInput={ e=>setDescription(e.target.value)}/>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField id="rules" label="Rules" multiline  variant="standard" fullWidth margin="normal"/>
                        </Grid> */}
                    </Grid>
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Add Activity
                    </Button>
                </Box>
            </Container>
        </React.Fragment>
    );
  };

export default AddActivity;