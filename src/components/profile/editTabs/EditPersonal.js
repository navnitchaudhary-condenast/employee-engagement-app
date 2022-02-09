import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import {
  Box,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import EditProfileContext from "../editProfileContext";
import fileUtils from "../../../utils/file";
import { styled } from "@mui/material/styles";
import { Country, State, City } from "country-state-city";

const { convertToBase64 } = fileUtils;
const InputNoDisplay = styled("input")({
  display: "none",
});

const EditPersonal = () => {
  const { personalInfo, updatePersonalInfo, passwordInfo, updatePasswordInfo } =
    useContext(EditProfileContext);
  const { country, state } = personalInfo;
  const [countryList] = useState(Country.getAllCountries());
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    setStateList(State.getStatesOfCountry(personalInfo.country));
  }, [country]);

  useEffect(() => {
    setCityList(City.getCitiesOfState(country, state));
  }, [state]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      updatePersonalInfo("profile", base64Image);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          component="img"
          sx={{ height: "auto", width: "100%", borderRadius: "10px" }}
          alt="Profile Photo"
          src={personalInfo.profile || personalInfo.image}
        ></Box>

        <label htmlFor="fileUpload">
          <InputNoDisplay
            id="fileUpload"
            type="file"
            accept="image/*"
            onChange={uploadImage}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              size="small"
              disabled
              value={personalInfo.name || ""}
              onChange={(newValue) => updatePersonalInfo("name", newValue)}
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
              size="small"
              disabled
              value={personalInfo.email || ""}
              onChange={(newValue) => updatePersonalInfo("email", newValue)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <MobileDatePicker
              label="Date of birth"
              inputFormat="dd/MM/yyyy"
              value={personalInfo.dob || ""}
              onChange={(newValue, value) =>
                updatePersonalInfo("dob", newValue)
              }
              renderInput={(params) => (
                <TextField {...params} size="small" fullWidth />
              )}
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
              size="small"
              value={personalInfo.mobile || ""}
              onChange={(newValue) => updatePersonalInfo("mobile", newValue)}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="country-label" size="small">
                Country
              </InputLabel>
              <Select
                size="small"
                labelId="country-label"
                id="country"
                label="Country"
                sx={{ textAlign: "left" }}
                value={personalInfo.country || ""}
                onChange={(newValue) => updatePersonalInfo("country", newValue)}
              >
                {countryList ?
                  countryList.map((country) => {
                    return (
                      <MenuItem key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </MenuItem>
                    );
                  }): null}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="state-label" size="small">
                State
              </InputLabel>
              <Select
                size="small"
                labelId="state-label"
                id="state"
                label="State"
                sx={{ textAlign: "left" }}
                value={personalInfo.state || ""}
                onChange={(newValue) => updatePersonalInfo("state", newValue)}
              >
                  {stateList ?
                  stateList.map((state) => {
                    return (
                      <MenuItem key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </MenuItem>
                    );
                  }): null}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="city-label" size="small">
                City
              </InputLabel>
              <Select
                size="small"
                labelId="city-label"
                id="city"
                label="City"
                sx={{ textAlign: "left" }}
                value={personalInfo.city || ""}
                onChange={(newValue) => updatePersonalInfo("city", newValue)}
              >
                {cityList ?
                  cityList.map((city) => {
                    return (
                      <MenuItem key={city.name} value={city.name}>
                        {city.name}
                      </MenuItem>
                    );
                  }): null}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="text"
              fullWidth
              id="about"
              label="About"
              autoComplete="about"
              name="about"
              size="small"
              multiline
              rows={3}
              value={personalInfo.about || ""}
              onChange={(newValue) => updatePersonalInfo("about", newValue)}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight={600} align="center" color="text.primary">
              Reset Password
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              type="password"
              fullWidth
              id="currentPassword"
              label="Current Password"
              name="currentPassword"
              size="small"
              value={passwordInfo.current || ""}
              onChange={(newValue) => updatePasswordInfo("current", newValue)}
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
              size="small"
              value={passwordInfo.new || ""}
              onChange={(newValue) => updatePasswordInfo("new", newValue)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              type="password"
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              name="Confirm Password"
              size="small"
              value={passwordInfo.confirm || ""}
              onChange={(newValue) => updatePasswordInfo("confirm", newValue)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditPersonal;
