'use client';

import theme from "@/app/theme";
import {AppBar, Box, Button, ThemeProvider, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {appName} from "@/app/app-details";
import {links} from "@/app/links";
import React from "react";
import {Footer} from "@/app/Footer";
import {Auth0Provider, useAuth0} from "@auth0/auth0-react";
import {getConfig} from "@/app/config";
import { useRouter } from 'next/navigation'
import Router from "next/router";
import Profile from "@/app/Profile";
import {Header} from "@/app/Header";

const config = getConfig();

const onRedirectCallback = (appState : any) => {
    console.log("onRedirectCallback", appState, window.location.pathname)
    //const router = useRouter()
    /* history.push(
         appState && appState.returnTo ? appState.returnTo : window.location.pathname
     );*/
    //window.history.replaceState
    //Router.replace(appState?.returnTo || window.location.pathname)
    //window.location.pathname = '/'; // TODO Change to use nextjs router.
    //window.location.hash = window.location.hash; // eslint-disable-line no-self-assign

    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const providerConfig = () => {
    console.log('global.window?.location.origin', global.window?.location.origin)
    return {
        domain: config.domain,
        clientId: config.clientId,
        onRedirectCallback,
        authorizationParams: {
            redirect_uri: 'http://localhost:3000/login',//global.window?.location.origin,
            ...(config.audience ? {audience: config.audience} : null),
        },
    };
}

export default function Main(props: { children: React.ReactNode }) {
    return <ThemeProvider theme={theme}>
        <Auth0Provider
            {...providerConfig()}
        >
        <>
            <Header />

            <main>
                {props.children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
        </Auth0Provider>
    </ThemeProvider>
}


