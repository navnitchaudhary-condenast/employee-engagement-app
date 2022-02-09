import React, { useContext } from 'react';
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';
import EditProfileContext from '../editProfileContext';

const EditOfficial = () => {
    const { officialInfo, updateOfficialInfo } = useContext(EditProfileContext);

    return (
        <Grid container spacing={2} sx={{maxWidth: 'sm'}}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="name"
                    label="CN Office"
                    name="name"
                    size='small'
                    value={officialInfo.name || ''}
                    onChange={(newValue) => updateOfficialInfo('name', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="team"
                    label="CN Team/Project"
                    name="team"
                    size='small'
                    value={officialInfo.team || ''}
                    onChange={(newValue) => updateOfficialInfo('team', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="role"
                    label="Role"
                    name="role"
                    size='small'
                    value={officialInfo.role || ''}
                    onChange={(newValue) => updateOfficialInfo('role', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="skillSet"
                    label="Skill Set"
                    name="skillSet"
                    size='small'
                    multiline
                    rows={3}
                    value={officialInfo.skillSet || ''}
                    onChange={(newValue) => updateOfficialInfo('skillSet', newValue)}
                />
            </Grid>
        </Grid >
    );
};

export default EditOfficial;