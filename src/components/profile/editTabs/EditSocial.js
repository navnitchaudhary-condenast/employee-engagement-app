import React from 'react';
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';

const EditSocial = () => {
    return (
        <Grid container spacing={2} sx={{maxWidth: 'sm'}}>
            <Grid item xs={12}>
                <TextField
                    type="url"
                    fullWidth
                    id="linkedin"
                    label="LinkedIn"
                    name="linkedin"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    type="url"
                    fullWidth
                    id="facebook"
                    label="Facebook"
                    name="facebook"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    type="url"
                    fullWidth
                    id="instagram"
                    label="Instagram"
                    name="instagram"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    type="url"
                    fullWidth
                    id="twitter"
                    label="Twitter"
                    name="twitter"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    type="url"
                    fullWidth
                    id="snapchat"
                    label="SnapChat"
                    name="snapchat"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    type="url"
                    fullWidth
                    id="stackoverflow"
                    label="StackOverflow"
                    name="stackoverflow"
                    size='small'
                />
            </Grid>
        </Grid >
    );
};

export default EditSocial;