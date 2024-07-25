import {useAuth0} from "@auth0/auth0-react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {appName} from "@/app/app-details";
import {links} from "@/app/links";
import Profile from "@/app/Profile";
import React from "react";

export const Header = () => {

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
        isLoading,
        error
    } = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            }
        });


    console.log('Header', user, isAuthenticated, isLoading, error)

    return <header>

        <AppBar id={"header"} position="static" elevation={0}>
            <Toolbar>
                <Box sx={{flexGrow: 1}} id={'company-name'}>
                    <Typography  variant="h6" component={Link} href={"/"} sx={{textDecoration: 'none'}}>
                        {appName()}
                    </Typography>
                </Box>

                <Button size="small" color="secondary" variant="text" LinkComponent={Link} href={'/trips'}
                        sx={{color: "white"}}>
                    Trips
                </Button>

                <Button size="small" color="secondary" variant="text" LinkComponent={Link} href={'/trips/123/itinerary'}
                        sx={{color: "white"}}>
                    Itinerary
                </Button>


                <Button size="small" color="secondary" variant="text" LinkComponent={Link} href={'/trips/123/packing-list'}
                        sx={{color: "white"}}>
                    Packing List
                </Button>

                <Button size="small" color="secondary" variant="text" LinkComponent={Link} href={links.about}
                        sx={{color: "white"}}>
                    About
                </Button>

                <Button size="small" color="secondary" variant="text" LinkComponent={Link} href={links.blog}
                        sx={{color: "white"}}>
                    Blog
                </Button>

                {isAuthenticated &&
                    <>

                        <Button size="small" color="secondary" variant="text"  onClick={() => {
                            window.location.assign('http://localhost:4000/') // TODO URL config
                        }}
                                sx={{color: "white"}}>
                            Other Application
                        </Button>


                        <Button size="small" color="secondary" variant="text"  onClick={() => logoutWithRedirect()}
                                sx={{color: "white"}}>
                            Logout
                        </Button>

                        <Profile />

                    </>
                }

                {!isAuthenticated && <>
                    <Button size="small" color="secondary" variant="text" onClick={() => loginWithRedirect()}
                            sx={{color: "white"}}>
                        Login
                    </Button>

                    {/* <Button size="small" color="secondary" variant="text" href={"https://www.motivationadvisor.com/signup"}
                                sx={{color: "white"}}>
                            Register
                        </Button>*/}
                </>
                }

            </Toolbar>

        </AppBar>
    </header>
}