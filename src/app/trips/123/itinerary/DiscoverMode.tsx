import {Box, Button, Typography} from "@mui/material";
import {Place} from "@/app/trips/123/itinerary/types";
import React from "react";

type DiscoverModeProps = {
    googleNearbyPlaces: Place[] | undefined,
}

export function DiscoverMode(props: DiscoverModeProps) {
    return <> <Typography variant={"h4"} sx={{padding: 3}}>Nearby Places</Typography>

    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {/*{props.googleNearbyPlaces?.map((place, index) => {
            return <Place key={index} place={place} removePlace={removePlace} updatePlaces={updatePlaces} isAdded={false} />
        })}*/}

        <Box sx={{padding: 2}}>
            <Button variant={'contained'}>Show on Map</Button>
        </Box>

        <Box sx={{padding: 2}}>
            <Button variant={'contained'}>Show More</Button>
        </Box>


    </Box>

    </>
}