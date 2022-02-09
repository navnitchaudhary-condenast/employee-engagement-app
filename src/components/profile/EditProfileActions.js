import { Button, Box, Divider, Dialog, DialogContent, DialogActions, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import EditProfileContext from './editProfileContext';
import { useHistory } from "react-router-dom";

const EditProfileActions = () => {
    const { onSaveProfile, updatingProfile } = useContext(EditProfileContext);
    const [open, setOpen] = useState(false);
    let history = useHistory();

    const handleOnSave = async () => {
        onSaveProfile().then(() => {
            setOpen(true);
        });
    }
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
                    onClick={handleOnSave}
                    disabled={updatingProfile}
                >
                    {
                        updatingProfile ? 'Updating...' : 'Update Profile'
                    }
                </Button>
            </Box>

            <Dialog onClose={() => {
                setOpen(false);
            }} open={open}>
                <DialogContent>
                    <Typography component="body1">
                        Profile updated successfully
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EditProfileActions;