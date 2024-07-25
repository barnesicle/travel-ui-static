import React from 'react';

import {Box, Typography, Container, Grid, Button} from '@mui/material';
import type {Metadata} from "next";
import Link from "next/link";
import {Trips} from "@/app/trips/Trips";


export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};

type Props = {
}


export default function Page (props: Props) {


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

                    <Typography variant={"h3"} sx={{padding: 3}}>Trips</Typography>

                    <Box sx={{padding: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>


                       <Trips />




                    </Box>



                </Box>

            </Box>
        );

}

