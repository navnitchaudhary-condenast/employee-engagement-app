import React, { useContext } from 'react';
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';
import EditProfileContext from '../editProfileContext';

const EditInterests = () => {
    const { interestsInfo, updateInterestsInfo } = useContext(EditProfileContext);

    return (
        <Grid container spacing={2} sx={{maxWidth: 'sm'}}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="food"
                    label="Food"
                    name="food"
                    size='small'
                    value={interestsInfo.food}
                    onChange={(newValue) => updateInterestsInfo('food', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="music"
                    label="Music"
                    name="music"
                    size='small'
                    value={interestsInfo.music}
                    onChange={(newValue) => updateInterestsInfo('music', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="sports"
                    label="Sports"
                    name="sports"
                    size='small'
                    value={interestsInfo.sports}
                    onChange={(newValue) => updateInterestsInfo('sports', newValue)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="books"
                    label="Books"
                    name="books"
                    size='small'
                    value={interestsInfo.books}
                    onChange={(newValue) => updateInterestsInfo('books', newValue)}
                />
            </Grid>
        </Grid >
    );
};

export default EditInterests;