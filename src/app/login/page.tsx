'use client';

import React, {useEffect} from 'react';

import {Box, Typography, Container, Grid} from '@mui/material';
import {getBaseImageURLKey} from "@/app/paths";
import type {Metadata} from "next";
import {useAuth0} from "@auth0/auth0-react";


/*export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};*/

type Props = {
}

export default function Page (props: Props) {

    const {
        isAuthenticated,
    } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            window.location.assign('http://localhost:4000/') // TODO URL config
        }
    }, [isAuthenticated])

    // TODO Handle errors... etc

    return (
        <Typography>
            Logging in...
        </Typography>
    );

}
