import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME } from '../util/Constant';
import PerfectScrollbar from "react-perfect-scrollbar";
import IncomeChart from '../component/IncomeChart';
import StylePieChart from '../component/StylePieChart';

const Dashboard = (props) => {

  document.title = PAGE_NAME.DASHBOARD;

  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.DASHBOARD}</Typography>
      <PerfectScrollbar>
        <Box
          component="main"
          sx={{
            py: 8
          }}
          className="dashboard-container"
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                TODO Item 1
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                TODO Item 2
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                TODO Item 3
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                <IncomeChart />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <StylePieChart />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                TODO Item 6
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                TODO Item 7
              </Grid>
            </Grid>
          </Container>
        </Box>
      </PerfectScrollbar>
    </div>
  );
}

export default Dashboard;
