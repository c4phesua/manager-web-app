import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';



const PackageCard = ({ packAge }) => {

  const renderImageLogo = (image) => {

  }

  const handleCardClick = () => {
    return;
  }

  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={2} lg={2}>
          <CardMedia
            // className={classes.cover}
            image={renderImageLogo(packAge.image_link)}
            onClick={() => { handleCardClick(packAge) }}
          />
        </Grid>

        <Grid container item xs={12} md={8} lg={8}>
          <CardContent>
            <Typography component="h6" variant="h6" color="primary">
              <Link onClick={() => { handleCardClick(packAge) }} style={{ textDecoration: 'none' }}>
                {packAge.title}
              </Link>
            </Typography>
            <Typography component="div" variant="body">
              {packAge.company_name}
            </Typography>
          </CardContent>
        </Grid>
        {/* <Grid item xs={12} md={2} lg={2}>
          {New ? <NewLable /> : null}
        </Grid> */}

      </Grid>
    </Card>
  );
}

export default PackageCard;