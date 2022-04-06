import React from 'react';
import { PAGE_NAME } from '../util/Constant';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from "../component/dashboard/budget";
import { TotalCustomers } from "../component/dashboard/total-customers";
import { TotalProfit } from "../component/dashboard/total-profit";
import { Sales } from "../component/dashboard/sales";
import { TrafficByDevice } from "../component/dashboard/traffic-by-device";
import { LatestProducts } from "../component/dashboard/latest-products";
import { LatestOrders } from "../component/dashboard/latest-orders";
import PerfectScrollbar from "react-perfect-scrollbar";


const Dashboard = (props) => {

  document.title = PAGE_NAME.DASHBOARD;

  return (
    <>
      <Head>
        <title>
          Dashboard | Material Kit
        </title>
      </Head>
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
                <Budget />
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <TotalCustomers />
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <TotalProfit sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                <Sales />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <TrafficByDevice sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <LatestProducts sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                <LatestOrders />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </PerfectScrollbar>
    </>
  );
}

export default Dashboard;
