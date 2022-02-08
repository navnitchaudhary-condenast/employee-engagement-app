import React from 'react';
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';

const EditInterests = () => {

    return (
        <Grid container spacing={2} sx={{maxWidth: 'sm'}}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="food"
                    label="Food"
                    name="food"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="music"
                    label="Music"
                    name="music"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="sports"
                    label="Sports"
                    name="sports"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="books"
                    label="Books"
                    name="books"
                    size='small'
                />
            </Grid>
        </Grid >
    );
};

export default EditInterests;