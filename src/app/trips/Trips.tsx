'use client';

import {Button, Box, Grid, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

export function Trips() {

    const [trips, setTrips] = React.useState([{
        id: '123',
        name: 'Australia 2024',
        startDate: '2024-01-01',
        endDate: '2024-01-31'

    }]);

    return <Box>


        {trips.map((trip) => {
            return <Grid container>
                <Grid item xs={10}>
                    <Typography>{trip.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button size="small" color="secondary" variant="contained" LinkComponent={Link} href={'/trips/' + trip.id}>
                        View
                    </Button>
                </Grid>
            </Grid>
        })}



        <Button variant="contained" color="primary" sx={{margin: 2}}>Create Trip</Button>
    </Box>
}