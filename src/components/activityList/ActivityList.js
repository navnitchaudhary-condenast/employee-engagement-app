import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import CardMedia from "@mui/material/CardMedia";
import classes from "./ActivityList.module.css";

const styles = {
    card: {
      margin: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  };


const ActivityList = () => {
    const data = [
        {
            title: "title 1",
            details: "details 1",
            rules: "rules"
        },
        {
            title: "title 1",
            details: "details 1",
            rules: "rules"
        },
        {
            title: "title 1",
            details: "details 1",
            rules: "rules"
        }
    ];
  
    const plusIcon = <FontAwesomeIcon icon={faPlus} size="4x"/>
   
    return (
        <React.Fragment>
            <Typography variant="h5" component="div" gutterBottom>
               ACTIVITIES
            </Typography>
            <Grid container sx={{ minWidth: 275, mt: 2 }} spacing={2} alignItems="stretch">
                <Grid item xs={12} sm={6} md={4}>
                    <Card variant="outlined" style={{ height: '100%', backgroundColor: "lightgrey" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                               Online Game
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                               Brief description of how it works.
                                <br />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card variant="outlined" style={{ height: '100%',  backgroundColor: "lightgrey" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Riddle
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                               Brief description of how it works.
                               Brief description of how it works.
                               Brief description of how it works.
                               Brief description of how it works.
                                <br />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card variant="outlined" style={{ height: '100%',  backgroundColor: "lightgrey" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                MCQ
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                               Brief description of how it works.
                                <br />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card variant="outlined" style={{ height: '100%',  backgroundColor: "lightgrey" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Another activity
                            </Typography>
                            <br/>
                            <Typography variant="body2">
                               Brief description of how it works.
                               Brief description of how it works.
                               Brief description of how it works.
                               Brief description of how it works.
                                <br />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <a href = {"/add-activity"} className={classes.Link}>
                        <Card variant="outlined" style={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Guess who picture game
                                </Typography>
                                <br/>
                                <Typography variant="body2">
                                Brief description of how it works.
                                Brief description of how it works.
                                Brief description of how it works.
                                Brief description of how it works.
                                    <br />
                                </Typography>
                            </CardContent>
                            {/* <CardContent>
                                <div>
                                    {plusIcon}
                                </div>
                                <br/>
                                <Typography sx={{ mb: 0.25 }} color="text.secondary">
                                    Add Activity
                                </Typography>
                            </CardContent> */}
                        </Card>
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    );
  };
  
  export default ActivityList;