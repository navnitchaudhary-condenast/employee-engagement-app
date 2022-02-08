import { Button, Box, Divider } from '@mui/material';
import { useContext } from 'react';
import EditProfileContext from './editProfileContext';
import { useHistory } from "react-router-dom";

const EditProfileActions = () => {
    const { onSaveProfile, updatingProfile } = useContext(EditProfileContext);
    let history = useHistory();


    return (
        <>
            <Divider sx={{ width: '100%', my: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', width: '100%', gap: '10px' }}>
                <Button
                    type="button"
                    color="error"
                    variant="outlined"
                    disabled={updatingProfile}
                    onClick={() => history.push('/dashboard')}
                >
                    Cancel
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    onClick={onSaveProfile}
                    disabled={updatingProfile}
                >
                    {
                        updatingProfile ? 'Updating...' : 'Update Profile'
                    }
                </Button>
            </Box>
        </>
    );
};

export default EditProfileActions;