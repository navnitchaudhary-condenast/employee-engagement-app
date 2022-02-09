import { useState, useContext } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import EditPersonal from './editTabs/EditPersonal';
import EditOfficial from './editTabs/EditOfficial';
import EditSocial from './editTabs/EditSocial';
import EditInterests from './editTabs/EditInterests';
import EditProfileActions from './EditProfileActions';
import EditProfileContext from './editProfileContext';

const EditProfileContent = () => {
    const [selectedTab, setSelectedTab] = useState('personal');
    const { profileLoading } = useContext(EditProfileContext);

    if (profileLoading) {
        return <Box>Loading...</Box>;
    }
    return (
        <>
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
        </>
    );
};

export default EditProfileContent;