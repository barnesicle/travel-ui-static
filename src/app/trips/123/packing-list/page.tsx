'use server';
import React from 'react';

import {
    Box,
    Typography,
    Container,
    Grid,
    Popper,
    Paper,
    Grow,
    ClickAwayListener,
    MenuList,
    MenuItem
} from '@mui/material';
import type {Metadata} from "next";
import {PackingList} from "@/app/user/[id]/packing-list/PackingList";


/*export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};*/

type Props = {
}



export  default async function PackingListPage (props: Props) {



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

                    <Typography variant={"h3"} sx={{padding: 3}}>Packing List</Typography>

                    <PackingList  />

                </Box>

            </Box>
        );

}

