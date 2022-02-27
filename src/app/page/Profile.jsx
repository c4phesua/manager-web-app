import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import AccountProfile from '../component/AccountProfile';
import { AccountProfileDetails } from '../component/AccountProfileDetails';
import { PAGE_NAME } from '../util/Constant';

const Profile = (props) => {

  document.title = PAGE_NAME.PROFILE;
  const { user } = props;
  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.PROFILE}</Typography>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile user={user} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails user={user} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}

export default Profile;