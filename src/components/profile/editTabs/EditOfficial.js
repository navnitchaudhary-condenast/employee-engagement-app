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
                    id="cnOffice"
                    label="CN Office"
                    name="cnOffice"
                    size='small'
                    value={officialInfo.cnOffice || ''}
                    onChange={(newValue) => updateOfficialInfo('cnOffice', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="cnTeam"
                    label="CN Team/Project"
                    name="cnTeam"
                    size='small'
                    value={officialInfo.cnTeam || ''}
                    onChange={(newValue) => updateOfficialInfo('cnTeam', newValue)}
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
                    id="skillset"
                    label="Skill Set"
                    name="skillset"
                    size='small'
                    multiline
                    rows={3}
                    value={officialInfo.skillset || ''}
                    onChange={(newValue) => updateOfficialInfo('skillset', newValue)}
                />
            </Grid>
        </Grid >
    );
};

export default EditOfficial;