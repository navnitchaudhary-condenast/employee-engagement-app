import { useContext, useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Tab, CssBaseline, Container, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EditPersonal from './editTabs/EditPersonal';
import EditOfficial from './editTabs/EditOfficial';
import EditSocial from './editTabs/EditSocial';
import EditInterests from './editTabs/EditInterests';
import EditProfileActions from './EditProfileActions';
import { EditProfileProvider } from './editProfileContext';

const theme = createTheme();

const EditProfile = () => {
    const [selectedTab, setSelectedTab] = useState('personal');

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
                        <TabContext value={selectedTab}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={(event, newValue) => setSelectedTab(newValue)} aria-label="Edit Profile">
                                    <Tab label="Personal" value="personal" />
                                    <Tab label="Official" value="official" />
                                    <Tab label="Social" value="social" />
                                    <Tab label="Interests" value="interests" />
                                </TabList>
                            </Box>
                            <TabPanel value="personal">
                                <EditPersonal />
                            </TabPanel>
                            <TabPanel value="official">
                                <EditOfficial />
                            </TabPanel>
                            <TabPanel value="social">
                                <EditSocial />
                            </TabPanel>
                            <TabPanel value="interests">
                                <EditInterests />
                            </TabPanel>
                        </TabContext>
                        <EditProfileActions />
                    </EditProfileProvider>
                </Box>
            </Container>
        </ThemeProvider >
    );
};

export default EditProfile;