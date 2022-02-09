import React from 'react';
import { Card, Typography, CardHeader, CardMedia, Box, Grid } from '@mui/material';

const FactOfTheDay = () => {
    return (
        <Card variant="outlined" sx={{ display: 'flex', my: 2, maxWidth: 'sm', color: 'whitesmoke', backgroundColor: '#454545' }}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <CardMedia
                        component="img"
                        image="https://assets.vogue.com/photos/593ef4c38ba2821cdbcb8fc8/master/w_2207,h_3000,c_limit/08-zendaya-coleman-vogue-july-2017.jpg"
                        alt="Paella dish"
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                    <CardHeader title="Fact for the day!" titleTypographyProps={{
                        fontSize: 20,
                        fontWeight: '600',
                    }} />
                    <Box>
                        <Typography variant="body1" sx={{p: 2}}>
                            Approaches to covers have changed dramatically over the years at <span>Vogue</span>, from Edward Steichen’s first photographic color cover in 1932, to Salvador Dalí’s signature surrealist, dystopian landscape. The title delights in offering an element of surprise.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default FactOfTheDay;