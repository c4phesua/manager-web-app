import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { PAGE_NAME, STATUS } from '../util/Constant';
import PerfectScrollbar from "react-perfect-scrollbar";
import IncomeChart from '../component/IncomeChart';
import StylePieChart from '../component/StylePieChart';
import BookingStatusStatistic from '../component/BookingStatusStatistic';

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
                lg={12}
                sm={12}
                xl={12}
                xs={12}
              >
                <Typography variant='h4'>Các lịch chụp ảnh</Typography>
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <BookingStatusStatistic status={STATUS.FINISH} />
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <BookingStatusStatistic status={STATUS.PENDING} />
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <BookingStatusStatistic status={STATUS.CANCELED} />
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
              >
                <BookingStatusStatistic status={STATUS.PROCESSING} />
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
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
              </Grid>
            </Grid>
          </Container>
        </Box>
      </PerfectScrollbar>
    </div>
  );
}

export default Dashboard;
