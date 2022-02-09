import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Container, Typography } from '@mui/material';
import EditProfileContent from './EditProfileContent';
import { EditProfileProvider } from './editProfileContext';

const theme = createTheme();

const EditProfile = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Edit Profile
                    </Typography>
                    <EditProfileProvider>
                        <EditProfileContent />
                    </EditProfileProvider>
                </Box>
            </Container>
        </ThemeProvider >
    );
};

export default EditProfile;