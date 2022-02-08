import { Button, Box, Divider } from '@mui/material';
import { useContext } from 'react';
import EditProfileContext from './editProfileContext';

const EditProfileActions = () => {
    const { onSaveProfile, updatingProfile } = useContext(EditProfileContext);
    return (
        <>
            <Divider sx={{ width: '100%', my: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', width: '100%', gap: '10px' }}>
                <Button
                    type="button"
                    color="error"
                    variant="outlined"
                    disabled={updatingProfile}
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