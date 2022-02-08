import React from 'react';
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';

const EditOfficial = () => {

    return (
        <Grid container spacing={2} sx={{maxWidth: 'sm'}}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="cnOffice"
                    label="CN Office"
                    name="cnOffice"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="cnTeam"
                    label="CN Team/Project"
                    name="cnTeam"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="role"
                    label="Role"
                    name="role"
                    size='small'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="skillset"
                    label="Skill Set"
                    name="skillset"
                    size='small'
                    multiline
                    rows={3}
                />
            </Grid>
        </Grid >
    );
};

export default EditOfficial;