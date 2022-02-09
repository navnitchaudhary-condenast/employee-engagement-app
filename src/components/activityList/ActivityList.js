import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import classes from "./ActivityList.module.css";

const ActivityList = () => {
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
                        </Card>
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    );
  };
  
  export default ActivityList;