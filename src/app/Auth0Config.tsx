'use client';

import {Auth0Provider} from "@auth0/auth0-react";
import {getConfig} from "@/app/config";
import React from "react";

export function Auth0Config(props: { children: React.ReactNode }) {
    return <Auth0Provider
        {...providerConfig()}
    >
        {props.children}
    </Auth0Provider>
}

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

// TODO Move
const providerConfig = () => {
    console.log('global.window?.location.origin', global.window?.location.origin)
    return {
        domain: config.domain,
        clientId: config.clientId,
        onRedirectCallback,
        authorizationParams: {
            redirect_uri: 'http://localhost:4000/login',//global.window?.location.origin,
            ...(config.audience ? {audience: config.audience} : null),
        },
    };
}