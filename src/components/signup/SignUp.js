import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { ClassNames } from "@emotion/react";
import classes from "./SignUp.module.css";
import { Country, State, City } from "country-state-city";
const theme = createTheme();
const Input = styled("input")({
  display: "none",
});

const SignUp = () => {
  const [countaryList, setCountaryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [countaryCode, setCountaryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [profileBase64Data, setProfileBase64Data] = useState("");

  useEffect(() => {
    setCountaryList(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (profileImage) {
      setProfileUrl(URL.createObjectURL(profileImage));
    }
  }, [profileImage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const onNameChange = (event) => {
    const name = event.target.value;
    setFullName(name);
    console.log("==Name",name)
  };

  const onEmailIdChange = (event) => {
    const email = event.target.value;
    setEmailId(email);
    console.log("==Name",email)
  };

  const onPasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    console.log("==Name",password)
  };

  const onCountaryChange = (event) => {
    const states = State.getStatesOfCountry(event.target.value);
    setStateList(states);
    setCountaryCode(event.target.value);
  };

  const onStateChange = (event) => {
    const cities = City.getCitiesOfState(countaryCode, event.target.value);
    setCityList(cities);
    setStateCode(event.target.value);
  };

  const onCityChange = (event) => {
    setCityCode(event.target.value);
  };

  const setSelectedProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
    converProfileImagetoBase64(e.target.files[0]);
  };

  const converProfileImagetoBase64 = (file) => {
    let reader = new FileReader();
    reader.onloadend = function () {
      console.log("BASE64RESULT", reader.result);
      setProfileBase64Data(reader.result)
    };
    reader.readAsDataURL(file);
  };

  const isSubmitEnabled = () =>{
   const check = (fullName && emailId && password && countaryCode && stateCode && cityCode && profileUrl);
   console.log("===chce",check);
   return check;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Full Name"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  onChange={onNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onEmailIdChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onPasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">
                    Countary
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={countaryCode}
                    label="Countary"
                    className={classes.Countary}
                    onChange={onCountaryChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {countaryList &&
                      countaryList.map((countary) => {
                        return (
                          <MenuItem
                            key={countary.isoCode}
                            value={countary.isoCode}
                          >
                            {countary.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              {countaryCode && (
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">
                      State
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={stateCode}
                      label="State"
                      className={classes.Countary}
                      onChange={onStateChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {stateList &&
                        stateList.map((state) => {
                          return (
                            <MenuItem key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              {stateCode && (
                <Grid item xs={12}>
                  <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">
                      City
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={cityCode}
                      label="City"
                      className={classes.Countary}
                      onChange={onCityChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {cityList &&
                        cityList.map((city) => {
                          return (
                            <MenuItem key={city.name} value={city.name}>
                              {city.name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              <Grid item xs={6}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={setSelectedProfileImage}
                  />
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<PhotoCamera />}
                  >
                    Profile Upload
                  </Button>
                </label>
              </Grid>
              <Grid item xs={6}>
                {profileUrl && profileImage && (
                  <img src={profileUrl} alt={profileImage.name} height="60px" />
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!(fullName && emailId && password && countaryCode && stateCode && cityCode && profileUrl)}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
