import React, { useContext } from 'react';
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';
import EditProfileContext from '../editProfileContext';

const EditSocial = () => {
    const { socialInfo, updateSocialInfo } = useContext(EditProfileContext);

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
                    value={socialInfo.linkedin || ''}
                    onChange={(newValue) => updateSocialInfo('linkedin', newValue)}
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
                    value={socialInfo.facebook || ''}
                    onChange={(newValue) => updateSocialInfo('facebook', newValue)}
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
                    value={socialInfo.instagram || ''}
                    onChange={(newValue) => updateSocialInfo('instagram', newValue)}
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
                    value={socialInfo.twitter || ''}
                    onChange={(newValue) => updateSocialInfo('twitter', newValue)}
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
                    value={socialInfo.snapchat || ''}
                    onChange={(newValue) => updateSocialInfo('snapchat', newValue)}
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
                    value={socialInfo.stackoverflow || ''}
                    onChange={(newValue) => updateSocialInfo('stackoverflow', newValue)}
                />
            </Grid>
        </Grid >
    );
};

export default EditSocial;