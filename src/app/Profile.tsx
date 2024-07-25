import React from "react";

import Loading from "@/components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import {Avatar, Box, Grid, Typography} from "@mui/material";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  if (!user) {
      return null;
  }

  return (
      <Box>
        <Grid container>
            {/*<Grid item  sx={{display: 'flex', alignItems: 'center'}}>
                <Typography variant={'h4'} sx={{padding: 1}}>{user.given_name}</Typography>
            </Grid>*/}
            <Grid item>

                <Avatar
                    src={user.picture}
                    alt="Profile"
                />
            </Grid>
        </Grid>
      </Box>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
