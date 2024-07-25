import React from 'react';

import {Box, Typography, Container, Grid} from '@mui/material';
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};

type Props = {
}

// TODO's
// Get cash (if foreign country)
// Clean out fridge
// Clean house
//


const itinerary = [
    {

    }
];


export default function AboutUsPage (props: Props) {

        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '100%',
            }}>

                <Box sx={{padding: 2}}>

                    <Typography variant={"h3"} sx={{padding: 3}}>TODO</Typography>


                </Box>

            </Box>
        );

}


