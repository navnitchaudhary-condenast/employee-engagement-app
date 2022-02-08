import React, { useContext } from 'react';
import Grid from "@mui/material/Grid";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { Box, Divider, InputLabel, MenuItem, Select, FormControl, TextField, Typography } from '@mui/material';
import EditProfileContext from '../editProfileContext';

const EditPersonal = () => {
    const { personalInfo, updatePersonalInfo } = useContext(EditProfileContext);
    console.log(personalInfo, 'personalInfo');

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Box
                    component="img"
                    sx={{ height: 'auto', width: '100%', borderRadius: '10px' }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2">
                </Box>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            fullWidth
                            id="fullname"
                            label="Full Name"
                            name="fullName"
                            autoComplete="name"
                            autoFocus
                            size='small'
                            disabled
                            value={personalInfo.fullName}
                            onChange={(newValue) => updatePersonalInfo('fullName', newValue)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            size='small'
                            disabled
                            value={personalInfo.email}
                            onChange={(newValue) => updatePersonalInfo('email', newValue)}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <MobileDatePicker
                            label="Date of birth"
                            inputFormat="dd/MM/yyyy"
                            value={personalInfo.dob}
                            onChange={(newValue) => updatePersonalInfo('dob', newValue)}
                            renderInput={(params) => <TextField {...params} size='small' fullWidth />}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            type="text"
                            fullWidth
                            id="mobile"
                            label="Mobile Number (with country code)"
                            name="mobile"
                            autoComplete="mobile"
                            size='small'
                            value={personalInfo.mobile}
                            onChange={(newValue) => updatePersonalInfo('mobile', newValue)}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="country-label" size='small'>Country</InputLabel>
                            <Select
                                size='small'
                                labelId="country-label"
                                id="country"
                                label="Country"
                                sx={{ textAlign: 'left' }}
                                value={personalInfo.country}
                                onChange={(newValue) => updatePersonalInfo('country', newValue)}
                            >
                                <MenuItem value='India'>India</MenuItem>
                                <MenuItem value='US'>US</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            type="text"
                            fullWidth
                            id="state"
                            label="State"
                            name="state"
                            autoComplete="state"
                            size='small'
                            value={personalInfo.state}
                            onChange={(newValue) => updatePersonalInfo('state', newValue)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            type="text"
                            fullWidth
                            id="about"
                            label="About"
                            autoComplete="about"
                            name="about"
                            size='small'
                            multiline
                            rows={3}
                            value={personalInfo.about}
                            onChange={(newValue) => updatePersonalInfo('about', newValue)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            component="h6"
                            variant="h6"
                            align="center"
                            color="text.primary"
                        >
                            Reset Password
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            type="password"
                            fullWidth
                            id="oldPassword"
                            label="Current Password"
                            name="oldPassword"
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} md={6} />

                    <Grid item xs={12} md={6}>
                        <TextField
                            type="password"
                            fullWidth
                            id="newPassword"
                            label="New Password"
                            name="newPassword"
                            size='small'
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            type="password"
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            name="Confirm Password"
                            size='small'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default EditPersonal;