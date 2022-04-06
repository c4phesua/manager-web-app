import {Avatar, Card, CardContent, Grid, Typography} from '@mui/material';
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TỔNG SỐ ĐƠN
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            12000
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
