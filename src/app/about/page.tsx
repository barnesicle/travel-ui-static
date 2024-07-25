import React from 'react';

import {Box, Typography, Container, Grid} from '@mui/material';
import {getBaseImageURLKey} from "@/app/paths";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};

type Props = {
}

export default function AboutUsPage (props: Props) {


        const paddingSx = {
            padding: 1
        };

        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '100%',
            }}>

                <Box sx={{padding: 2, maxWidth: '1000px'}}>

                    <Typography variant={"h3"} sx={{padding: 3}} >About</Typography>

                    <Grid container>

                        <Grid item xs={12} md={6} sx={{display: 'flex', alignSelf: 'center', flexDirection: 'column', padding: 1}}>
                            <Typography variant={"h4"} sx={paddingSx}>
                                Our Story
                            </Typography>
                            <Typography sx={paddingSx} component={"div"}>
                                Meet my dog, Beyla. She laid down in with a sad face looking at me. I felt bad for her. I had been busy with the new baby. I had not taken her for a walk in a while or anywhere. She loves to go on adventures.
                            </Typography>
                            <Typography sx={paddingSx}>
                                I realized I do not have a way of tracking how often I take her places, besides a pen and a pencil. That&apos;s when I decided to create my own way.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{padding: {sm: 0, md: 6}}}>
                            <img src={getBaseImageURLKey() + "/about-beyla-sunglasses.jpg"} alt="Beyla" style={{width: '100%', height: '100%'}} />
                        </Grid>

                    </Grid>


                    {/* TODO Banner image or video */}

                    <Typography variant={"h4"} sx={paddingSx}>
                        Our Mission
                    </Typography>
                    <Typography variant={"body1"} sx={paddingSx}>
                        There are many beautiful places to see, things to do, and people to meet. We want to help you get out there and do it. We advocate for positive change. We want people to take part in environmental challenges, health and fitness challenges and so much more.
                    </Typography>

                    <Typography variant={"body1"} sx={paddingSx}>
                        We are about doing. There are so many social media platforms where you can type. Type to friends or random people, share videos or pictures or opinions ... etc. While all that has
                    a place in peoples lives and has changed the world. We want to get people DOING things.
                    </Typography>

                    <Typography variant={"body1"} sx={paddingSx}>
                        This could mean be as simple as getting out and walking with friends or co-workers, creating a challenge to get 10 000 steps per day. Ride a certain distance per month. Learn a new skill and get encouraged by settings goals.
                    </Typography>

                </Box>

            </Box>
        );

}
